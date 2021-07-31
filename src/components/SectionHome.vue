<template>
  <div class="section d-flex flex-wrap justify-content-center px-3 py-5">
    <div
      data-aos="fade-up"
      :class="index != 0 ? 'order-sm-0 order-md-1' : 'order-0'"
      class="p-5 col-sm-12 col-md-7"
    >
      <p class="display-4">{{ title }}</p>
      <p>{{ description }}</p>
    </div>
    <div
      :class="index % 2 != 0 ? 'order-sm-1 order-md-0' : 'order-1'"
      class="content-img col-sm-12 col-md-4 d-flex justify-content-center"
    >
      <img
        data-aos="fade-down"
        src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.content-img {
  height: 500px;
  width: 350px;
  overflow: hidden;
  border-radius: 5px;

  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.4s ease;
  -ms-transition: all 0.5s ease;
}

img {
  height: 500px;
  width: 350px;
  width: 100%;
  cursor: pointer;
}

.content-img:hover img {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
</style>