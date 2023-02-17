import { render, screen } from "@testing-library/react"
import Welcome from "./Welcome"

test('Deve renderizar o título de boas vindas', () => {
    render(<Welcome />)
    const titleWelcome = screen.getByText("Bem-vindo ao citações de séries!")
    expect(titleWelcome).toBeInTheDocument()
})