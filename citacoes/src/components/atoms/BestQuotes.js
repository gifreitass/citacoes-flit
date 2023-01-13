import Quote from "../molecules/Quote"

function BestQuotes (props) {
    console.log(props.bestQuotes)
    return (
        <>
            <p>Melhores citações:</p>
            {/* usei o b.rate e a.rate para comparar os rates dos objetos */}
            {props.bestQuotes.sort((a,b) => {
                return b.rate - a.rate
            }).map((quote, index) => {
                return <Quote key={`quote-item-${index}`} description={quote.quote} movie={quote.movie} showButton={false} rate={quote.rate}/>         
            })}
        </>
    )
}

export default BestQuotes