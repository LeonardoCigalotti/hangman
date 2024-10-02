<template>
  <div class="palavra">
    <div 
      v-for="(linha, index) in linhasPalavra" 
      :key="index" 
      class="palavra-letras"
    >
      <div 
        v-for="(letra, key) in linha" 
        :key="key" 
        class="palavra-letra" 
      >
        {{ (letra === ' ') ? '-' : (verificarLetra(letra) || etapa === 'final') ? letra : '' }}
      </div>
    </div>
    <div v-if="dica" class="palavra-dica">{{language == 'en' ? 'Hint:' : 'Dica:'}} {{ dica }}</div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Palavra',
  
  props: {
    palavra: {
      type: String,
      required: true
    },
    dica: {
      type: String
    },
    etapa: {
      type: String
    },
    verificarLetra: {
      type: Function,
      required: true
    },
    language: {
      type: String
    },
  },

  setup(props) {
    const linhasPalavra = computed(() => {
      const limitePorLinha = window.innerWidth < 600 ? 12 : 24;
      const linhas = [];
      let linhaAtual = '';

      props.palavra.split('').forEach((letra) => {
        if (linhaAtual.length < limitePorLinha) {
          linhaAtual += letra;
        } else {
          linhas.push(linhaAtual);
          linhaAtual = letra;
        }
      });

      if (linhaAtual) {
        linhas.push(linhaAtual);
      }

      return linhas;
    });

    return {
      linhasPalavra
    };
  }
};
</script>

<style scoped>
.palavra {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.palavra-letras {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center; 
}

.palavra-letra {
  height: 40px;
  width: 40px;
  margin: 0 5px;
  font-size: 23px;
  border-bottom: 1px solid var(--color-text-light);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 600px) {
  .palavra-letra {
    width: 20px; 
    font-size: 16px; 
  }
}
</style>
