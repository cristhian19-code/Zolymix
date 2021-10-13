<template>
  <section
    id="footer"
    class="d-flex flex-column bg-zolymix-orange text-light pt-4"
  >
    <div class="d-flex flex-wrap justify-content-around align-items-start">
      <div
        class="col-lg-4 col-12 col-md-6 mt-md-2 text-center align-self-center"
      >
        <p class="navbar-brand text-primary">
          <span class="text-light h1">
            <strong>Zolymix</strong>
          </span>
          <span class="h4"> Group </span>
        </p>
      </div>
      <div class="p-3 col-lg-3 col-12 col-md-6">
        <p class="h3">Productos</p>
        <router-link class="nav-link text-light" to="/productos/premezclado"
          >Premezclado</router-link
        >
        <router-link class="nav-link text-light" to="/productos/pavimento"
          >Pavimento</router-link
        >
        <router-link class="nav-link text-light" to="/productos/bombeo"
          >Servicio de Bombeo</router-link
        >
      </div>
      <div class="p-3 col-lg-5 col-12 col-md-6">
        <p class="h3">Contactanos</p>
        <div class="contact p-3">
          <p>
            Ubicanos en:
            <br />
            <i class="bx bx-map mx-2"></i>AV .Primero de Mayo Mz E Lt 23 Villa
            el Salvador
          </p>
          <p>
            Llámenos a:
            <br />
            <i class="bx bx-phone mx-2 mt-1"></i>918955118
          </p>
          <p>
            Escribenos a:
            <br />
            <i class="bx bx-mail-send mx-2 mt-1"></i> zolymixgroup@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div class="social text-center mt-1">
      <a
        class="text-white"
        href="https://www.facebook.com/Zolymix-Group-113484007650964"
      >
        <i class="bx bxl-facebook mx-2"></i>
      </a>
      <i class="bx bxl-instagram mx-2"></i>
      <i class="bx bxl-whatsapp mx-2"></i>
      <i class="bx bxl-linkedin mx-2"></i>
    </div>
    <div class="dropdown-divider"></div>
    <div class="mt-3 text-center">
      <p><i>Copyright &copy; 2021</i> - ZolymixGroup</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.bx{
  cursor: pointer;
}
.social {
  font-size: 25px;
}

.contact .bx {
  font-size: 20px;
}

.dropdown-divider {
  border-top: 1px solid white;
}

.bx:hover {
  transition: 0.5s ease-in;
  transform: translateY(-5px);
}

.truck-logo {
  height: 150px;
}

.bg-zolymix-orange {
  background-color: #f67c11;
}
</style>