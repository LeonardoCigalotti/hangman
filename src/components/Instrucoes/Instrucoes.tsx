import { useState } from "react";
import "./Instrucoes.css"

type InstrucoesProps = {
  currentLanguage: string;
  onClose: () => void;
};

export default function Instrucoes({
  currentLanguage,
  onClose,
}: InstrucoesProps) {

  const descricao = {
    en: (
      <>
        <p><b>1. Select the desired difficulty level before starting.</b></p>

        <p><b>2. Observe the hidden word</b></p>
        <p>The word will be displayed with hidden letters (e.g. _ _ _ _ _).</p>

        <p><b>3. Use the virtual keyboard</b></p>
        <p>
          Click the available letters on the on-screen keyboard.<br/>
          The computer's physical keyboard does not work in the game.
        </p>

        <p><b>4. Guess the letters</b></p>
        <p>
          If the letter exists in the word, it will be revealed in the correct positions.<br/>
          You can guess multiple letters in a single attempt.
        </p>

        <p><b>5. Be careful with mistakes</b></p>
        <p>
          If the letter does not exist in the word, a part of the hangman drawing will appear automatically.<br/>
          Each mistake brings you closer to defeat.<br/>
          You have a total of 6 attempts.
        </p>

        <p><b>6. Win and lose conditions</b></p>
        <p>
          ✅ Win: reveal all the letters before the drawing is completed.<br/>
          ❌ Lose: the hangman drawing is completed before you guess the word.
        </p>
      </>
    ),

    pt: (
      <>
        <p><b>1. Antes de iniciar, selecione o nível de dificuldade desejado.</b></p>
        
        <p><b>2. Observe a palavra oculta</b></p>
        <p>A palavra será exibida com letras escondidas (ex: _ _ _ _ _).</p>

        <p><b>3. Use o teclado virtual</b></p>
        <p>Clique nas letras disponíveis no teclado exibido na tela. <br/>
        O teclado físico do computador não funciona no jogo.</p>

        <p><b>4. Acerte as letras </b></p>
        <p>Se a letra existir na palavra, ela será revelada nas posições corretas.<br/>
        Você pode acertar várias letras com uma única tentativa.</p>

        <p><b>5. Erre com cuidado</b></p>
        <p>Se a letra não existir na palavra, uma parte do desenho da forca será exibida automaticamente.<br/>
        Cada erro aproxima você da derrota.<br/>
        Você tem no total 6 tentativas.</p>

        <p><b>6. Condições de vitória e derrota</b></p>
        <p>✅ Vitória: descubra todas as letras antes do desenho completar.<br/>
        ❌ Derrota: o desenho da forca é completado antes de você acertar a palavra.</p>
      </>
    )
  };

  return (
    <div className="modal-inst">
      <div className="modal-content">
        <h2>{currentLanguage === 'en' ? 'Instructions' : 'Instruções'}</h2>

        <div className="modal-infos">
          {descricao[currentLanguage as 'en' | 'pt']}
        </div>

        <div className="modal-actions">
          <button onClick={onClose}>{currentLanguage === 'en' ? 'Close' : 'Fechar'}</button>
        </div>
      </div>
    </div>
  );
}