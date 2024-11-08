<template>
    <div class="container">
      <div class="row1">
        <Category v-for="(products, index) in products"
        :key="index"
        :image="products.image"
        :name="products.name"
        :product-count="products.productCount"
        :color="products.color"
        />
      </div>
      <div class="row2">
        <Promotion v-for="(promotions,second) in promotions"
        :key="second"
        :image="promotions.image"
        :color="promotions.color"
        :title="promotions.title"
        />
      </div>
      <div class="">Create local variable</div>
    </div>
  </template>
  <script>
  import axis from 'axios';
  import Category from './components/Category.vue';
  import Promotion from './components/Promotion.vue';
  export default{
    name: 'App',
    components: {
      Category,
      Promotion,
    },
    data(){
      return{
        products:[],
        promotions:[]
      };
    },
    methods: {
      async getProduct() {
        const response = await axis.get('http://localhost:3000/api/categories')
        const products = response.data;
        this.products =products;
      },
      async getPromotion() {
        const responsePromotion = await axis.get('http://localhost:3000/api/promotions');
        const promotions = responsePromotion.data;
        this.promotions = promotions;
      }
    },
    async mounted() {
      this.getProduct();
      this.getPromotion()
    }
  };
  </script>

  <style>
  .container{
    width: 75rem;
    height: 35rem;
    background-color: rgb(255, 255, 255);
    padding: 1rem;
  }
  .row1{
    width: 100%;
    height: 31%;
    padding: 7px;
    display: flex;
    justify-content: space-between;
  }
  .row2{
    width: 100%;
    height: 69%;
    display: flex;
    justify-content: space-between;
  }
  </style>

