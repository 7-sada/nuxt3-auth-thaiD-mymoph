<template>
    <h1>Page is Protected</h1>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: ['auth'],
})

</script>