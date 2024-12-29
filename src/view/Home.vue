<template>
    <div>
        <HeaderPage :currentPage="$route.name" />
        <div class="main">
            <div class="main-left">
                <Menu :selected="selected" @section-selected="handleSelected" />
            </div>
            <div class="main-right">
                <div>
                    <h1>{{ message }}</h1>
                    <h3>---------------------------------------------</h3>
                    <h2>{{ sectionMessage }}</h2>
                    <h3>Message is: {{ messageInput }}</h3>
                    <h3>
                        Input Here
                        <input v-model="messageInput" placeholder="Input text" />
                    </h3>
                </div>
            </div>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import FooterPage from "../components/FooterPage.vue";
import HeaderPage from "../components/HeaderPage.vue";

export default {
    name: "Home",
    components: {
        HeaderPage,
        FooterPage,
        Menu
    },
    data() {
        return {
            selected: null,
            messageInput: "" // Added this to properly bind to the input field
        };
    },
    computed: {
        message() {
            const routeName = this.$route.name;
            let showMessage = "";
            switch (routeName) {
                case "Home":
                    showMessage = "Welcome to HomePage";
                    break;
                case "page1":
                    showMessage = "Welcome to Page1";
                    break;
                case "page2":
                    showMessage = "Welcome to Page2";
                    break;
                case "page3":
                    showMessage = "Welcome to Page3";
                    break;
                default:
                    return "";
            }
            return showMessage;
        },
        sectionMessage() {
            return this.selected !== null
                ? `This is Section ${this.selected} of ${this.message.split(" ")[2]}`
                : "";
        }
    },
    methods: {
        handleSelected(section) {
            this.selected = section;
        }
    }
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 35rem;
    display: flex;
}

.main-left {
    width: 25%;
    height: 100%;
    border: 1px solid black;
    border-top: none;
    border-bottom: none;
}

.main-right {
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
