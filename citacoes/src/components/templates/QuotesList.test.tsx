import { createMemoryHistory } from "@remix-run/router"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import axios from "axios"
import { Router } from "react-router-dom"
import QuotesList from "./QuotesList"

const mockedAxiosResponse = { "anime": "meu anime", "character": "meu personagem", "quote": "minha citação" }
const expectedApiUrl = "https://animechan.vercel.app/api/random"

test("Deve fazer a requisição na API ao clicar no botão", () => {
    jest.spyOn(axios, "get")
        .mockImplementationOnce(jest.fn(() => mockedAxiosResponse) as jest.Mock)

    const history = createMemoryHistory()

    render(<Router location={history.location} navigator={history}>
        <QuotesList />
    </Router>
    )

    const button = screen.getByTestId("quoteslist-button")

    fireEvent.click(button)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(expectedApiUrl)
})

test("Deve renderizar a citação se o loadedQuote possuir dados", async () => {
    const history = createMemoryHistory()

    render(<Router location={history.location} navigator={history}>
        <QuotesList />
    </Router>
    )

    const button = screen.getByTestId("quoteslist-button")

    act(() => {
        fireEvent.click(button)

        const quote = screen.getByTestId("loadedQuote-container")

        expect(quote).toBeInTheDocument()
    })
})
