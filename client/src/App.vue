<template>
  <div id="app">
    <NavbarVue />

    <router-view />

    <FooterVue />
  </div>
</template>
<script>
import NavbarVue from "@/components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
export default {
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap");

* {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 400;
}
</style>
