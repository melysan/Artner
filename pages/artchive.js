import { prisma } from '../server/db/client';
import axios from 'axios';
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Text } from '../components/Text';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion';


const ArtchivePageFlex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
flex-wrap: no-wrap;
`
const ArtchiveCont = styled.div`
background-color: #F4F5F0;
width: 60%;
border: 1px black solid;
margin: 2rem;
border-radius: 10px;
`

const ArtchiveDescriptionCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 3em 5em 3em 5em;
`

const ColumnFlex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ArtchiveInput = styled.input`
width: 40vw;
border: 1px solid #EABFC9;
background-color: white;
border-radius: 5px;
padding: 1em;
margin-bottom: 1.5em;
color: black;
transition: background-color 0.4s ease-in-out;
resize: none;

&:focus {
    background-color: #F2DEE9;
    resize: none;
}

&::placeholder {
    color: #A8A8A8;

}
`

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`
const ArtPost = styled.div`
display: flex;
flex-direction: column;
background-color: #F4F5F0;
border: 1px solid black;
padding: 1em;
margin: 1em;
border-radius: 10px;
`
const ArtistName = styled.h2`
font-family: 'Epilogue', sans-serif;
font-size: 1em;
font-weight: 500;
color: #E1A5AD;
display: flex;
justify-content: center;
`

const ArtDescription = styled.p`
font-family: 'Epilogue', sans-serif;
font-size: 1em;
color: #8B7979;
display: flex;
justify-content: center;
`

const Art = styled.img`
border:solid 2px;
border-bottom-color:#ffe;
border-left-color:#eed;
border-right-color:#eed;
border-top-color:#ccb;
max-height:100%;
max-width:100%;
object-fit: cover;
`

const ArtFrame = styled.div`
    background-color:#F4F5F0;
    border:solid 5vmin #eee;
    border-bottom-color:#fff;
    border-left-color:#eee;
    border-radius:2px;
    border-right-color:#eee;
    border-top-color:#ddd;
    box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 2px 5px 1px rgba(0,0,0,.25);
    box-sizing:border-box;
    display:inline-block;
    margin:2vh 2vw;
    padding:5vmin;
    position:relative;
    text-align:center;
    &:before {
      border-radius:2px;
      bottom:-2vmin;
      box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
      content:"";
      left:-2vmin;
      position:absolute;
      right:-2vmin;
      top:-2vmin;
    }
  }`

const SubmitButton = styled.button`
background-color: #9CB7D4;
color: black;
border: none;
width: 245px;
height: 55px;
margin: 1rem;
font-size: 16px;
&:hover {
background-color: #5F7A98;
}`

export default function Artchive({ posts: art }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [description, setDescription] = useState('')
    const [posts, setPosts] = useState(art)


    useEffect(() => {
        setPosts(art)
    }, [art])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/posts', { title, description, content })
        setPosts([...posts, res.data])
    }

    return (
        <>
            <Head>
                <title>Artner - Artchive</title>
                <meta name="description" content="Artner - Your partner in art" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/artner_favicon.svg" />
            </Head>
            <NavBar />
            <Banner
                bannerHeading="Artchive"
                bannerDescription="What is the Artchive? It is an archive of art! A museum of sorts, we want fellow artists to be able to share their work of arts with others.
                If you feel proud of what you created or just want to put yourself out there, please feel free to share! Or maybe you need to gaze upon some pretty artwork to gather ideas!"
            />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeOut', duration: 1 }}
                viewport={{ once: true }}
            >
                <ArtchivePageFlex>
                    <ArtchiveCont>

                        <ArtchiveDescriptionCont>
                            <ColumnFlex>
                                <Text
                                    text="Share your Art"
                                    size="1.5em"
                                    padding="1em" />

                                <form onSubmit={handleSubmit} >
                                    <label id="artistName">
                                        <Text
                                            text="Artist Name"
                                            size="1em"
                                            padding="1em 0 0 0" />
                                    </label>
                                    <ArtchiveInput type="text"
                                        placeholder="Put your artist name here"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />

                                    <label id="descriptionName">
                                        <Text
                                            text="Description"
                                            size="1em"
                                            padding="1em 0 0 0" />
                                    </label>
                                    <ArtchiveInput type="text"
                                        placeholder="Describe your masterpiece"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)} />

                                    <label>
                                        <Text
                                            text="Image URL"
                                            size="1em"
                                            padding="1em 0 0 0" />
                                    </label>
                                    <ArtchiveInput
                                        placeholder="Share your image url"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)} />

                                    <ColumnFlex>
                                        <SubmitButton type="submit">
                                            <Text
                                                textAlign='center'
                                                text="Share"
                                                size="1em"
                                                padding="0.5em" />
                                        </SubmitButton>
                                    </ColumnFlex>

                                </form>
                            </ColumnFlex>
                        </ArtchiveDescriptionCont>
                    </ArtchiveCont>
                    <Row>
                        {posts && posts.map((art) => (
                            <ArtFrame key={art.id}>
                                <Art
                                    src={art.content} width={200} height={200} />
                                <ArtistName>By {art.title}</ArtistName>
                                <ArtDescription>"{art.description}"</ArtDescription>
                            </ArtFrame>
                        ))}
                    </Row>
                </ArtchivePageFlex>
            </motion.div>

            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const posts = await prisma.post.findMany()

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
        }
    }
}