import styled from 'styled-components';

const StyledText = styled.p`
  display: ${props => props.display};
  font-size: ${props => props.size};
  colour: ${props => props.colour};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-weight: ${props => props.weight};
  text-align: ${props => props.textAlign};
  font-family: 'Epilogue', sans-serif;
`;

export function Text({
    display = "block",
    size = "2rem",
    colour = "black",
    margin = "0",
    padding = "0",
    weight = "400",
    textAlign = "left",
    text = "Default Text",
    ...otherProps
}) {
    return (
        <StyledText
            display={display}
            size={size}
            colour={colour}
            margin={margin}
            padding={padding}
            weight={weight}
            textAlign={textAlign}
            {...otherProps}>
            {text}
        </StyledText>
    );
}