<template>
    <div class="forca">
        <img :src="`https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/${erros}.svg`">
    </div>
</template>
  
<script>
  export default {
    name: 'Forca',
  
    props: {
      erros: {
        type: Number,
        default: 0
      }
    }
  };
</script>
  
<style scoped>
  .forca img {
    height: 200px;
  }

  @media (max-width: 600px) {
    .forca img {
      height: 130px;
    }
  }
</style>
  