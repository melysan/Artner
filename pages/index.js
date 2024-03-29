import Head from 'next/head'
import Image from 'next/image'
import { Inter, Splash } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Text } from '../components/Text'
import { SplashCont } from '../components/SplashCont'

const inter = Inter({ subsets: ['latin'] })

export default function Welcome() {

  return (
    <>
      <Head>
        <title>Artner - Welcome</title>
        <meta name="description" content="Artner - Your partner in art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/artner_favicon.svg" />
      </Head>
      <div className={styles.main}>
        <SplashCont />
      </div>
    </>
  )
}
