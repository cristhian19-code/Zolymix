<template>
<div class="form-contact card p-5 col-sm-12 col-lg-5 shadow">
    <p class="display-6 text-center">Contactate con nosotros</p>
    <div class="form-group mt-4">
        <label class="form-label" for="name">Nombre</label>
        <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        placeholder="Nombre"
        />
    </div>
    <div class="form-group mt-4">
        <label class="form-label" for="lastname">Apellido</label>
        <input
        type="text"
        class="form-control"
        id="lastname"
        name="lastname"
        placeholder="Apellido"
        />
    </div>
    <div class="form-group mt-4">
        <label class="form-label" for="email">Correo</label>
        <input
            type="text"
            :class="$v.form.email.$invalid ? 'is-invalid': 'is-valid'"
            class="form-control is-valid"
            id="email"
            name="email"
            placeholder="Correo"
            v-model="form.email"
        />
        <div v-if="$v.form.email.$invalid" class="invalid-feedback">Correo invalido</div>
    </div>
    <div class="form-group mt-4">
        <label class="form-label" for="phone">Telefono/Celular</label>
        <input
        type="tel"
        class="form-control"
        id="phone"
        name="phone"
        placeholder="Telefono/Celular"
        />
    </div>
    <div class="form-group mt-4">
        <label for="product" class="form-label">Producto</label>
        <select class="form-select" id="product" v-model="select_product">
        <option  v-for="producto in productos" :value="producto" :key="producto">
            {{ producto }}
        </option>
        </select>
    </div>
    <div class="form-group mt-4">
        <label for="district" class="form-label">Distrito</label>
        <select class="form-select" id="district" v-model="select_district">
        <option v-for="distrito in distritos" :value="distrito" :key="distrito">
            {{ distrito }}
        </option>
        </select>
    </div>
    <div class="form-group mt-4">
        <label class="form-label" for="message">Mensaje</label>
        <textarea class="form-control" name="message" id="message" placeholder="Mensaje" rows="4"></textarea>
    </div>
    <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-outline-warning">Enviar</button>
    </div>
</div>
</template>

<script>
import {email,required} from 'vuelidate/lib/validators'

export default {
    data() {
        return {
        select_product: '',
        select_district: '',
        productos: [
            'Concreto premezclado',
            'Pavimento',
            'Servicio de Bombeo'
        ],
        distritos: [
            "Ancón",
            "Ate Vitarte",
            "Barranco",
            "Breña",
            "Carabayllo",
            "Chaclacayo",
            "Chorrillos",
            "Cieneguilla",
            "Comas",
            "El Agustino",
            "Independencia",
            "Jesús María",
            "La Molina",
            "La Victoria",
            "Lima",
            "Lince",
            "Los Olivos",
            "Lurigancho",
            "Lurín",
            "Magdalena del Mar",
            "Miraflores",
            "Pachacamac",
            "Pucusana",
            "Pueblo Libre",
            "Puente Piedra",
            "Punta Hermosa",
            "Punta Negra",
            "Rímac",
            "San Bartolo",
            "San Borja",
            "San Isidro",
            "San Juan de Lurigancho",
            "San Juan de Miraflores",
            "San Luis",
            "San Martín de Porres",
            "San Miguel",
            "Santa Anita",
            "Santa María del Mar",
            "Santa Rosa",
            "Santiago de Surco",
            "Surquillo",
            "Villa El Salvador",
            "Villa María del Triunfo",
        ],
        form:{
            lastname: '',
            firstname: '',
            email: '',
        }
    };
  },
  validations:{
    form:{
      email:{
        required,
        email
      }
    }
  }
}
</script>

<style scoped>
.form-contact {
  margin-top: -7rem;
}
@media (max-width: 1000px) {
  .form-contact {
    margin-top: 0;
  }
}
</style>