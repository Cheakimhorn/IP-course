<template>
    <div class="HeaderTop">
        <div class="Header1"><img src="../assets/logo.png" alt=""></div>
        <div class="Header2">
            <div class="searchbox">
                <select>
                    <option>All Category</option>
                    <option>All Product</option>
                    <option>More Detail</option>
                </select>
                <span><input type="search" name="" id="" placeholder="Search for items.."></span>
                <i class="bi bi-search"></i>
            </div>
        </div>
        <div class="Header3">
            <MenuItem 
                v-for="(MenuItem, index) in Items"
                :key="index"
                :TextItem="MenuItem.TextItem"
                :Icorn="MenuItem.Icorn"
                :route="MenuItem.router"
            />
        </div>
    </div>
    <div class="HeaderUp">
        <div class="up1">
            <button type="button" class="BrowsCategory"><i class="bi bi-grid"></i>&ensp;BrowseCategories</button>
            
        </div>
        <div class="up2">
            <MenuItem 
                v-for="(MenuItem, index) in Menus"
                :key="index"
                :TextItem="MenuItem.TextItem"
                :Icorn="MenuItem.Icorn"
                :route="MenuItem.route"
            />
        </div>
        <div class="up3"><img src="../assets/contect.png" alt=""></div>
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    name: "Header",
    components: {
        MenuItem
    },
    data() {
        return {
            Items: [
                { TextItem: "User", Icorn: "bi bi-person-circle" },
                { TextItem: "Compare", Icorn: "bi bi-arrow-repeat" },
                { TextItem: "Wishlist", Icorn: "bi bi-heart" },
                { TextItem: "Cart", Icorn: "bi bi-cart3" },
            ],
            Menus: [
                { TextItem: "Hot Deals",route:"/Hot", Icorn: "bi bi-cup-hot" },
                { TextItem: "Home" ,route:"/"},
                { TextItem: "Food",route:"/DetailProduct" },
                { TextItem: "Vegetables" },
                { TextItem: "Drink"},
                { TextItem: "Cookies" },
                { TextItem: "Meat & Seafood"},
                { TextItem: "Home" },
                { TextItem: "Bakery"}
            ]
        };
    }
}
</script>

<style scoped>
.HeaderTop {
    width: 100%;
    height: 50%;
    display: flex;
    border: 1px solid black;
}
.HeaderUp {
    width: 100%;
    height: 50%;
    display: flex;
    border: 1px solid black;
    border-top: none;
}
.Header2 {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.searchbox{
    width: 80%;
    height: 70%;
    border: 1px solid black;
    display: flex;
    align-items: center;
}
.searchbox select{
    width: 35%;
    height: 90%;
    border-top:none ;
    border-bottom:none ;
    border-left:none ;
    margin: 1rem;
    padding: 0 10px;
}
.searchbox span input{
    width: 70%;
    height: 90%;
    border: none;
}
.searchbox  i{
    display: flex;
    justify-content: end;
}
.Header1 {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Header1 img {
    width: 90%;
    height: 90%;
}
.Header3 {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
}
.up1 {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.BrowsCategory {
    width: 90%;
    height: 60%;
    border-radius: 10px;
    border: none;
    background-color: #3BB77E;
    color: white;
    font-size: 17px;
}
.up2 {
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
}
.up3 {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.up3 img {
    width: 80%;
    height: 80%;
}
</style>