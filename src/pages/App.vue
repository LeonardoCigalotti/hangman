<template>
  <div id="app">
    <h1>Jogo da Forca</h1>

    <section v-if="tela === 'inicio'" id="inicio">
      <modos @mode-selected="setTela" />
    </section>

    <section v-if="tela === 'modo_one'" id="modo_one">
      <h3>Mode one player</h3>
      <modo-one @goBack="handleGoBack" />
    </section>

    <section v-if="tela === 'modo_two'" id="modo_two">
      <h3>Mode two players</h3>
      <modo-two @goBack="handleGoBack" />
    </section>
  </div>
</template>

<script>
import '../css/global.css';
import { defineComponent, ref } from 'vue';
import Modos from '../components/Modos.vue';
import ModoTwo from './DoisJogador/ModoTwo.vue';
import ModoOne from './UmJogador/ModoOne.vue';

export default defineComponent({
  name: 'App',

  components: {
    Modos,
    ModoTwo,
    ModoOne
  },

  setup() {
    const tela = ref('inicio');

    const setTela = (mode) => {
      tela.value = mode;
    };

    const handleGoBack = (step) => {
      if (step === 'modos') {
        tela.value = 'inicio';
      } else if (step === 'palavra') {
        tela.value = 'modo_two';
      }
    };

    return {
      tela,
      setTela,
      handleGoBack
    }
  }
})
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  margin-bottom: 20px;
}
</style>
