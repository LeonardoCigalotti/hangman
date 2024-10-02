<template>
    <div class="final">
        <div :class="`final-texto ${resultado}`">{{ resultado === 'ganhador' ? language == 'en' ? 'You WON!!' : 'Você Venceu!!' : language == 'en' ? 'You lose, try again' : 'Você Perdeu, tente novamente'}}!</div>
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
      language: {
        type: String,
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
  