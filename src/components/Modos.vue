<template>
  <div class="selecaoDeModo">
    <button @click="selectMode('modo_one')">{{language == 'en' ? '1 Player' : '1 Jogador'}}</button>
    <button @click="selectMode('modo_two')">{{language == 'en' ? '2 Players' : '2 Jogadores'}}</button>
  </div>
</template>

<script>
export default {
  name: 'Modos',
  
  props: {
    language: String
  },

  setup(props, { emit }) {
    const selectMode = (mode) => {
      emit('mode-selected', mode);
    };

    return {
      selectMode
    }
  }
}
</script>

<style scoped>
.selecaoDeModo {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 20px;
}

.selecaoDeModo button {
  font-size: 20px;
  padding: 10px 20px;
}
</style>
