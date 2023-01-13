import Quote from "../molecules/Quote"
import Welcome from "../atoms/Welcome"
import BestQuotes, { iBestQuotes } from "../atoms/BestQuotes"
import { useState } from "react"

function QuotesList () {
    const [bestQuotes, setBestQuotes] = useState<iBestQuotes[]>([])

    return (
        <>
            <Welcome/> 
            {/* showButton define a prop como true (se a prop não for passada é false) */}
            <Quote showButton bestQuotes={bestQuotes} setBestQuotes={setBestQuotes} description='Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.' movie='Harry Potter, Harry Potter e o Prisioneiro de Azkaban'/>
            <BestQuotes bestQuotes={bestQuotes} />
        </>
    )
}

export default QuotesList