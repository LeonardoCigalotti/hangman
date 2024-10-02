<template>
  <div class="formulario">
    <div class="formulario-title">{{ title }}</div>
    <input type="text" class="formulario-input" v-model="inputValue">
    <div class="formulario-buttons">
      <button @click="goBack">{{language == 'en' ? 'Back' : 'Voltar'}}</button>
      <button :disabled="disableButton" @click="submitForm">{{ button }}</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'FormularioTwoPlayer',

  props: {
    title: String,
    button: {
      type: String,
      default: "Próximo"
    },
    language: String
  },

  setup(props, { emit }) {
    const inputValue = ref(null);
    const disableButton = ref(true);

    watch(() => inputValue.value, () => {
      disableButton.value = !(inputValue.value && inputValue.value.length > 0);
    });

    const submitForm = () => {
      emit('submit', inputValue.value);
      inputValue.value = null;
    };

    const goBack = () => {
      emit('goBack');
    };

    return {
      inputValue, disableButton,
      submitForm, goBack
    };
  }
};
</script>

<style scoped>
  .formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .formulario-title {
    font-size: 40px;
  }
  
  .formulario-input {
    padding: 10px 5px;
    border: 0;
    border-radius: 5px;
    margin: 10px 0;
    text-align: center;
    color: var(--color-text-dark);
    font-size: 22px;
    width: 150%;
  }

  @media (max-width: 600px) {
    .formulario-input {
      width: 100%;
    }
  }

  .formulario-buttons {
    display: flex;
    gap: 100px; 
  }

  .formulario-buttons button {
    padding: 15px;
    font-size: 20px;
  }
</style>
