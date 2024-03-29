import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/NavBar'
import { WordPrompt } from '../components/WordPrompt'
import { ColourPalette } from '../components/ColourPalette'
import RandomImage from '../components/RandomImage/randomimage'
import { Footer } from '../components/Footer'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MainColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
margin: 2rem;
`

const MainRow = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`

const BoxContainer = styled.div`
background-color: #F4F5F0;
min-width: 60%;
max-width: 100%;
border: 1px black solid;
padding: 2em 0 2em 0;
border-radius: 10px;
display: flex;
justify-content: center;
`

const FlexWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

export default function Home() {

    return (
        <>
            <Head>
                <title>Artner - Home</title>
                <meta name="description" content="Artner - Your partner in art" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/artner_favicon.svg" />
            </Head>
            <NavBar />
            <Banner
                bannerHeading="Art Inspiration Generator"
                bannerDescription="Sometimes getting inspiration for art is difficult, but that's why we created an art inspiration generator! Here, you can generate a random colour palette, a random six letter word prompt, or a random image! Or all three if you like. The possibilities are endless!" />

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeOut', duration: 1 }}
                viewport={{ once: true }}
            >
                <MainColumn id="mainCont">
                    <BoxContainer id="firstBox">
                        <MainColumn>

                            <ColourPalette />
                        </MainColumn>

                    </BoxContainer>

                    <BoxContainer>
                        <MainRow>
                            <FlexWrap>
                                <MainColumn>
                                    <WordPrompt />
                                </MainColumn>
                                <MainColumn>
                                    <RandomImage />
                                </MainColumn>
                            </FlexWrap>
                        </MainRow>
                    </BoxContainer>

                </MainColumn>
            </motion.div>
            <Footer />
        </>
    )
}
