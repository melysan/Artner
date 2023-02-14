import styled from "styled-components";
import { Text } from "../Text";

const MainContDiv = styled.div`
background-color: #F4F5F0;
width: 60%;
border: 1px black solid;
margin: 5rem;
border-radius: 10px;
`

const AboutDescDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 3em 5em 3em 5em;
`

// const AboutImage = styled.img`
// width: 30%;
// height: 30%;
// `

export function AboutComp() {

    return (
        <MainContDiv>
            <AboutDescDiv>
                <Text
                    text="1."
                    size="6rem"
                    weight="800"
                    colour="#EABFC9" />
                <Text
                    text="Why did we create Artner? 
                    Well, Artner is your partner in crime... except instead of crime, we have art.
                    This web app serves to help as inspiration for all your artistic needs."
                    size="1rem"
                    padding="2em" />
            </AboutDescDiv>

            <AboutDescDiv>
                <Text
                    text="2."
                    size="6rem"
                    weight="800"
                    colour="#EABFC9" />
                <Text
                    text="Created by artists for artists! We, Melysa Nguyen and Mai Anh Nguyen, 
                    both are passionate about art and honestly wanted a tool like this but could not find one.
                    So what better way to solve this than to create one? And to share it too!"
                    size="1rem"
                    padding="2em" />
            </AboutDescDiv>

            <AboutDescDiv>
                <Text
                    text="3."
                    size="6rem"
                    weight="800"
                    colour="#EABFC9" />
                <Text
                    text="This was created as a duo project for MDIA-3109 - Advanced Dynamic Content Design
                     where we had the freedom to create a web app that incorporates the usage of APIs."
                    size="1rem"
                    padding="2em" />
            </AboutDescDiv>

        </MainContDiv>
    )
}