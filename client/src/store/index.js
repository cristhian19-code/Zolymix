import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:{
      premezclado: {
        title: 'CONCRETO PREMEZCLADO',
        description: 'Nuestra línea de productos cuenta con una mayor y mejor fluidez inicial para una descarga eficiente y rápida, logrando un vaciado de concreto de hasta 20% más rápido, logrando el beneficio adicional de acabar tu obra en un menor tiempo.'
      },
      pavimento:{
        title: 'PAVIMENTO',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo beatae sunt, molestiae debitis provident sapiente perferendis aliquam facere odit esse quaerat eos officia vel. Corporis esse hic ipsa reiciendis.'
      },
      bombeo:{
        title: 'SERVICIO DE BOMBEO',
        description: 'Considerando que el suministro de concreto es el proceso de mayor relevancia y criticidad dentro de la construcción de una obra, planteamos soluciones concretas y eficientes en bombeo.'
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
