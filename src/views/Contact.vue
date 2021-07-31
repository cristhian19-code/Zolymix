<template>
  <div class="contact">
    <div class="contact-portada">
      <div class=""></div>
    </div>
    <div class="d-flex flex-wrap p-4">
      <div
        class="col-sm-12 col-lg-7 p-3 d-flex flex-column pt-5"
      >
        <p class="display-6 text-center mb-4">COTIZACIÓN PERSONALIZADA</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          quasi facilis, amet error odit totam nulla. Tempora voluptas neque
          sapiente aspernatur provident dolorum aliquid, voluptatibus cumque
          officiis? Accusamus, fuga earum.
        </p>
        <div class="p-3">
          <p>
            <i class="bx bx-time-five mx-2"></i>Horarios de atencion: <br />
            <span class="mx-5">Lunes-Viernes: 08:00 - 18:00</span>
          </p>
          <p>
            <i class="bx bx-map mx-2"></i>AV .Primero de Mayo Mz E Lt 23 Villa
            el Salvador
          </p>
          <p><i class="bx bx-phone-incoming mx-2"></i>917896907</p>
          <p><i class="bx bx-mail-send mx-2"></i> zolymixgroup@gmail.com</p>
        </div>
      </div>
      <FormMessageVue />
    </div>
  </div>
</template>

<script>
import FormMessageVue from '../components/FormMessage.vue';

export default {
  components: {
    FormMessageVue
  }
};
</script>

<style scoped>
.contact {
  margin-top: 80px;
}

.contact-portada {
  position: relative;
  height: 60vh;
  background-image: url(https://images.pexels.com/photos/8867410/pexels-photo-8867410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;
  filter: blur(3px);
}

.text-portada {
  position: absolute;
  color: black;
  bottom: 0;
  opacity: 1;
  z-index: 100;
  left: 10px;
}

.card {
  border-radius: 10px;
}


</style>