<template>
    <div class="selecaoDeDificuldade">
      <button @click="selectDificuldade('facil')">Fácil</button>
      <button @click="selectDificuldade('medio')">Médio</button>
      <button @click="selectDificuldade('dificil')">Difícil</button>
      <button @click="selectDificuldade('avancado')">Avançado</button>
      <button @click="goBack">Voltar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dificuldade',
  
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
  