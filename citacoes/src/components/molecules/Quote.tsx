import React from "react";
import { iBestQuotes } from "./BestQuotes";
import ButtonRate from "../atoms/ButtonRate"

interface props{
    showButton: boolean;
    bestQuotes?: iBestQuotes[];
    description: string;
    movie: string;
    character: string;
    rate?: number;
    //nomear a tipagem (newQuotes)
    setBestQuotes?: (newQuotes: iBestQuotes[]) => void;
    getQuote?: () => void;
    dataTestId?: string 
}

const Quote: React.FC<props> = (props) => {
        const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
            if (!props.bestQuotes || !props.getQuote) {
                return
            }

            let arrayQuotes = props.bestQuotes
            // ...arrayQuotes: adiciona os elementos do array bestQuotes
            arrayQuotes = [...arrayQuotes, {
                quote: props.description,
                movie: props.movie,
                character: props.character,
                rate: parseInt(evt.currentTarget.value)
            }]
            if(props.setBestQuotes){
                props.setBestQuotes(arrayQuotes)
            }

            props.getQuote()
        }

        return (
            <section data-testid={props.dataTestId}>
                <div style={{marginTop: '35px'}}>
                    <p data-testid="quote-description">{props.description}</p>
                    <p data-testid="quote-character-movie">{props.character}, {props.movie}</p>
                    {props.rate &&
                        <p data-testid="quote-rate" style={{fontWeight: '500'}}>Nota: {props.rate}</p>
                    }
                </div>
                {props.showButton && 
                    <div data-testid="quote-div-button-rate" style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px'}}>
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
                    </div>}
            </section>
        )
    }

export default Quote