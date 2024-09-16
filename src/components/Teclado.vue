<template>
  <div class="teclado">
    <button 
      class="teclado-botao" 
      v-for="(letra, key) in 'abcdefghijklmnopqrstuvwxyz'" 
      :key="key" 
      :disabled="verificarLetra(letra)"
      @click="jogar(letra)">
      {{ letra }}
    </button>
  </div>
</template>

  
<script>
export default {
  name: 'Teclado',

  props: {
    letras: {
      type: Array,
      required: true
    },
    verificarLetra: {
      type: Function,
      required: true
    },
    jogar: {
      type: Function,
      required: true
    }
  },
};
</script>
  
<style scoped>
.teclado {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin-top: 10px;
}

.teclado-botao {
  margin: 10px;
  text-transform: uppercase;
  font-size: 20px;
}

@media (max-width: 600px) {
  .teclado-botao {
    width: 35px;
    height: 35px;
    font-size: 12px;
  }
}
</style>
