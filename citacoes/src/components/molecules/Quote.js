import ButtonRate from "../atoms/ButtonRate"

function Quote (props) {
    const handleClick = (evt) => {
        let arrayQuotes = props.bestQuotes
        arrayQuotes = [...arrayQuotes, {
            quote: props.description,
            movie: props.movie,
            rate: evt.target.value
        }]
        props.setBestQuotes(arrayQuotes)
    }

    return (
        <>
        <div>
            <p>{props.description}</p>
            <p>{props.movie}</p>
            {props.rate &&
            <p>Nota: {props.rate}</p>
            }
        </div>
        {props.showButton && <>
            <ButtonRate value={1} onClick={handleClick}>1</ButtonRate>
            <ButtonRate value={2} onClick={handleClick}>2</ButtonRate>
            <ButtonRate value={3} onClick={handleClick}>3</ButtonRate>
            <ButtonRate value={4} onClick={handleClick}>4</ButtonRate>
            <ButtonRate value={5} onClick={handleClick}>5</ButtonRate>
            <ButtonRate value={6} onClick={handleClick}>6</ButtonRate>
            <ButtonRate value={7} onClick={handleClick}>7</ButtonRate>
            <ButtonRate value={8} onClick={handleClick}>8</ButtonRate>
            <ButtonRate value={9} onClick={handleClick}>9</ButtonRate>
            <ButtonRate value={10} onClick={handleClick}>10</ButtonRate>
        </>}
        </>
    )
}

export default Quote