const ButtonRate: React.FC<{
    value: number;
    onClick: (newClick: React.MouseEvent<HTMLButtonElement>) => void;
    children: string | React.ReactElement | React.ReactElement[]
}> = (props) => {
    
    return (
        <button {...props} data-testid="button-rate" className="buttonRate"></button>
    )
}

export default ButtonRate