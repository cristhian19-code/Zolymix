<template>
  <div class="mt-5 py-3">
    <SectionHomeVue
      :title="products[this.$route.params.category.toLowerCase()].title"
      :description="products[this.$route.params.category.toLowerCase()].description"
    />
  </div>
</template>

<script>

import {mapState} from 'vuex'
import SectionHomeVue from '../components/SectionHome.vue'
export default {
  components:{
    SectionHomeVue
  },
  computed: {
    ...mapState(['products'])
  },
}
</script>