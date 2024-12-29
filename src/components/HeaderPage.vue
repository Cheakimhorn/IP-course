<template>
    <div class="header">
      <div class="logo"><router-link to="/Home" class="nav-button p-3" :class="{active: isActive('Home')}"><h3>Header</h3></router-link></div>
      <div class="allPage">
        <ul>
          <li><router-link to="/page1" class="nav-button p-3" :class="{active: isActive('page1')}">Page1</router-link></li>
          <li><router-link to="/page2" class="nav-button p-3" :class="{active: isActive('page2')}">Page2</router-link></li>
          <li><router-link to="/page3" class="nav-button p-3" :class="{active: isActive('page3')}">Page3</router-link></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default{
    name:"HeaderPage",
    props: ['currentPage'],

    methods:{
      isActive(page){
        return this.currentPage ===page;
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    width: 70%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .allPage {
    width: 30%;
    height: 100%;
    border: 1px solid black;
    border-left: none;
  }
  
  .allPage ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  ul li {
    text-decoration: none;
    font-size: 1.7rem;
  }
  
  .nav-button {
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
.router-link-active{
    color: red;
}

  </style>
  