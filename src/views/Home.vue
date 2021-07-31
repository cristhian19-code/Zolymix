<template>
  <div class="home d-flex flex-column">
    <CarouselVue />
    <SectionHomeVue
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :title="item.title"
      :description="item.description"
    />
    <div class="comments d-flex justify-content-center flex-wrap py-5 gap-3">
      <p class="display-4 text-lighter">Comentarios</p>
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <ToastVue
          v-for="(comment, index) in comments"
          :key="index"
          :name="comment.name"
          :range="comment.range"
          :comment="comment.comment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselVue from "../components/Carousel.vue";
import SectionHomeVue from "../components/SectionHome.vue";
import ToastVue from "../components/Toast.vue";

export default {
  name: "Home",
  components: {
    CarouselVue,
    ToastVue,
    SectionHomeVue,
  },
  data() {
    return {
      comments: [
        {
          name: "Christian Aponte",
          range: "CEO Unicom",
          comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea voluptatequo impedit magnam eaque nisi voluptates dolorem illum beatae?",
        },
        {
          name: "Juan Carlo",
          range: "Alcalde de Lima",
          comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea voluptatequo impedit magnam eaque nisi voluptates dolorem illum beatae?",
        },
        {
          name: "Marcos Vela",
          range: "CEO Unicom",
          comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea voluptatequo impedit magnam eaque nisi voluptates dolorem illum beatae?",
        },
      ],
      items: [
        {
          title: "Quienes Somos?",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem qui ipsam ea esse nobis, blanditiis est quibusdam officiis saepe architecto. Dolor id, incidunt rerum eos quae repudiandae error exercitationem blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat quidem dicta. Assumenda illum provident ea eum suscipit odit animi, dolorem architecto rem omnis neque illo amet, et ratione dicta.",
        },
        {
          title: "Nuestra experiencia",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem qui ipsam ea esse nobis, blanditiis est quibusdam officiis saepe architecto. Dolor id, incidunt rerum eos quae repudiandae error exercitationem blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat quidem dicta. Assumenda illum provident ea eum suscipit odit animi, dolorem architecto rem omnis neque illo amet, et ratione dicta.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.home {
  margin-top: 25px;
}

.text-lighter {
  font-weight: 300;
}
</style>
