import styled from "styled-components"
import { Text } from "../Text"
import { useState, useEffect } from "react"
import data from "../../data/resources.json"
import { useRouter } from "next/router"
import {Button } from "../Button"
import {motion} from "framer-motion" 

const MainResCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
max-width: 100vw;
overflow-y: hidden;
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
@media (max-width: 820px) {
    width: 35rem;
    padding: 1rem 5rem;
}
@media (max-width: 414px) {
    width: 17rem;
    padding: 1rem 3rem; 
}
`

const ResDescCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
width: 100%;
margin: 1rem;
@media (max-width: 820px) {
    flex-direction: row;
}
@media (max-width: 414px) {
    flex-direction: column;
}
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
@media (min-width: 414px) and (max-width: 896px) {
}
`

export function ResourceCard() {

    const r = useRouter();
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data.data);
    }, []);

    return (
        <MainResCont>

            {items.map((resource) => (
            <motion.div 
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ ease: 'easeOut', duration: 1}}
            viewport={{ once: true }}
            >
            <ResContDiv>
                <ResDescCont>
                    <ResImg src={resource.src} />
                    <ResInfo>
                        <Text weight='500' text={resource.title} size='26px'></Text>
                        <Text text={resource.content} size='16px'></Text>
                        <Button 
                        width="225px"
                        height="40px"
                        margin="0rem" 
                        onRoute={()=>r.push(resource.link)} 
                        txt='Visit Site'></Button>
                    </ResInfo>
                </ResDescCont>
            </ResContDiv>
            </motion.div>))}
        </MainResCont>
    )
}
