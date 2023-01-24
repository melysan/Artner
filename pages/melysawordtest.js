import axios from "axios"
import { useState } from "react";

export default function WordPromptTest({
}) {
    const [wordPrompt, setWordPrompt] = useState([]);

    const getWordPrompt = () => {
        axios.get("https://random-word-api.herokuapp.com/word")
            .then((res) => {
                setWordPrompt(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <button onClick={getWordPrompt}>
                Get Random Word
            </button>
            <h3>{wordPrompt}</h3>
        </div>
    )
}
