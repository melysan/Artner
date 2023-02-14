import axios from "axios"
import { useState } from "react";
import { Text } from "../Text";
import styled from "styled-components";

const WordContainer = styled.div`
display: flex;
flex-direction: column;
padding: 6em;
border: solid 1px black;
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

            <button onClick={getWordPrompt}>
                Generate
            </button>
        </>
    )
}
