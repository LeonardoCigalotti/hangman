import "./Palavra.css"
import { useMemo } from "react";

type PalavraProps = {
  palavra: string,
  etapa: string,
  verificarLetra: (letra: string) => boolean;
}

export default function Palavra({
  palavra,
  etapa,
  verificarLetra
}: PalavraProps) {

    const linhasPalavra = useMemo(() => {
    const limitePorLinha = window.innerWidth < 600 ? 12 : 24;
    const linhas: string[] = [];
    let linhaAtual = "";

    palavra.split("").forEach((letra) => {
      if (linhaAtual.length < limitePorLinha) {
        linhaAtual += letra;
      } else {
        linhas.push(linhaAtual);
        linhaAtual = letra;
      }
    });

    if (linhaAtual) {
      linhas.push(linhaAtual);
    }

    return linhas;
  }, [palavra]);

    return (
        <div className="palavra">
      
            {linhasPalavra.map((linha, index) => (
                <div key={index} className="palavra-letras">
                
                {linha.split("").map((letra, key) => (
                    <div key={key} className="palavra-letra">
                    {
                      letra === " " ? "-" : (verificarLetra(letra) || etapa === "final") ? letra : ""
                    }
                    </div>
                ))}

                </div>
            ))}

        </div>
    )
}