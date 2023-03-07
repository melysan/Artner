import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "../Text";


const ImgPrompt = styled.img`
width: 300px;
height: 300px;
object-fit: cover;
`

const ImgCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
flex-direction: column;
`

const ImgButton = styled.button`
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
            <Text size='16px' text="Image Generator" />
            <ImgCont>
                <ImgPrompt src={image} />
            </ImgCont>
            <ImgButton onClick={() => unsplashImage()}>Generate Random Image</ImgButton>
        </>
    )

}

