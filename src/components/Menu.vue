<template>
    <div class="all-menu">
        <h2>Menu</h2>
        <ul>
            <li @click="selectSection(1)">Section 1</li>
            <li @click="selectSection(2)">Section 2</li>
            <li @click="selectSection(3)">Section 3</li>
            <li @click="selectSection(4)">Section 4</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: ['selected'],
    methods: {
        selectSection(section) {
            this.$emit('section-selected', section);
        }
    }
};
</script>

<style scoped>
.all-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.all-menu h2 {
    width: 100%;
    height: auto;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
}

.all-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 400px;
}

.all-menu ul li {
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.all-menu ul li:hover {
    background-color: rgb(150, 210, 230);
}
</style>
