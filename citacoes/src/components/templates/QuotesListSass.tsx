import Quote from "../molecules/QuoteSass"
import Welcome from "../atoms/WelcomeSass"
import BestQuotes, { iBestQuotes } from "../molecules/BestQuotesSass"
import { useState } from "react"
import axios from "axios";

/**
 * handle click -> fazer requisição -> definir resposta requisiçao no state -> passar state para componente Quote
 */

interface iGetQuoteReponse {
    anime: string,
    character: string,
    quote: string
}

function QuotesList() {
    const [bestQuotes, setBestQuotes] = useState<iBestQuotes[]>([])
    const [loadedQuote, setLoadedQuote] = useState<iGetQuoteReponse>()

    const getQuote = async () => {
        const response = await axios.get("https://animechan.vercel.app/api/random")
        setLoadedQuote(response.data)
    }

    const handleClick = async () => {
        await getQuote()
    }

    console.log(loadedQuote)

    return (
        <section style={{ textAlign: 'center' }}>
            <Welcome />
            <button className="buttonStart" onClick={handleClick}>Iniciar votação</button>
            {/* showButton define a prop como true (se a prop não for passada é false) */}
            {loadedQuote &&
                <Quote
                    showButton
                    bestQuotes={bestQuotes}
                    setBestQuotes={setBestQuotes}
                    description={loadedQuote.quote}
                    movie={loadedQuote.anime}
                    character={loadedQuote.character}
                    getQuote={getQuote}
                />
            }
            <BestQuotes bestQuotes={bestQuotes} />
        </section>
    )
}

export default QuotesList