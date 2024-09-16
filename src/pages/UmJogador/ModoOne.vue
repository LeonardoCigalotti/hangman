<template>
  <section v-if="etapa === 'formulario'" id="formulario">
    <Dificuldade @dificuldade-selected="setEtapa" @goBack="goBackToModos" />
  </section>

  <section v-if="etapa === 'jogo'" id="jogo">
    <Jogo :palavra="palavra" :dica="null" :etapa="etapa" 
      :letras="letras" @goBack="goBackToModos" />
  </section>
</template>

<script>
import Jogo from '../../components/Jogo.vue';
import Dificuldade from './Dificuldade.vue';
import palavrasJson from '../../assets/words.json';
import { ref } from 'vue';

export default {
  name: 'ModoOne',

  components: {
    Jogo, Dificuldade
  },

  setup(props, { emit }) {
    const etapa = ref('formulario');
    const palavra = ref('');
    const letras = ref([]);

    const goBackToModos = () => {
      emit('goBack', 'modos');
    };

    const setEtapa = (dificuldade) => {
      etapa.value = 'jogo';
      buscarPalavra(dificuldade);
    };

    function buscarPalavra(dificuldade) {
      try {
        const palavras = palavrasJson[dificuldade];

        if (palavras && palavras.length > 0) {
          const indiceAleatorio = Math.floor(Math.random() * palavras.length);
          palavra.value = palavras[indiceAleatorio];
        } else {
          console.error('Nenhuma palavra encontrada para a dificuldade selecionada.');
        }

      } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
      }
    }

    return {
      palavra, letras, etapa,
      goBackToModos, setEtapa
    };
  }
};
</script>
