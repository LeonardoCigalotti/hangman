import "./Teclado.css"

type Props = {
  verificarLetra: (letra: string) => boolean;
  jogar: (letra: string) => void;
};

export function Teclado({ verificarLetra, jogar }: Props) {
  const letras = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="teclado">
      {letras.map((letra) => (
        <button
          key={letra}
          className="teclado-botao"
          disabled={verificarLetra(letra)}
          onClick={() => jogar(letra)}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}