import styled from "styled-components";
import { Text } from "../Text";

const BannerCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 30vh;
background-color: #F2DEE9;
font-size: 1rem;

`

//@media (max-width: 320px) {}


export function Banner({
    bannerHeading = "Default Banner Heading",
    bannerDescription = "Default Banner Description"
}) {
    return (
        <>
            <BannerCont>
                <Text
                    size="2rem"
                    text={bannerHeading} />
                <Text
                    text={bannerDescription}
                    padding="2rem"
                    size="1rem" />
            </BannerCont>
        </>
    )
}
