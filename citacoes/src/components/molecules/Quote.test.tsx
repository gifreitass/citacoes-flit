import { fireEvent, render, screen } from "@testing-library/react"
import Quote from "./Quote"

const propDescription = "Minha descrição"
const propMovie = "Meu filme"
const propCharacter = "Meu personagem"
const propRate = 10

test("Verificar se os textos das citações estão sendo renderizados corretamente", () => {
    render(<Quote showButton={true} description={propDescription} movie={propMovie} character={propCharacter} rate={propRate} />)

    const description = screen.getByTestId("quote-description")
    const characterMovie = screen.getByTestId("quote-character-movie")
    const rate = screen.getByTestId("quote-rate")

    expect(description).toBeInTheDocument()
    expect(characterMovie).toBeInTheDocument()
    expect(rate).toBeInTheDocument()
})

test("Não deve renderizar o texto do rate se a props rate não for passada", () => {
    render(<Quote showButton={true} description={propDescription} movie={propMovie} character={propCharacter} />)

    const rate = screen.queryByTestId("quote-rate")

    expect(rate).not.toBeInTheDocument()
})

test("Deve renderizar a div de botões se a props showButton for true", () => {
    render(<Quote showButton={true} description={propDescription} movie={propMovie} character={propCharacter} />)

    const divButtonRate = screen.getByTestId("quote-div-button-rate")

    expect(divButtonRate).toBeInTheDocument()
})

test("Não deve renderizar a div de botões se a props showButton for false", () => {
    render(<Quote showButton={false} description={propDescription} movie={propMovie} character={propCharacter} />)

    const divButtonRate = screen.queryByTestId("quote-div-button-rate")

    expect(divButtonRate).not.toBeInTheDocument()
})

test("Deve verificar quantos botões estão sendo renderizados", () => {
    render(<Quote showButton={true} description={propDescription} movie={propMovie} character={propCharacter} />)

    const divButtonRate = screen.queryByTestId("quote-div-button-rate")

    expect(divButtonRate?.childElementCount).toEqual(10)
})

test("Ao clicar no botão de votação, a função getQuote/setBestQuote deve ser chamada uma vez", () => {
    const mockedSetBestQuote = jest.fn()
    const mockedGetQuote = jest.fn()
    const bestQuotes = [{quote: "Kings do not become kings by themselves. If the poor raise up together, declaring that they don't want any money, kings will be overthrown.", movie: "Kaiji", character: "Hyoudou Kazutaka", rate: 10}]
    render(<Quote showButton={true} description={propDescription} movie={propMovie} character={propCharacter} setBestQuotes={mockedSetBestQuote} getQuote={mockedGetQuote} bestQuotes={bestQuotes}/>)

    const divButtonRate = screen.queryByTestId("quote-div-button-rate")
    const childDivButtonRate = divButtonRate?.children[0]

    if(!childDivButtonRate){
        return
    }

    fireEvent.click(childDivButtonRate)
    
    expect(mockedSetBestQuote).toHaveBeenCalledTimes(1)
    expect(mockedGetQuote).toHaveBeenCalledTimes(1)
})

