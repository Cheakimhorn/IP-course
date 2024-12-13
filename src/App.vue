<template>
       <div class="header">
        <Header/>
      </div>
  <router-view></router-view>
</template>

<script setup>
import Header from './components/Header.vue';
</script>
<style scoped>
.header{
  width: 75rem;
    height: 8rem;
    background-color: rgb(254, 252, 252);
    padding: 1rem;
    margin: auto;
}

</style>