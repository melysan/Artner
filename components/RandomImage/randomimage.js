import styled from "styled-components";

const ImgPrompt = styled.img`
width: 500px;
height: 500px;
object-fit: contain;
`

export default function RandomImage({src}) {
    return <div>
        <ImgPrompt src={src}/>
    </div>
}
