import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/NavBar'
import { WordPrompt } from '../components/WordPrompt'
import { ColourPalette } from '../components/ColourPalette'
import RandomImage from '../components/RandomImage/randomimage'
import { Footer } from '../components/Footer'


export default function Home() {

    return (
        <>
            <Head>
                <title>Artner - Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <NavBar />
                <Banner
                    bannerHeading="Art Inspiration Generator"
                    bannerDescription="Sometimes getting inspiration for art is difficult, but that's why we created an art inspiration generator! Here, you can generate a random colour palette, a random six letter word prompt, or a random image! Or all three if you like. The possibilities are endless!" />
                <ColourPalette />
                <WordPrompt />
                <RandomImage />
            </div>

            <Footer />
        </>
    )
}
