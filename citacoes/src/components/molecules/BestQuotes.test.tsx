import { render, screen } from "@testing-library/react"
import BestQuotes from "./BestQuotes"

test("O componente deve ser renderizado corretamente", () => {
    const bestQuotes = [{quote: "Kings do not become kings by themselves. If the poor raise up together, declaring that they don't want any money, kings will be overthrown.", movie: "Kaiji", character: "Hyoudou Kazutaka", rate: 10}]
    render(<BestQuotes bestQuotes={bestQuotes} />)

    const title = screen.getByText("Melhores citações:")

    expect(title).toBeInTheDocument()
    
    bestQuotes.forEach((quote) => {
        const quoteElement = screen.getByText(quote.quote)
        expect(quoteElement).toBeInTheDocument()
        const movieAndCharacterElement = screen.getByText(`${quote.character}, ${quote.movie}`)
        expect(movieAndCharacterElement).toBeInTheDocument()
        const rateElement = screen.getByText(`Nota: ${quote.rate}`)
        expect(rateElement).toBeInTheDocument()
    })
})