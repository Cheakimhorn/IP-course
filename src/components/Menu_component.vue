<template>
    <div class="allMenu">{{ groups }}</div>
</template>

<script>
export default {
    name: "Menu_component",
    props: {
            groups:String
    }
};
</script>

<style scoped>
.allMenu {
    color: black;
    margin: 0 10px;
    cursor: pointer;
}
</style>
