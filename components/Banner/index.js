import styled from "styled-components";
import { Text } from "../Text";

const BannerCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 40vh;
background-color: #F2DEE9;
`

export function Banner() {
    return (
        <>
            <BannerCont>
                <Text
                    text="Art Inspiration Generator"
                    size="32px" />
                <Text
                    text="Lorem ipsum dolor sit amet consectetur. Id non at adipiscing sed morbi vel sit urna lectus. Eget lacus morbi facilisis mattis enim. Nisi vehicula orci praesent morbi cras placerat diam. Magna egestas vitae imperdiet eget sem duis molestie."
                    padding="2em 5em 0 5em"
                    size="16px" />
            </BannerCont>
        </>
    )
}
