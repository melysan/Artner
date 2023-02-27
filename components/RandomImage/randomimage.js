import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "../Text";


const ImgPrompt = styled.img`
width: 400px;
height: 400px;
object-fit: contain;
`

const ImgCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
flex-direction: column;
`

export default function RandomImage() {

    const [image, setImage] = useState();

    var apiKey = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;

    const unsplashImage = async () => {
        const result = await axios.get(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        console.log(result.data);
        setImage(result.data.urls.regular);
    }


    useEffect(() => {
        unsplashImage();
    }, [])

    return (
    <>
       <Text size= '16px' text="Image Generator"/>
    <ImgCont>
        <ImgPrompt src={image} />
        <button onClick={() => unsplashImage()}>Click here to get a random image</button>
    </ImgCont>
    </>
    )

}

