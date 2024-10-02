<template>
  <div id="app">
    <button v-if="tela == 'inicio'" @click="openConfigModal" class="config-button">
      <img src="@/assets/config-icon.png" alt="Config Icon" class="config-icon" />
    </button>

    <configuracoes v-if="showConfigModal" @close="closeConfigModal" @language-selected="setLanguage" :current-language="language" />

    <h1>{{language == 'en' ? 'Hangman' : 'Jogo Da Forca'}}</h1>

    <section v-if="tela === 'inicio'" id="inicio">
      <modos @mode-selected="setTela" :language="language" />
    </section>

    <section v-if="tela === 'modo_one'" id="modo_one">
      <h3>{{language == 'en' ? 'Mode one player' : 'Um Jogador'}}</h3>
      <modo-one @goBack="handleGoBack" :language="language" />
    </section>

    <section v-if="tela === 'modo_two'" id="modo_two">
      <h3>{{language == 'en' ? 'Mode two players' : 'Dois Jogadores'}}</h3>
      <modo-two @goBack="handleGoBack" :language="language" />
    </section>
  </div>
</template>

<script>
import '../css/global.css';
import { defineComponent, ref } from 'vue';
import Modos from '../components/Modos.vue';
import ModoTwo from './DoisJogador/ModoTwo.vue';
import ModoOne from './UmJogador/ModoOne.vue';
import Configuracoes from '../components/Configuracoes.vue';

export default defineComponent({
  name: 'App',

  components: {
    Modos,
    ModoTwo,
    ModoOne,
    Configuracoes
  },

  setup() {
    const tela = ref('inicio');
    const showConfigModal = ref(false);
    const language = ref('en'); 

    const setTela = (mode) => {
      tela.value = mode;
    };

    const handleGoBack = (step) => {
      if (step === 'modos') {
        tela.value = 'inicio';
      } else if (step === 'palavra') {
        tela.value = 'modo_two';
      }
    };

    const openConfigModal = () => {
      showConfigModal.value = true;
    };

    const closeConfigModal = () => {
      showConfigModal.value = false; 
    };

    const setLanguage = (selectedLanguage) => {
      language.value = selectedLanguage;
      closeConfigModal();
    };

    return {
      tela,
      showConfigModal,
      language,
      setTela,
      handleGoBack,
      openConfigModal,
      closeConfigModal,
      setLanguage
    }
  }
})
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  margin-bottom: 20px;
}
</style>
