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
z-index: 100;
position: relative;

`

const TextPadding = styled.div`
@media (min-width: 1280px) {
    padding: 0em 25em 0em 25em;
  }

  @media (min-width: 820px) and (max-width: 1280px){
    padding: 0em 15em 0em 15em;
  }

  @media (min-width: 414px) and (max-width: 820px) {
    padding: 0em 7em 0em 7em;

  }

  @media (max-width: 414px) {
    padding: 0em 1em 0em 1em;
  }
  `

const ArtStroke = styled.img`
position: absolute;
z-index: -1;
`

const FlexCenter = styled.div`
display: flex;
justify-content: center;
`

export function Banner({
    bannerHeading = "Default Banner Heading",
    bannerDescription = "Default Banner Description"
}) {
    return (
        <>
            <BannerCont>
                <FlexCenter>
                    <ArtStroke src={"ArtStroke.svg"} width={300} height={45} />
                    <Text
                        size="2rem"
                        text={bannerHeading} />
                </FlexCenter>
                <TextPadding>
                    <Text
                        text={bannerDescription}
                        padding="1em 0 0 0"
                        size="1rem" />
                </TextPadding>
            </BannerCont>
        </>
    )
}
