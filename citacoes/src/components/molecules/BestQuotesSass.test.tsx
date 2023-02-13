import { render, screen } from "@testing-library/react"
import BestQuotes, { iBestQuotes } from "./BestQuotesSass"

const mockedBestQuotes: iBestQuotes[] = [{
    character: "Tibas",
    movie: "Tibas",
    quote: "4",
    rate: 5
}]

describe("BestQuotesSass", () => {
    test("Should render the correct amount", () => {
        render(<BestQuotes bestQuotes={mockedBestQuotes} />)

        const wrapper = screen.getByTestId("best-quotes-wrapper")

        expect(wrapper.childElementCount - 1).toBe(mockedBestQuotes.length)
    })
})