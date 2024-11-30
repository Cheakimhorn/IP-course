<template>
    <div class="container">
      <div class="menu">
        <div class="featured">
          <h1>Featured Category</h1>
        </div>
        <div class="featuredItem">
          <Menu_component
            v-for="(menuItem, index) in productStore.groups"
            :key="menuItem.id || index"
            :menu="menuItem.menu"
          />
        </div>
      </div>
  
      <div class="row1">
        <Category
          v-for="(category, index) in productStore.categories"
          :key="category.id || index"
          :image="category.image"
          :name="category.name"
          :product-count="category.productCount"
          :color="category.color"
        />
      </div>
  
      <!-- Promotions Section -->
      <div class="row2" style="margin-bottom: 1rem;">
        <Promotion
          v-for="(promotion, index) in productStore.promotions"
          :key="promotion.id || index"
          :image="promotion.image"
          :color="promotion.color"
          :title="promotion.title"
        />
      </div>
  
      <div class="menu">
        <div class="featured">
          <h1>Popular Products</h1>
        </div>
        <div class="featuredItem">
          <Menu_component
            v-for="(menuItem, index) in productStore.groups"
            :key="menuItem.id || index"
            :menu="menuItem.menu"
          />
        </div>
      </div>
  
      <!-- Product Component -->
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
  import { onMounted } from "vue";
  import Category from "../components/Category.vue";
  import Promotion from "../components/Promotion.vue";
  import Menu_component from "../components/Menu_component.vue";
  import { useProductStore } from "../stores/productStore";
  import Product_Component from "../components/Product_Component.vue";
  
  export default {
    name: "App",
    components: {
      Category,
      Promotion,
      Menu_component,
      Product_Component,
    },
    setup() {
      const productStore = useProductStore();
  
      // Fetch data on component mount
      onMounted(async () => {
        try {
          console.log("Fetching Groups...");
          await productStore.fetchGroups();
          console.log("Groups:", productStore.groups);
  
          console.log("Fetching Categories...");
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
  
  <style scoped>
  .container {
    width: 75rem;
    max-height: 150rem; /* Use max-height instead of height */
    background-color: rgb(255, 255, 255);
    padding: 1rem;
    overflow-y: auto; /* Scroll if content overflows */
  }
  
  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
  }
  
  .featured {
    width: 45%;
  }
  
  .featuredItem {
    width: 55%;
    display: flex;
    align-items: center;
    gap: 10px; /* Add space between menu items */
  }
  
  .row1,
  .row2 {
    margin-top: 1rem;
    width: 100%;
    padding: 7px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Wrap items to next row if space is insufficient */
    gap: 10px; /* Add space between items */
  }
  
  h1 {
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