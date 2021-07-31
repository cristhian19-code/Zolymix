<template>
  <div class="about d-flex flex-column">
    <div class="about-portada"></div>
    <SectionHomeVue
      v-for="(section, index) in info"
      :key="section.title"
      :title="section.title"
      :description="section.content"
      :index="index"
    />
  </div>
</template>

<script>
import SectionHomeVue from "../components/SectionHome.vue";

export default {
  data() {
    return {
      info: [
        {
          title: "Historia",
          url: "",
          content:
            "Somos una empresa metalúrgica creada en el año 1998 en la cual actualmente se integra el área técnica con los distintos planees de operarios destinados de tareas de taller y a obras en campo lo que nos permite dar versátiles respuesta a las necesidades de nuestros clientes ene l sector petrolero e industrial.Desde los inicios hemos experimentado diversos avances en cuanto a las instalaciones.",
        },
        {
          title: "Mision",
          url: "",
          content:
            "Satisfacer las necesidades de nuestros clientes a base de servicios de calidad, acompañados a su vez de precios competitivos en el mercado, con la finalidad de que nuestros clientes puedan agilizar el proceso de obtención de los diferentes servicios que necesiten para realizar sus operaciones y a su vez crear valor agregado a nuestros socios comerciales ",
        },
        {
          title: "Vision",
          url: "",
          content:
            "Generar confianza en nuestros clientes para posicionarnos como una empresa líder en la satisfacción de necesidades y lograr crear una empresa que junto a su recurso humano, proveedores y clientes se mantenga en la cima de los servicios industriales.",
        },
      ],
    };
  },
  components: {
    SectionHomeVue,
  },
};
</script>

<style scoped>
.about {
  margin-top: 80px;
}
.about-portada {
  height: 70vh;
  background-image: url(https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: blur(1px);
}
</style>