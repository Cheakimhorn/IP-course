<template>
    <div>
      <HeaderPage/>
      <main>
        <router-view/>
      </main>
      <FooterPage/>
    </div>
</template>

<script setup>

import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';

</script>

<style lang="scss" scoped>

</style>
