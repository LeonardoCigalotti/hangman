import { useState, useEffect } from 'react'
import configButton from './assets/config-icon.png'
import Configuracoes from './components/Configuracoes/Configuracoes';
import Instrucoes from './components/Instrucoes/Instrucoes';
import './App.css'
import Forca from './components/Forca/Forca';
import palavrasJson from "./assets/palavras.json";
import wordJson from "./assets/words.json";
import { Final } from './components/Final/Final';
import Palavra from './components/Palavra/Palavra';
import { Teclado } from './components/Teclado/Teclado';

function App() {
  const [tela, setTela] = useState('inicio');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [erros, setErros] = useState(0);
  const [words, setWords] = useState('');
  const [etapa, setEtapa] = useState('teclado');
  const [letras, setLetras] = useState<string[]>([]);
  const [resultado, setResultado] = useState("enforcado");

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const alterTela = (mode: string, dificuldade = 0) => {
    setTela(mode);

    if (mode === "jogo") {
      setErros(0);
      setLetras([]);
      setResultado("enforcado");
      setEtapa("teclado");
    }

    if (dificuldade > 0) {
      buscarPalavra(dificuldade);
    }
  };

  const buscarPalavra = (dificuldade: number) => { 
    try { 
      let palavras: string[] = [];
      const lista = (language === 'en' ? wordJson : palavrasJson) as Record<number, string[]>;
      palavras = lista[dificuldade];
      
      if(palavras && palavras.length > 0) { 
        const indiceAleatorio = Math.floor(Math.random() * palavras.length); 
        setWords(palavras[indiceAleatorio]); 
      } else { 
        console.error('Nenhuma palavra encontrada na dificuldade selecionada'); 
      } 
    } catch (e) { 
      console.error('Erro ao carregar arquivo JSON: ', e); 
    } 
  }

  const normalizar = (texto: string) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const verificarLetra = (letra: string) => {
    return letras.includes(normalizar(letra));
  };

  const jogar = (letra: string) => {
    const letraN = normalizar(letra);

    if (letras.includes(letraN)) return;

    const novasLetras = [...letras, letraN];
    setLetras(novasLetras);

    const palavraNormalizada = normalizar(words);

    if (!palavraNormalizada.includes(letraN)) {
      const novoErro = erros + 1;
      setErros(novoErro);

      if (novoErro >= 6) {
        setEtapa("final");
        setResultado("enforcado");
      }
    } else {
      const letrasUnicas = [
        ...new Set(palavraNormalizada.replace(/ /g, "").split("")),
      ];

      const acertouTodas = letrasUnicas.every((l) =>
        novasLetras.includes(l)
      );

      if (acertouTodas) {
        setEtapa("final");
        setResultado("ganhador");
      }
    }
  };

  return (
    <>
      <div id="app">
        {tela === 'inicio' && (
          <>
            <button onClick={() => setShowConfigModal(true)} className="config-button">
              <img src={configButton} alt="Config Icon" className="config-icon" />
            </button>

            {showConfigModal && (
              <Configuracoes 
                currentLanguage={language}
                onLanguageSelected={setLanguage}
                onClose={() => setShowConfigModal(false)}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            )}

            {showInstructionsModal && (
              <Instrucoes 
                currentLanguage={language}
                onClose={() => setShowInstructionsModal(false)}
              />
            )}

            <h1 className='spacing-inicio'>{language === 'en' ? 'Hangman' : 'Jogo da Forca'}</h1>

            <section id="inicio" className='section-inicio'>
                <button className='button-inicio' onClick={() => setShowInstructionsModal(true)}>{language === 'en' ? 'Instructions' : 'Instruções'}</button>
                <button className='button-inicio' onClick={() => alterTela('dificuldade')}>{language === 'en' ? 'Play' : 'Jogar'}</button>
            </section>
          </>
        )}

        {tela === 'dificuldade'  && (
          <section id="dificuldade">
            <h1 className='spacing-inicio'>{language === 'en' ? 'Hangman' : 'Jogo da Forca'}</h1>
            <h3 className='spacing-inicio'>{language === 'en' ? 'Choose the difficulty level' : 'Escolha o nível de dificuldade'}</h3>

          <section className='section-inicio'>
            <button className='button-inicio' onClick={() => alterTela('jogo', 1)}>{language === 'en' ? 'Easy' : 'Fácil'}</button>
            <button className='button-inicio' onClick={() => alterTela('jogo', 2)}>{language === 'en' ? 'Medium' : 'Médio'}</button>
            <button className='button-inicio' onClick={() => alterTela('jogo', 3)}>{language === 'en' ? 'Hard' : 'Difícil'}</button>
          </section>

            <button className='button-inicio' onClick={() => alterTela('inicio')}>{language === 'en' ? 'Back' : 'Voltar'}</button>
          </section>
        )}

        {tela === 'jogo' && (
          <section id="jogo">
            <div className='jogo'>
              <Forca erros={erros} />

              <Palavra palavra={words} verificarLetra={verificarLetra} etapa={etapa} />

              {etapa === 'teclado' && (
                <Teclado verificarLetra={verificarLetra} jogar={jogar} />
              )}

              {etapa === 'final' && (
                <Final resultado={resultado} language={language} />
              )}

              <button className="button-inicio" onClick={() => alterTela('inicio')}>
                {language === 'en' ? 'Back' : 'Voltar'}
              </button>
            </div>
          </section>
        )}
        
      </div>
    </>
  )
}

export default App
