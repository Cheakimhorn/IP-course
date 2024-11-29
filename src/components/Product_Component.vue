<template>
    <div class="CardProduct">
      <div class="cardAsolute">{{ categoryId }}</div>
      <div class="CardTop">
        <img :src=" image" alt="Product Image" />
      </div>
      <div class="CardBody">
        <p class="brand">Hodo Foods</p>
        <h5 class="product-name">{{ name }}</h5>
        <p class="iconStar">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <span>({{ rating }})</span>
        </p>
        <p>{{ size }} gram</p>
        <h4>
          ${{ price }} <span class="promotion">${{ promotionAsPercentage }}</span>
        </h4>
        <button type="button" class="butAdd">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Product_Component",
    props: {
      name: String,
      rating: Number,
      image: String,
      size: String,
      price: Number,
      promotionAsPercentage: Number,
      categoryId: Number,
    },
  };
  </script>
  
  <style scoped>
  .CardProduct {
    width: 14rem;
    height: 18rem;
    border: 1px solid rgb(40, 184, 4);
    border-radius: 13px;
    /* padding: 1rem; */
    overflow: hidden; /* Prevents overflow of elements */
    margin-top: 1rem;
    position: relative;

  }
  .cardAsolute{
    width: 20%;
    height: 10%;
    background-color: rgb(4, 161, 75);
    position: absolute;
    top: 6%;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    display: flex; 
    justify-content: center;
    align-items: center;
  }
  .CardTop {
    width: 100%;
    height: 50%;
    border-radius: 13px;
    padding: 0.4rem;
    display: flex; 
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  
  .CardTop img {
    max-width: 100%; /* Ensures the image fits within the container */
    height: auto;
  }
  
  .CardBody {
    width: 100%;
    height: 50%;
    padding: 0.2rem;
    position: relative;
    padding: 1rem;
  }
  
  .brand {
    color: gray;
    font-size: 10px;
  }
  
  .product-name {
    color: black;
    font-size: 13px;
  }
  
  .iconStar {
    color: rgb(242, 204, 14);
    font-size: 10px;
  }
  
  .iconStar i {
    padding: 2px;
  }
  
  .iconStar span {
    margin-left: 7%;
  }
  
  p {
    color: gray;
    font-size: 12px;
  }
  
  h4 {
    color: rgb(26, 102, 3);
    font-size: 14px;
    font-weight: bold;
    margin-top: 2%;
  }
  
  h4 .promotion {
    color: rgb(57, 58, 56);
    font-size: 9px;
    text-decoration: line-through;
  }
  
  .butAdd {
    position: absolute;
    bottom: 8%;
    right: 7%;
    border: 0.3px solid green;
    border-radius: 5px;
    font-size: 11px;
    padding: 3px 10px;
    background-color: white; /* Optional: Add background for better visibility */
    cursor: pointer; /* Change cursor to pointer for button */
  }
  </style>