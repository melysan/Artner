import styled from "styled-components";
import { Text } from "../Text";


const StyledButton = styled.button`
    background-color: #9CB7D4;
    color: black;
    border: none;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
&:hover {
    background-color: #5F7A98;
}
`

export function Button({txt='this is a button', onRoute = () => {}, margin='1rem', width='245px', height='55px'}) {
    return (
        <>
        <StyledButton width={width} height={height} margin={margin} onClick={()=>onRoute()}>
            <Text textAlign='center' size="16px" text={txt}/>
        </StyledButton>
        </>
    );
}