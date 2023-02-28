import styled from "styled-components";
import { Text } from "../Text";
import Image from "next/image";

const MainContDiv = styled.div`
background-color: #F4F5F0;
width: 60%;
border: 1px black solid;
margin: 5rem;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const AboutDescDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

@media (min-width: 1280px) {
    padding: 1em 6em 1em 6em;
}

  @media (min-width: 820px) and (max-width: 1280px){
    padding: 1em 6em 1em 6em;
}

  @media (min-width: 414px) and (max-width: 820px) {
    padding: 1em 2em 1em 2em;
  }

  @media (max-width: 414px) {
    padding: 1em 1em 1em 1em;
}

`

export function AboutComp() {

    return (
        <MainContDiv>
            <Image src="/about_artner_icons/Melysa_MaiAnh_Names.svg" width={300} height={300}></Image>
            <AboutDescDiv>
                <Text
                    text="1."
                    size="2rem"
                    weight="800"
                    colour="#EABFC9" />
                <Text
                    text="Why did we create Artner? 
                    Well, Artner is your partner in crime... except instead of crime, we have art.
                    This web app serves to help as inspiration for all your artistic needs."
                    size="1rem"
                    padding="2em" />
            </AboutDescDiv>
            <Image src="/about_artner_icons/MaiAnh.svg" width={200} height={200}></Image>
            <AboutDescDiv>
                <Text
                    text="2."
                    size="2rem"
                    weight="800"
                    colour="#EABFC9" />
                <Text
                    text="Created by artists for artists! We, Melysa Nguyen and Mai Anh Nguyen, 
                    both are passionate about art and honestly wanted a tool like this but could not find one.
                    So what better way to solve this than to create one? And to share it too!"
                    size="1rem"
                    padding="2em" />
            </AboutDescDiv>
            <Image src="/about_artner_icons/Melysa.svg" width={200} height={200}></Image>
            <AboutDescDiv>
                <Text
                    text="3."
                    size="2rem"
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