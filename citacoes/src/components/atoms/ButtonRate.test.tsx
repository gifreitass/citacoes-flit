import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import ButtonRate from "./ButtonRateSass"

describe("ButtonRate", () => {
    test("Button with correct value", () => {
        const rate = 4
        render(<ButtonRate value={rate} onClick={jest.fn()}>{rate.toString()}</ButtonRate>)

        const button = screen.getByTestId("button-rate")
        expect(button).toHaveValue(rate.toString())
    })

    test("Click on button", () => {
        const mockedOnClick = jest.fn();
        render(<ButtonRate value={4} onClick={mockedOnClick}>4</ButtonRate>)

        const button = screen.getByTestId("button-rate")

        userEvent.click(button)

        expect(mockedOnClick).toHaveBeenCalledTimes(1)
    })
})