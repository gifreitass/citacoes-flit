import { render, screen } from "@testing-library/react"
import Welcome from "./WelcomeSass"

describe("WelcomeSass", () => {
    test("Should render with correct text", () => {
        render(<Welcome />)

        const assumedCorrectText = "Bem-vindo ao citações de séries!"
        const paragraph = screen.getByText(assumedCorrectText)

        expect(paragraph.innerHTML).toBe(assumedCorrectText)
    })
})