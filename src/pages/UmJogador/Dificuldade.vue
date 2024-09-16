<template>
    <div class="selecaoDeDificuldade">
      <button @click="selectDificuldade('facil')">Fácil</button>
      <button @click="selectDificuldade('medio')">Médio</button>
      <button @click="selectDificuldade('dificil')">Difícil</button>
      <button @click="selectDificuldade('avancado')">Avançado</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dificuldade',
  
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
  