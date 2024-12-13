<template>
    <div class="container">
      <div class="HomePage">
        <div class="TextHomePage">
          <h1 style="font-size: 50px; ">Don't miss amazing grocery deals</h1>
          <h3 style="margin-top: 3%;">Sign up for tge daily newsletter</h3>
          <button type="button" style="margin-top: 5%;">Subscribe</button>
        </div>
      </div>

      <div class="menu">
        <div class="featured">
          <h1>Featured Category</h1>
        </div>
        <div class="featuredItem">
          <Menu_component
          v-for="(group) in productStore.groups" 
            :groups="group"
          />
        </div>
      </div>
      <div class="row1">
        <Category v-for="(Category, index) in productStore.categories"
        :key="index"
        :image="Category.image"
        :name="Category.name"
        :product-count="Category.productCount"
        :color="Category.color"
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

      <div class="menu">
        <div class="featured">
          <h1>Featured Product</h1>
        </div>
        <div class="featuredItem">
          <Menu_component
          v-for="(group) in productStore.groups" 
            :groups="group"
          />
        </div>
      </div>
      
      <div class="ProductComponent">
        <Product_Component
          v-for="(product, index) in productStore.products"
          :key="product.id || index"
          :name="product.name"
          :rating="product.rating"
          :image="product.image"
          :size="product.size"
          :price="product.price"
          :promotionAsPercentage="product.promotionAsPercentage"
          :categoryId="product.categoryId"
        />
      </div>
    </div>
  </template>
  <script>
  import Header from '../components/Header.vue';
  import { onMounted } from 'vue';
  import Product_Component from '../components/Product_Component.vue';
  import Category from '../components/Category.vue';
  import Promotion from '../components/Promotion.vue';
  import {useProductStore} from '../stores/productStore'
  import Menu_component from '../components/Menu_component.vue';
  export default{
    name: 'App',
    components: {
      Category,
      Promotion,
      Menu_component,
      Product_Component,
      Header
    },
    setup() {
      const productStore = useProductStore();
      onMounted(async () => {
        try {
          await productStore.fetchGroups();
          console.log("Fetching Groups:", productStore.groups);

          await productStore.fetchCategories();
          console.log("Categories:", productStore.categories);
  
          console.log("Fetching Promotions...");
          await productStore.fetchPromotions();
          console.log("Promotions:", productStore.promotions);
  
          console.log("Fetching Products...");
          await productStore.fetchProducts();
          console.log("Products:", productStore.products);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      });
      return {
        productStore,
      };
    },
  };
  </script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
    width: 75rem;
    height: auto;
    background-color: rgb(254, 252, 252);
    padding: 1rem;
    margin: auto;
}

.HomePage {
    width: 100%;
    height: 30rem;
    background-color: #fff2d9; /* Base background color */
    border-radius: 20px;
    background-image: url('../assets/Hompage.png'), url('../assets/backgroundHomepage.png');
    background-size: 40rem 25rem, cover;
    background-position: top right;
    background-repeat: no-repeat;
    position: relative; 
}

.HomePage::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5); /* Overlay with opacity */
    border-radius: 20px; /* Match the border radius */
    z-index: 1; /* Ensure the overlay is below the content */
}

.TextHomePage {
    width: 50%;
    height: 70%;
    position: absolute;
    top: 15%; 
    left: 7%;
    z-index: 2; /* Ensure it is above the overlay */
}

.TextHomePage button {
    width: 30%;
    padding: 10px 10px;
    background-color: #3BB77E;
    color: white;
    border: none;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer; /* Change cursor to pointer */
}

.menu {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
    overflow-y: auto;
    /* margin-top: 2%; */
}

.featured {
    width: 45%;
}

.featuredItem {
    width: 55%;
    display: flex;
    align-items: center;
    gap: 10px; 
}

.row1,
.row2 {
    margin-top: 1rem;
    width: 100%;
    padding: 7px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.featuredItem h1 {
    color: black;
    font-size: 1.5rem;
    margin: 0;
}

.ProductComponent {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
    .container {
        width: 100%;
        padding: 1rem;
    }

    .menu {
        flex-direction: column;
        align-items: flex-start;
    }

    .row1,
    .row2 {
        flex-direction: column;
        align-items: center;
    }

    .ProductComponent {
        flex-direction: column; 
        align-items: center;
    }
}
</style>