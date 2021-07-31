<template>
  <nav
    class="navbar shadow navbar-expand-lg navbar-dark bg-light py-3 fixed-top"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand text-primary" to="/"
        ><span class="text-warning h3"><strong>Zolymix</strong></span
        >Group</router-link
      >
      <button
        class="navbar-toggler bg-warning"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="text-light">&#9776;</span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              :class="this.$route.path == '/' ? 'text-warning' : 'text-primary'"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item dropdown show">
            <a
              class="nav-link dropdown-toggle text-primary"
              data-bs-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Productos</a
            >
            <div class="dropdown-menu border-warning">
              <router-link class="dropdown-item text-primary" to="/productos/premezclado"
                >Premezclado</router-link
              >
              <router-link class="dropdown-item text-primary" to="/productos/pavimento"
                >Pavimento</router-link
              >
              <router-link class="dropdown-item text-primary" to="/productos/bombeo"
                >Servicio de Bombeo</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="
                this.$route.path == '/nosotros'
                  ? 'text-warning'
                  : 'text-primary'
              "
              to="/nosotros"
              >Nosotros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="
                this.$route.path == '/contactanos'
                  ? 'text-warning'
                  : 'text-primary'
              "
              to="/contactanos"
              >Contactanos</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  border-radius: 0 0 15px 15px;
}

.navbar {
  opacity: 0.85;
}

.navbar-toggler {
  font-size: 25px;
}
</style>