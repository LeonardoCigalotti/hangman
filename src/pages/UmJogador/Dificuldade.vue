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

      const goBack = () => {
        emit('goBack');
      };
  
      return {
        selectDificuldade, goBack
      }
    }
  }
  </script>
  
<style scoped>
.selecaoDeDificuldade {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.selecaoDeDificuldade button {
  font-size: 20px;
  padding: 10px 20px;
}

@media (max-width: 768px) {
  .selecaoDeDificuldade {
    gap: 14px;
  }

  .selecaoDeDificuldade button {
    width: 50%; 
  }
}
</style>
  