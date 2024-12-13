<template>
    <div  class="Promo" :style="{backgroundColor: color}">
        <img :src="image" alt="">
        <h2>{{ title }}</h2>
        <Button @click="shopNow(Promotion)" :buttonText="'Show Now'"/>

    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name: "Promotion",
    components:{
        Button,
    },
    props:{
        image:String,
        color:String,
        title: String,

    },
    methods: {
        shopNow() {
            alert("Let's Shop: " + this.title);
        }
    }
}
</script>

<style scoped>
    .Promo{
    width: 23.5rem;
    height: 16rem;
    background-color: aqua;
    margin-top: 2rem;
    border-radius: 20px;
    position: relative;
    }
    .Promo img{
        width:75%;
        height: 75%;
         object-fit: contain;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .Promo h2{
        color: black;
        position: absolute;
        top: 15%;
        left: 10%;
        width: 50%;

    }

</style>