<template>
  <div class="selecaoDeModo">
    <button @click="selectMode('modo_one')">1 Player</button>
    <button @click="selectMode('modo_two')">2 Players</button>
  </div>
</template>

<script>
export default {
  name: 'Modos',

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
  gap: 100px;
  margin-top: 20px;
}

.selecaoDeModo button {
  font-size: 20px;
  padding: 10px 20px;
}
</style>
