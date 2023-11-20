import Keycloak from 'next-auth/providers/keycloak'
import { type TokenSet } from "next-auth/core/types"
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    //@ts-ignore
    debug: process.env.DEBUG || false,
    secret: 'sso-auth',
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        Keycloak.default(
            {
                id: "thaid",
                name: "ThaiD",
                style: {
                    logo:"https://images.droidsans.com/wp-content/uploads/2023/01/unnamed-2.webp"
                },
                clientId: process.env.KEYCLOAK_ID,
                clientSecret: process.env.KEYCLOAK_SECRET,
                issuer: process.env.KEYCLOAK_ISSUER,
                signatureAlgorithm: 'RS256',
                authorization: {
                    params: {
                        scope: "openid email profile client_roles cid",
                        kc_idp_hint: "thaiid"
                    }
                }
            }
        ),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        Keycloak.default(
            {
                id: "mymoph",
                name: "MyMoph",
                style: {
                    logo:"https://mymoph.moph.go.th/assets/images/mymoph-v8-go-green.png"
                },
                clientId: process.env.KEYCLOAK_ID,
                clientSecret: process.env.KEYCLOAK_SECRET,
                issuer: process.env.KEYCLOAK_ISSUER,
                signatureAlgorithm: 'RS256',
                authorization: {
                    params: {
                        scope: "openid email profile client_roles cid",
                        kc_idp_hint: "my-moph"
                    }
                }
            }
        )
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        /**
 * Asynchronously generates a new JWT token.
 *
 * @param {Object} token - The current JWT token object.
 * @param {Object} account - The account object.
 * @return {Object} The updated JWT token object.
 */
        async jwt({ token, account }: any) {
            if (account) {
                return {
                    ...token,
                    access_token: account?.access_token,
                    expires_at: Math.floor(Date.now() / 1000 + account.expires_at),
                    refresh_token: account?.refresh_token
                }
            } else if (Date.now() < token.exp) {
                return token
            } else {
                try {
                    //@ts-ignore
                    const response = await fetch(process.env.TOKEN_ENDPOINT, {
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        //@ts-ignore
                        body: new URLSearchParams({
                            client_id: process.env.KEYCLOAK_ID,
                            client_secret: process.env.KEYCLOAK_SECRET,
                            grant_type: "refresh_token",
                            refresh_token: token.refresh_token
                        }),
                        method: "POST"
                    })

                    const tokens: TokenSet = await response.json()

                    if (!response.ok) {

                        // logout
                        await fetch(`${process.env.BASE_URL}/api/auth/signout?callbackUrl=/api/auth/session`, {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: await fetch(`${process.env.BASE_URL}/api/auth/csrf`).then(rs => rs.text())
                        });
                    }

                    return {
                        ...token,
                        access_token: tokens.access_token,
                        expires_at: Math.floor(Date.now() / 1000 + token.exp),
                        refresh_token: tokens.refresh_token ?? token.refresh_token
                    }

                } catch (error) {
                    console.error("Error refreshing access token", error)

                    return { ...token, error: "RefreshAccessTokenError" as const }
                }
            }
        },
        /**
 * A description of the entire function.
 *
 * @param {any} session - the session object
 * @param {any} user - the user object
 * @param {any} token - the token object
 * @return {any} the updated session object
 */
        async session({ session, user, token }: any) {
            session.accessToken = token.access_token
            return session
        },
    }
})