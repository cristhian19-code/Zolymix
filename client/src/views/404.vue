<template>
  <div
    class="
      not-found
      text-center
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <img src="../assets/mixer.png" class="truck-logo-404" alt="" />
    <p class="display-1">404</p>
    <p class="h1">Ruta no encontrada</p>
    <router-link to="/" class="nav-link text-zolymix-orange"
      >Volver a la pagina principal</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  height: 100vh;
}

.truck-logo-404 {
  height: 200px;
}
.text-zolymix-orange {
  color: #f67c11;
}
</style>