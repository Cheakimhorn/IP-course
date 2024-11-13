<template>
    <div class="container">
      <div class="row1">
        <Category v-for="(products, index) in productStore.products"
        :key="index"
        :image="products.image"
        :name="products.name"
        :product-count="products.productCount"
        :color="products.color"
        />
      </div>
      <div class="row2">
        <Promotion v-for="(promotions,second) in productStore.promotions"
        :key="second"
        :image="promotions.image"
        :color="promotions.color"
        :title="promotions.title"
        />
      </div>
    </div>
  </template>
  <script>
  import { onMounted } from 'vue';
  import Category from './components/Category.vue';
  import Promotion from './components/Promotion.vue';
  import { useProductStore } from './stores/productStore';
  export default{
    name: 'App',
    components: {
      Category,
      Promotion,
      
    },
    setup(){
      const productStore = useProductStore();
      
      onMounted(async () => {
      await productStore.fetchGroups();
      console.log("Groups:", productStore.groups);

      await productStore.fetchProducts();
      console.log("Products:", productStore.products);

      await productStore.fetchCategories();
      console.log("Categories:", productStore.categories);

      await productStore.fetchPromotions();
      console.log("Promotions:", productStore.promotions);
      });
      return{
        productStore,
      };
    },
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

