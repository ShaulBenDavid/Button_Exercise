import Button from "./style";

const ButtonStyle = ({ text, ...props}) => {
    return (
        <div>
            <Button variant="primary" size="large" disabled>GET STARTED</Button>
            <Button variant="secondary" size="medium">GET STARTED</Button>
            <Button variant="text" size="small">GET STARTED</Button>
        </div>
    )
}

export default ButtonStyle;