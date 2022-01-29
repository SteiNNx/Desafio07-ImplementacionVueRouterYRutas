<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link to="/"> Portada </router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link to="/sobremi">Sobre Mi </router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
              <router-link to="/contacto">Contacto </router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
              <router-link to="/post/1">Último post </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path;
      const fromDepth = from.path;
      if (fromDepth === "/" && toDepth === "/contacto") {
        this.transitionName = "fade";
      } else {
        this.transitionName = "";
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#menu-v8 a {
  text-shadow: 1px 1px #000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
