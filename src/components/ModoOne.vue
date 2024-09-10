<template>
  <section id="jogo">
    <jogo :palavra="palavra" :dica="null" :etapa="etapa" 
      :letras="letras" @goBack="goBackToModos" />
  </section>
</template>

<script>
import Jogo from './Jogo.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'ModoOne',

  components: {
    Jogo
  },

  setup(props, { emit }) {
    const palavra = ref('');
    const letras = ref([]);
    const etapa = ref('jogo');

    const goBackToModos = () => {
      emit('goBack', 'modos');
    };

    async function buscarPalavra() {
      try {
        const response = await fetch('https://api.dicionario-aberto.net/random');
        const data = await response.json();

        palavra.value = data.word;

      } catch (error) {
        console.error('Erro ao buscar palavra:', error);
      }
    }

    onMounted(() => {
      buscarPalavra();
    });

    return {
      palavra, letras, etapa,
      goBackToModos
    };
  }
};
</script>
