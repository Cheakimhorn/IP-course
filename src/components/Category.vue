<template>
    <div class="card" :style="{ backgroundColor: color }"@click="navigateToHot">
        <div class="card-img">
            <img :src="image" :alt="name" />
        </div>
        <div class="card-text">
            <h4>{{ name }}</h4>
            <p>{{ productCount }} items</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: {
        image: String,
        name: String,
        productCount: Number,
        color: String,
    },
    methods: {
        navigateToHot() {
            this.$router.push({
                path: '/Hot',
                query: { image: this.image, name: this.name, productCount:this.productCount } 
            });
        },
    },
};
</script>


<style  scoped>
    .card{
        color: black;
        border-radius: 10px;
        border: 1px solid green;
        width: 6.5rem;
        height: 8.5rem;
        text-decoration: none;
        cursor: pointer;
    }
    .card-img{
        width: 100%;
        height: 60%;
        border-radius: 10px;
    }
    .card-img img{
        width: 100%;
        height: 100%;
    }
    .card-text{
        width: 100%;
        height: 40%;
        border-radius: 10px;
        padding: 3px;
    }
    .card-text h4{
        display: flex;
        justify-content: center;
    }
    .card-text p{
        display: flex;
        justify-content: center;
        opacity: 0.8;
        /* font-size: 13px; */
    }
</style>