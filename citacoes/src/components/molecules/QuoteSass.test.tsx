import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Quote from "./QuoteSass"

const mockedProps = {
    character: "Boneco",
    description: "Uma descrição",
    movie: "Um filme",
    showButton: true,
    bestQuotes: [],
    getQuote: jest.fn(),
    rate: 4,
    setBestQuotes: jest.fn(),
}

describe("QuoteSass", () => {
    test("Should render correctly", () => {
        render(<Quote {...mockedProps} />)

        const rateText = screen.getByText(`Nota: ${mockedProps.rate}`)
        const descriptionText = screen.getByText(mockedProps.description)
        const characterMovieText = screen.getByText(`${mockedProps.character}, ${mockedProps.movie}`)
        
        expect(rateText).toBeInTheDocument();
        expect(descriptionText).toBeInTheDocument();
        expect(characterMovieText).toBeInTheDocument();
    })

    test("Should render correctly when showButton is false", () => {
        render(<Quote {...mockedProps} showButton={false} />)

        const showButtonDiv = screen.queryByTestId("showbutton-div-button")
        expect(showButtonDiv).not.toBeInTheDocument();
    })

    test("Should render correctly when showButton is true", () => {
        render(<Quote {...mockedProps} showButton={true} />)

        const showButtonDiv = screen.getByTestId("showbutton-div-button")
        expect(showButtonDiv).toBeInTheDocument();
    })

    test("Should call setBestQuotes on Click", () => {
        const mockedSetBestQuotes = jest.fn();
        render(<Quote {...mockedProps} setBestQuotes={mockedSetBestQuotes} />)

        const showButtonDiv = screen.getByTestId("showbutton-div-button")
        const rateButtons = showButtonDiv.querySelectorAll("button")

        userEvent.click(rateButtons[0])

        expect(mockedSetBestQuotes).toHaveBeenCalledTimes(1)
    })
})