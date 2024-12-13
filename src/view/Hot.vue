<template>
    <div class="hot-container">
        <img :src="image" alt="Category Image" class="hot-image" />
        <h1>{{ name }}</h1>
        <p>{{ productCount }} items</p>
    </div>
</template>

<script>
export default {
    name: "Hot",
    data() {
        return {
            image: this.$route.query.image || '',
            name: this.$route.query.name || '',
            productCount: this.$route.query.productCount || 0,
        };
    },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.hot-container {
    width: 73rem;
    height: 19rem;
    background-color: rgba(255, 242, 117, 0.5);
    border-radius: 20px;
    margin: auto;
}
.hot-image {
    width: 20%;
    height: auto;
    border-radius: 10px;
    /* border: 1px solid blue; */
}
</style>
