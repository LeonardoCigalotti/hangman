<template>
    <div class="final">
        <div :class="`final-texto ${resultado}`">{{ resultado === 'ganhador' ? 'Parabéns você ganhou' : 'Você perdeu' }}!</div>
    </div>
</template>
  
<script>
  export default {
    name: 'Final',
  
    props: {
      resultado: {
        type: String,
        required: true
      },
    },
  };
</script>
  
<style scoped>
.final-texto{
  margin: 20px 0px;
  font-size: 24px;
  font-weight: bold;
}

.final-texto.enforcado{
  color: var(--color-text-error);
}

.final-texto.ganhador{
  color: var(--color-text-success);
}
</style>
  