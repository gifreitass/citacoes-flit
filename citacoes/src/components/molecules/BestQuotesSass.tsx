import Quote from "./QuoteSass"

export interface iBestQuotes{
    quote: string,
    movie: string,
    character: string,
    rate: number
}

const BestQuotes: React.FC<{bestQuotes: iBestQuotes[]}> = (props) => {
    return (
        <div>
            <p>Melhores citações:</p>
            {/* usei o b.rate e a.rate para comparar os rates dos objetos */}
            {props.bestQuotes.sort((a,b) => {
                return b.rate - a.rate
            }).map((quote, index) => {
                // index é a posição do objeto no array e o key é uma prop pro react identificar de forma única cada elemento ou componente que vai ser criado, alterado, excluído e/ou selecionado a partir de um array
                //quote-item: chave única pro react identificar
                return <Quote key={`quote-item-${index}`} description={quote.quote} movie={quote.movie} character={quote.character} showButton={false} rate={quote.rate}/>         
            })}
        </div>
    )
}

export default BestQuotes