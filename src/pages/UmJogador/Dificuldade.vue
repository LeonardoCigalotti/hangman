<template>
    <div class="selecaoDeDificuldade">
      <button @click="selectDificuldade('facil')">{{language == 'pt' ? 'Fácil' : 'Easy'}}</button>
      <button @click="selectDificuldade('medio')">{{language == 'pt' ? 'Médio' : 'Medium'}}</button>
      <button @click="selectDificuldade('dificil')">{{language == 'pt' ? 'Difícil' : 'Hard'}}</button>
      <button v-if="language == 'pt'" @click="selectDificuldade('avancado')">Avançado</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dificuldade',

    props: {
      language: String
    },
  
    setup(props, { emit }) {
      const selectDificuldade = (mode) => {
        emit('dificuldade-selected', mode);
      };
  
      return {
        selectDificuldade
      }
    }
  }
  </script>
  
  <style scoped>
  .selecaoDeDificuldade {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top: 20px;
  }
  
  .selecaoDeDificuldade button {
    font-size: 20px;
    padding: 10px 20px;
  }
  </style>
  