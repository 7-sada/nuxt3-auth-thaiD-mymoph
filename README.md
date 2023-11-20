# Authentication with Nuxt 3, KeyCloak, ThaiD, MyMOPH, Pinia, TypeScript, sidebase/nuxt-auth and  next-auth

This is a boilerplate project for user authentication using Nuxt 3, MongoDB, TypeScript, Prisma, Tailwind, VeeValidate and JSON Web Tokens. This boilerplate is ideal for anyone who wants to create a complete login and authentication system with a robust and scalable structure.

## Prerequisites

Before you begin, make sure the following are installed on your machine:

```bash
 - [Nodejs 18.17.0](https://nodejs.org/en/blog/release/v18.17.0)
 - [NPM OR Yarn]
```

## Installation
1. Clone the repository to your local machine using the following command:
```bash
git remote add origin git@github.com:7-sada/nuxt3-auth-thaiD-mymoph.git
```
2. Navigate to your project folder and install dependencies using NPM or Yarn:
```bash
# npm
npm install
```
or
```bash
# yarn
yarn install
```
3. rename .env.example to .env file in the project root and following environment variables:
```bash
#Client ID
KEYCLOAK_ID=""

#Secret Secret
KEYCLOAK_SECRET=""

#issuer endpoint
KEYCLOAK_ISSUER=""

#authorization_endpoint
AUTHORIZED=""

#token_endpoint
TOKEN_ENDPOINT=""
```

4. Start the development server using the following command:
```bash
npm run dev
```
or
```bash
# yarn
yarn dev
```

## Technologies Used

 - [Nuxt.js 3](https://nuxt.com/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [@sidebase/nuxt-auth](https://sidebase.io/nuxt-auth/getting-started/quick-start)
 - [pinia](https://pinia.vuejs.org/ssr/nuxt.html)
 - [keycloak](https://www.keycloak.org/)

## ThaiD
[ThaiD](https://www.bora.dopa.go.th/app-thaid/)
กรมการปกครองขับเคลื่อนโครงการพัฒนาระบบการพิสูจน์และยืนยันตัวตนทางดิจิทัล (DOPA-Digital ID) ผ่านแอปพลิเคชัน ThaID เพื่อสร้างต้นแบบและนวัตกรรมใหม่ในการพิสูจน์และยืนยันตัวตนทางดิจิทัลของประเทศรองรับการใช้งานบริการภาครัฐ

## MyMoph
[MyMOPH](https://mymoph.moph.go.th/th/main) คือMobile Application ที่พัฒนาขึ้นโดยมีวัตถุประสงค์เพื่อช่วยอำนวยความสะดวกให้กับเจ้าหน้าที่และบุคลากรในการเข้าถึงบริการต่างๆ สำหรับเจ้าหน้าที่และบุคลากรในกระทรวงสาธารณสุข และยังใช้เป็นเครื่องมือสำหรับพิสูจน์และยืนยันตัวบุคคล ก่อนที่จะเข้าถึงบริการต่างๆ ของกระทรวงสาธารณสุข อันจะเป็นการช่วยอำนวยความสะดวกและลดความยุ่งยากในการเข้าถึงบริการต่างๆ ให้มีความง่ายและรวดเร็วยิ่งขึ้น 

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)