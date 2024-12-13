import axios from 'axios';
import { defineStore } from 'pinia'

export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],

  }),
  getters: {
    getCategoriesByGroup: (state) => (groupName) => {
      return state.categories.filter(
        (category) => category.groupName === groupName
      );
    },
    
    getProductsByGroup: (state) => (groupName) => {
      return state.products.filter(product => product.groupName === groupName);
    },
    getProductsByCategory: (state) => (categoryId) => {
      return state.products.filter(product => product.categoryId === categoryId);
    },
    getPopularProducts: (state) => {
      return state.products.filter(product => product.countSold > 10);
    }
   },
  actions: {
    async fetchGroups() {
      try {
        console.log("Fetching groups...");
        const response = await axios.get("http://localhost:3000/api/groups");
        if (response.data && Array.isArray(response.data)) {
          this.groups = response.data;
          console.log("Fetched Groups:", this.groups);
        } else {
          console.warn("Invalid group data received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching groups:", error.message);
      }
    },

    async fetchCategories() {
      try {
        console.log("Fetching categories...");
        const response = await axios.get("http://localhost:3000/api/categories");
        if (response.data && Array.isArray(response.data)) {
          this.categories = response.data;
          console.log("Fetched Categories:", this.categories);
        } else {
          console.warn("Invalid category data received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    },

    async fetchPromotions() {
      try {
        console.log("Fetching promotions...");
        const response = await axios.get("http://localhost:3000/api/promotions");
        if (response.data && Array.isArray(response.data)) {
          this.promotions = response.data;
          console.log("Fetched Promotions:", this.promotions);
        } else {
          console.warn("Invalid promotion data received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching promotions:", error.message);
      }
    },
    async fetchProducts() {
      try {
        console.log("Fetching products...");
        const response = await axios.get("http://localhost:3000/api/products");
        if (response.data && Array.isArray(response.data)) {
          this.products = response.data;
          console.log("Fetched Products:", this.products);
        } else {
          console.warn("Invalid product data received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    },
  },
});
