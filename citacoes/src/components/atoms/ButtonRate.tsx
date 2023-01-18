const ButtonRate: React.FC<{
    value: number;
    onClick: (newClick: React.MouseEvent<HTMLButtonElement>) => void;
    children: string | React.ReactElement | React.ReactElement[]
}> = (props) => {

    const buttonStyle = {
        button: {
            backgroundColor: "#B2BEB5",
            border: '1px solid #B2BEB5',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '40px'
        }
    }
    
    return (
        <button {...props} style={buttonStyle.button}></button>
    )
}

export default ButtonRate