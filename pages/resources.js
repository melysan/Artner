import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/NavBar'
import { ResourceCard } from '../components/ResourceCont'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'


import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Resources() {

    return (
        <>
            <Head>
                <title>Artner - Resources</title>
                <meta name="description" content="Artner - Your partner in art" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/artner_favicon.svg" />
            </Head>
            <div id="resourceDiv" className={styles.main}>
                <NavBar />
                <Banner
                    bannerHeading="Resources"
                    bannerDescription="Welcome to our page of free art resources! Here, you will find a collection of valuable tools and materials that will help you to unleash your creativity and enhance your artistic skills without breaking the bank. So, dive in and start creating!" />
                <ResourceCard />
            </div>
            <Footer />
        </>
    )
}
