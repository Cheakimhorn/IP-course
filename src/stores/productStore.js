import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [], // Stores group data
    promotions: [], // Stores promotion data
    categories: [], // Stores category data
    products: [], // Uncomment if products data is needed

  }),
  getters: {
    // Filter categories by group name
    getCategoriesByGroup: (state) => (groupName) => {
      return state.categories.filter(
        (category) => category.groupName === groupName
      );
    },
    // Additional getters can be uncommented and implemented as needed
    // getProductsByGroup: (state) => (groupName) => {
    //   return state.products.filter(product => product.groupName === groupName);
    // },
    // getProductsByCategory: (state) => (categoryId) => {
    //   return state.products.filter(product => product.categoryId === categoryId);
    // },
    // getPopularProducts: (state) => {
    //   return state.products.filter(product => product.countSold > 10);
    // }
  },
  actions: {
    // Fetch group data from the API
    async fetchGroups() {
      try {
        console.log("Fetching groups...");
        const response = await axios.get("http://localhost:3001/api/groups");
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

    // Fetch category data from the API
    async fetchCategories() {
      try {
        console.log("Fetching categories...");
        const response = await axios.get("http://localhost:3001/api/categories");
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

    // Fetch promotion data from the API
    async fetchPromotions() {
      try {
        console.log("Fetching promotions...");
        const response = await axios.get("http://localhost:3001/api/promotions");
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
        const response = await axios.get("http://localhost:3001/api/products");
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
