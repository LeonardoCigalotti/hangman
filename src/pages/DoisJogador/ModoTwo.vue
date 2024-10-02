<template>
  <section v-if="tela === 'formulario'">
    <formulario-two-player
      v-if="etapa === 'palavra'"
      :title="language == 'en' ? 'Write the word' : 'Defina a palavra'"
      :button="language == 'en' ? 'Next' : 'Próximo'"
      :language="language"
      @submit="setPalavra"
      @goBack="goBackToModos"
    />

    <formulario-two-player
      v-if="etapa === 'dica'"
      :title="language == 'en' ? 'Write the hint' : 'Defina a palavra'"
      :button="language == 'en' ? 'Start the game' : 'Iniciar o jogo'"
      :language="language"
      @submit="iniciarJogo"
      @goBack="goBackToPalavra"
    />
  </section>

  <section v-if="tela === 'jogo'" id="jogo">
      <jogo :palavra="palavraDigitada" :dica="dicaDigitada" :etapa="etapa" 
        :letras="letras" @goBack="goBackToModos" :language="language" />
  </section>
</template>

<script>
import { ref } from 'vue';
import FormularioTwoPlayer from './FormularioTwoPlayer.vue';
import Jogo from '../../components/Jogo.vue';

export default {
  name: 'ModoTwo',

  props: {
    language: String
  },

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
