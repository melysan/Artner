import styled from "styled-components";
import { Text } from "../Text";

const BannerCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 350px;
background-color: #F2DEE9;
`

export function Banner() {
    return (
        <>
            <BannerCont>
                <Text
                    text="Art Inspiration Generator" />
                <Text
                    text="Lorem ipsum blah blah blah"
                    size="16px" />
            </BannerCont>
        </>
    )
}
