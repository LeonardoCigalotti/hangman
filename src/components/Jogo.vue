<template>
  <div class="jogo">
    <Forca :erros="erros" />
    <Palavra :palavra="palavra" :dica="dica" 
      :verificarLetra="verificarLetra" :etapa="etapaLocal" :language="language" />

    <Teclado v-if="etapaLocal === 'jogo'"
      :letras="letras" :verificarLetra="verificarLetra" :jogar="jogar"
    />

    <Final v-if="etapaLocal === 'final'"
      :resultado="resultado" :language="language"
    />

    <button class="inicio-button" @click="goBackToModos">{{language == 'en' ? 'Back' : 'Início'}}</button>
  </div>
</template>
  
<script>
import Forca from "./Forca.vue";
import Palavra from "./Palavra.vue";
import Teclado from './Teclado.vue';
import Final from "./Final.vue";
import { ref } from "vue";

export default {
  name: 'Jogo',

  components: {
    Forca,
    Palavra,
    Teclado,
    Final
  },

  props: {
    palavra: {
      type: String,
      required: true
    },
    dica: {
      type: String,
    },
    letras: {
      type: Array,
      required: true
    },
    etapa: {
      type: String
    },
    language: {
      type: String
    },
  },

  setup(props, { emit }) {
    const erros = ref(0);
    const etapaLocal = ref(props.etapa || 'jogo');
    const resultado = ref('enforcado');

    const goBackToModos = () => {
      emit('goBack', 'modos');
    };

    const normalizarTexto = (texto) => {
      return texto
        .normalize('NFD')  
        .replace(/[\u0300-\u036f]/g, "") 
        .toLowerCase();
    };

    const verificarLetra = (letra) => {
      if (typeof letra === 'string') {
        return props.letras.includes(normalizarTexto(letra));
      }
      return false;
    };

    const verificarAcertos = () => {
      let letrasUnicas = [...new Set(normalizarTexto(props.palavra).replace(/ /g, '').split(''))];
      let letrasAcertadas = props.letras.filter(letra => letrasUnicas.includes(letra)).length;

      if (letrasAcertadas === letrasUnicas.length) {
        etapaLocal.value = 'final';
        resultado.value = 'ganhador';
      }
    };

    const verificarErros = (letra) => {
      const letraNormalizada = normalizarTexto(letra);
      const palavraNormalizada = normalizarTexto(props.palavra);

      if (palavraNormalizada.includes(letraNormalizada)) {
        verificarAcertos();
      } else {
        if (letra !== ' ') {
          erros.value++;
        }

        if (erros.value >= 6) {
          etapaLocal.value = 'final';
        }
      }
    };

    const jogar = (letra) => {
      const letraNormalizada = normalizarTexto(letra);

      if (!props.letras.includes(letraNormalizada)) {
        props.letras.push(letraNormalizada);
        verificarErros(letra);
      }
    };

    return {
      erros, etapaLocal, resultado,
      verificarLetra, verificarAcertos, verificarErros, jogar, goBackToModos
    };
  }
};
</script>
  
<style scoped>
.jogo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.inicio-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 25px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  color: black;
}

.inicio-button:hover {
  background-color: #e0e0e0;
}
</style>
