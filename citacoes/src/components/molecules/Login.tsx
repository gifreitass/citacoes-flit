import styled from "styled-components"

const Login = () => {
    const Div = styled.div`
        margin: 30px auto;
        background-color: #d3d3d3;
        padding: 20px;
        width: 60vw
    `

    const Button = styled.button`
        background-color: #00009C;
        border: 1px solid #00009C;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        color: white
    `

    const Input = styled.input`
        margin-left: 10px;
        border-radius: 5px;
        border: 2px solid #00009C
    `

    return(
        <Div>
            <label htmlFor="username">Usuário:</label>
            <Input type="text" id="username"></Input> <br/>
            <label htmlFor="password">Senha:</label>
            <Input type="text" id="password"></Input> <br/>
            <Button>Entrar</Button>
        </Div>
    )
}

export default Login