import "./Final.css"

type Props = {
  resultado: string;
  language?: string;
};

export function Final({ resultado, language }: Props) {
  const texto =
    resultado === "ganhador"
      ? language === "en" ? "You WON!!" : "Você Venceu!!"
      : language === "en" ? "You lose, try again" : "Você Perdeu, tente novamente";

  return (
    <div className="final">
      <div className={`final-texto ${resultado}`}>
        {texto}!
      </div>
    </div>
  );
}