import Quote from "../molecules/Quote"
import Welcome from "../atoms/Welcome"
import BestQuotes, { iBestQuotes } from "../molecules/BestQuotes"
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
            <button onClick={handleClick}
                style={{
                    padding: '10px',
                    backgroundColor: "#B2BEB5",
                    border: '1px solid #B2BEB5',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >Iniciar votação
            </button>
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