import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function About() {

    return (
        <>
            <Head>
                <title>Artner - About</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <NavBar />
                <Banner
                    bannerHeading="About"
                    bannerDescription="Lorem ipsum dolor sit amet consectetur. Id non at adipiscing sed morbi vel sit urna lectus. Eget lacus morbi facilisis mattis enim. Nisi vehicula orci praesent morbi cras placerat diam. Magna egestas vitae imperdiet eget sem duis molestie." />

            </div>

            <Footer />
        </>
    )
}
