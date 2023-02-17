import { createMemoryHistory } from "@remix-run/router"
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Router } from "react-router-dom"
import Login from "./Login"

test("Quando clicar no botão de enviar, o usuário precisa ser redirecionado para a página de login", () => {
    const history = createMemoryHistory()

    //mockar: criar um valor fictício
    //fazendo o push para que o history seja interpretado como função pelo jest, quando fazemos isso estamos declarando que o history vai ser uma função vazia de teste
    history.push = jest.fn()

    render(
        <Router location={history.location} navigator={history} >
            <Login />
        </Router>
    )

    const enterButton = screen.getByTestId("enter-button")

    fireEvent.click(enterButton)

    //no onclick no link ele vai chamar a função history.push para redirecionar
    expect(history.push).toHaveBeenCalledWith({"hash": "", "pathname": "/perfil", "search": ""}, undefined, {"preventScrollReset": undefined, "relative": undefined, "replace": false, "state": undefined})
    expect(history.push).toHaveBeenCalledTimes(1)
})