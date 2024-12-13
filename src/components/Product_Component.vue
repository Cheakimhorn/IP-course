<template>
  <div class="CardProduct" @click="navigateToDetailProduct">
    <div class="cardAsolute">{{ categoryId }}%</div>
    <div class="CardTop">
      <img :src="image" alt="Product Image" />
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
        ${{ price }}
        <span class="promotion">${{ promotionAsPercentage }}</span>
      </h4>
      <button type="button" class="butAdd">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  props: {
    name: String,
    rating: Number,
    image: String,
    size: String,
    price: Number,
    promotionAsPercentage: Number,
    categoryId: Number,
  },
  methods: {
    navigateToDetailProduct() {
      this.$router.push({
        path: "/DetailProduct",
        query: {
          image: this.image,
          name: this.name,
          size: this.size,
          price: this.price,
          promotionAsPercentage: this.promotionAsPercentage,
        },
      });
    },
  },
};
</script>

<style scoped>
.CardProduct {
  width: 14rem;
  height: 18rem;
  border: 1px solid rgb(40, 184, 4);
  border-radius: 13px;
  margin-top: 1rem;
  position: relative;
  cursor: pointer;
}
.cardAsolute {
  width: 20%;
  height: 10%;
  background-color: rgb(21, 231, 231);
  position: absolute;
  top: 6%;
  border-radius: 0 15px 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.CardTop {
  width: 100%;
  height: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.CardTop img {
  max-width: 100%;
  height: auto;
}
.CardBody {
  width: 100%;
  height: 50%;
  padding: 1rem;
  position: relative;
}
.brand {
  color: gray;
  font-size: 10px;
}
.product-name {
  font-size: 13px;
  font-weight: bold;
}
.iconStar i {
  color: rgb(242, 204, 14);
}
.iconStar span {
  margin-left: 7%;
}
h4 {
  font-size: 14px;
  font-weight: bold;
  color: rgb(26, 102, 3);
}
h4 .promotion {
  font-size: 9px;
  text-decoration: line-through;
  color: gray;
}
.butAdd {
  position: absolute;
  bottom: 8%;
  right: 7%;
  border: 0.3px solid green;
  border-radius: 5px;
  font-size: 11px;
  padding: 3px 10px;
  background-color: white;
  cursor: pointer;
}
</style>
