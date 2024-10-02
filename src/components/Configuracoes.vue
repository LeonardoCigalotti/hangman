<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Select Language</h2>
        <select v-model="selectedLanguage" id="language" class="styled-select">
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
  
        <div class="modal-actions">
          <button @click="emitLanguage">Save</button>
          <button @click="emitClose">Cancel</button>
        </div>
      </div>
    </div>
</template>
  
<script>
  import { ref } from 'vue';
  
  export default {
    name: 'Configuracoes',
  
    props: {
      currentLanguage: String
    },
  
    setup(props, { emit }) {
      const selectedLanguage = ref(props.currentLanguage); 
  
      const emitLanguage = () => {
        emit('language-selected', selectedLanguage.value); 
      };
  
      const emitClose = () => {
        emit('close'); 
      };
  
      return {
        selectedLanguage,
        emitLanguage,
        emitClose
      };
    }
  }
</script>
  
<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
  }

  .modal-content h2{
    color: black;
  }
  
  .modal-actions {
    margin-top: 20px;
  }
  
  .modal-actions button {
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
  }

  .language-select-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    }

.language-label {
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}

.styled-select {
  background-color: #fff;
  border: 2px solid #007bff;
  border-radius: 8px; 
  padding: 10px 15px;
  font-size: 16px;
  color: #333;
  width: 200px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.styled-select:hover {
  border-color: #0056b3; 
}

.styled-select:focus {
  border-color: #0056b3;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
}

.styled-select option {
  padding: 10px; 
  color: #333; 
  background-color: #fff; 
}

.styled-select option:hover {
  background-color: #f0f0f0; 
}
</style>
  