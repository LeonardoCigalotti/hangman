import { useState } from "react";
import "./Configuracoes.css"

type ConfiguracoesProps = {
  currentLanguage: string;
  onLanguageSelected: (lang: string) => void;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Configuracoes({
  currentLanguage,
  onLanguageSelected,
  onClose,
  darkMode,
  setDarkMode
}: ConfiguracoesProps) {
  
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const emitLanguage = () => {
    onLanguageSelected(selectedLanguage);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{selectedLanguage === 'en' ? 'Select Language' : 'Selecionar Idioma'}</h2>

        <div className="modal-infos">
            <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="styled-select"
            >
                <option value="en">English</option>
                <option value="pt">Português</option>
            </select>

            
            <label className="toggle-container">
                <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
                <span className="slider round"></span>
                <span className="toggle-text">{selectedLanguage === 'en' ? 'Dark Mode' : 'Modo Escuro'}</span>
            </label>
            
           
        </div>

        <div className="modal-actions">
          <button onClick={emitLanguage}>{selectedLanguage === 'en' ? 'Close' : 'Fechar'}</button>
        </div>
      </div>
    </div>
  );
}