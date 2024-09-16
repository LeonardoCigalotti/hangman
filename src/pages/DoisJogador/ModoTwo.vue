<template>
  <section v-if="tela === 'formulario'">
    <formulario-two-player
      v-if="etapa === 'palavra'"
      title="Defina a palavra"
      button="Próximo"
      @submit="setPalavra"
      @goBack="goBackToModos"
    />

    <formulario-two-player
      v-if="etapa === 'dica'"
      title="Defina a dica"
      button="Iniciar Jogo"
      @submit="iniciarJogo"
      @goBack="goBackToPalavra"
    />
  </section>

  <section v-if="tela === 'jogo'" id="jogo">
      <jogo :palavra="palavraDigitada" :dica="dicaDigitada" :etapa="etapa" 
        :letras="letras" @goBack="goBackToModos" />
  </section>
</template>

<script>
import { ref } from 'vue';
import FormularioTwoPlayer from './FormularioTwoPlayer.vue';
import Jogo from '../../components/Jogo.vue';

export default {
  name: 'ModoTwo',

  components: {
    FormularioTwoPlayer, Jogo
  },

  setup(props, { emit }) {
    const tela = ref('formulario')
    const etapa = ref('palavra');
    const palavraDigitada = ref('');
    const dicaDigitada = ref('');
    const letras = ref([])

    const setPalavra = (palavra) => {
      palavraDigitada.value = palavra;
      etapa.value = 'dica';
    };

    const iniciarJogo = (dica) => {
      dicaDigitada.value = dica;
      tela.value = 'jogo';
      etapa.value = 'jogo'
    };

    const goBackToModos = () => {
      emit('goBack', 'modos');
    };

    const goBackToPalavra = () => {
      etapa.value = 'palavra';
    };

    return {
      tela, etapa, palavraDigitada, dicaDigitada, letras, 
      setPalavra, iniciarJogo, goBackToModos, goBackToPalavra
    }
  }
};
</script>
