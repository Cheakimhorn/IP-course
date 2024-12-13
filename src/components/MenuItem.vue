<template>
    <div class="Item">
        <router-link v-if="route" :to="route" class="link">
            <i :class="Icorn"></i>
            {{ TextItem }}
        </router-link>
        <span v-else>
            <i :class="Icorn"></i>
            {{ TextItem }}
        </span>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        Icorn: String,
        TextItem: String,
        route: String 
    }
}
</script>

<style scoped>
.Item {
    width: auto;
    height: 40px;
    margin: 5px;
    display: flex;
    align-items: center;
    padding: 0 3px;
    font-size: 17px;
}
.Item i {
    margin-right: 5px;
    font-size: 20px;
}
.link {
    text-decoration: none;
    color:black;
}
.link:hover {
    text-decoration: underline; 
}
</style>