import styled from "styled-components";
import { Text } from "../Text";
import { useRouter } from 'next/router'


const SplashContDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
colour: #F4F5F0;
padding: 1rem 10rem;
border: 1px black solid;
width: 500px;
height: 100%;
margin: 5rem;
border-radius: 10px;
flex-direction: column;
background-color: #F4F5F0;
`
const SplashDescCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
width: 100%;
margin: 1rem;
`
const SplashIcon = styled.img`
width: 95px;
height: 95px;
`

const Logo = styled.img`
display: flex;
width: 25rem;
margin: 3rem 0rem;
align-items: center;
flex-direction: column;
`

export function SplashCont() {

    const r = useRouter();

    return (
        <SplashContDiv>
            <Logo src="/Artner.svg" />
            {/* <Desc> */}
                <SplashDescCont>
                    <SplashIcon src="/splash_artner_icons/ideasIcon.svg" />
                    <Text size="20px" text="Generate ideas using our prompts to create masterpieces."></Text>
                </SplashDescCont>
                <SplashDescCont>
                    <SplashIcon src="/splash_artner_icons/artchiveIcon.svg" />
                    <Text size="20px" text="Show off your art to others on the Artchive."></Text>
                </SplashDescCont>
                <SplashDescCont>
                    <SplashIcon src="/splash_artner_icons/resourceIcon.svg" />
                    <Text size="20px" text="We got free & cheap art resources for artists to enjoy!"></Text>
                </SplashDescCont>
            {/* </Desc> */}
            <button onClick={()=>r.push('/home')}>Let’s Draw!</button>
        </SplashContDiv>
    )
}