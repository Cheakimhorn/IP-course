<template>
    <div class="allMenu">{{ menu }}</div>
</template>

<script>
export default {
    name: "Menu_component",
    props: {
        menu: {
            type: String,
            required: true // This ensures the prop must be passed
        }
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
