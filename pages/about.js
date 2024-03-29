import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { AboutComp } from '../components/AboutContainer'
import styled from "styled-components";
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const AboutFlex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
`

export default function About() {

    return (
        <>
            <Head>
                <title>Artner - About</title>
                <meta name="description" content="Artner - Your partner in art" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/artner_favicon.svg" />
            </Head>
            <NavBar />
            <Banner
                bannerHeading="About"
                bannerDescription="Artner is your one-stop web app for all your inspirational needs! Whether you need an art palette, word prompt, or imagery; we got your back.
                    Not only that but we've included resources to share with you, and an archive of art AKA Artchive for you to share with others!" />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeOut', duration: 1 }}
                viewport={{ once: true }}
            >
                <AboutFlex
                    id="aboutFlex">

                    <AboutComp />
                </AboutFlex>
            </motion.div>
            <Footer />
        </>
    )
}
