import axios from "axios"
import { useState, useEffect } from "react";
import { Text } from "../Text";
import styled from "styled-components";

const WordContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 300px;
border: solid 1px black;
`

const PromptButton = styled.button`
background-color: #9CB7D4;
color: black;
border: none;
width: 245px;
height: 55px;
margin: 1rem;
font-size: 16px;
&:hover {
background-color: #5F7A98;
}
`

export function WordPrompt({
}) {
    const [wordPrompt, setWordPrompt] = useState([]);

    const getWordPrompt = () => {
        axios.get("https://random-word-api.herokuapp.com/word?length=6")
            .then((res) => {
                setWordPrompt(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getWordPrompt();
    }, [])

    return (
        <>
            <Text
                text="Word Prompt"
                size="16px" />
            <WordContainer>

                <Text
                    text={wordPrompt}>
                </Text>
            </WordContainer>

            <PromptButton onClick={getWordPrompt}>
                Generate Random Word
            </PromptButton>
        </>
    )
}
