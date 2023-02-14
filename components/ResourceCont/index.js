import styled from "styled-components"
import { Text } from "../Text"
import { useState, useEffect } from "react"
import data from "../../data/resources.json"
import { useRouter } from "next/router"

const MainResCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
max-width: 100vw;
`

const ResContDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
colour: #F4F5F0;
border: 1px black solid;
width: 44rem;
padding: 1rem 5rem;
margin: 2rem 0rem;
height: 100%;
border-radius: 10px;
flex-direction: column;
background-color: #F4F5F0;
`

const ResDescCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
width: 100%;
margin: 1rem;
`
const ResImg = styled.img`
width: 300px;
height: 200px;
max-width: 300px;
border: 1px solid black;
border-radius: 10px;
`
const ResInfo = styled.div`
display: flex;
width: 100%;
flex-direction: column;
gap: 2rem;
align-items: center;
`

export function ResourceCard() {

    const r = useRouter();
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data.data);
    }, []);

    return (
        <MainResCont>
            {items.map((resource) => (<ResContDiv>
                <ResDescCont>
                    <ResImg src={resource.src} />
                    <ResInfo>
                        <Text weight='500' text={resource.title} size='26px'></Text>
                        <Text text={resource.content} size='16px'></Text>
                        <button onClick={()=>r.push(resource.link)}>Visit Site</button>
                    </ResInfo>
                </ResDescCont>
            </ResContDiv>))}
        </MainResCont>
    )
}
