    <template>
        <div class="DetaiProduct-container">
        <div class="Detail-image">
            <div class="OneImage">
            <img :src="selectedImage" alt="Product Image" />
            </div>
            <div class="AllImage">
            <div
                class="Image"
                v-for="(img, index) in images"
                :key="index"
                @click="updateMainImage(img)"
            >
                <img :src="img" alt="Product Thumbnail" />
            </div>
            </div>
        </div>
        <div class="Detail-item">
            <button class="stock">In Stock</button>
            <h1 class="product-name" style="margin-top:3%; font-size: 40px;">{{ name }}</h1>
            <h2 class="iconStar">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </h2>
            <h1 style="margin-top:3%;">{{ size }} gram</h1>
            <h4 style="margin-top:3%; font-size: 40px; color: green;">${{ price }}&ensp;&ensp;
            <span class="promotion" style=" font-size: 30px; color: gray;   text-decoration: line-through;">${{ promotionAsPercentage }}</span>
            </h4>
            <h5 style="margin-top:3%;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellat ratione. Laudantium aut ea velit! Tempora dolor eligendi doloribus? Possimus?</h5>
            <button type="button" class="butAdd">Add To Cart</button>
        </div>
        </div>
    </template>
    
    <script>
    import orangeproduct from "@/assets/orangeproduct.png";
    import p5 from "@/assets/p5.png";
    import p6 from "@/assets/p6.png";
    import p9 from "@/assets/p9.png";
    import mengo from "@/assets/mengo.jpg";
    
    export default {
        name: "DetailProduct",
        data() {
        return {
            images: [orangeproduct, mengo, p5, p6, p9],
            name: this.$route.query.name || "Default Name",
            size: this.$route.query.size || "0",
            price: this.$route.query.price || "0.00",
            promotionAsPercentage: this.$route.query.promotionAsPercentage || "0.00",
            selectedImage: mengo,
        };
        },
        methods: {
        updateMainImage(img) {
            this.selectedImage = img;
        },
        },
    };
    </script>
    
    <style scoped>
    *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }
    .DetaiProduct-container {
        width: 73rem;
        height: 35rem;
        margin: auto;
        display: flex;
        border: 1px solid black;
    }
    .Detail-image,
    .Detail-item {
        width: 50%;
        height: 100%;
        padding: 1rem;
    }
    .OneImage {
        width: 100%;
        height: 75%;
    }
    .OneImage img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
    }
    .AllImage {
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    .AllImage .Image {
        width: 18%;
        height: 80%;
        border-radius: 15px;
    }
    .Image img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.848);
        cursor: pointer;
    }
    .stock{
        width: 15%;
        padding: 5px;
        border: 1px solid green;
        background-color: rgb(201, 222, 197);
        border-radius: 5px;
    }
    .iconStar{
        margin-top: 5%;
    }
    .iconStar i {
        color: rgb(242, 204, 14);
        margin: 5px;
    }
    .butAdd {
        border: 1px solid rgb(2, 41, 2);
        border-radius: 5px;
        background-color: green;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        margin-top: 4%;
    }
    </style>
    