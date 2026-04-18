import "./Forca.css"

type ForcaProps = {
  erros?: Number;
}

export default function Forca({
  erros = 0
}: ForcaProps) {
    return (
        <div className="forca">
            <img src={`https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/${erros}.svg`}></img>
        </div>
    )
}