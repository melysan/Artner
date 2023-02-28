import styled from "styled-components";
import { Text } from "../Text";
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import { Button } from "../Button";


const SplashContDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
colour: #F4F5F0;
padding: 1rem 10rem;
border: 1px black solid;
width: 500px;
height: 100%;
margin: 5rem;
gap: 2rem;
border-radius: 10px;
flex-direction: column;
background-color: #F4F5F0;
overflow-y: hidden;
@media (max-width: 820px) {
    width: 470px;
    padding: 1rem 5rem;
}
@media (max-width: 414px)  {
    width: 300px;
    padding: 1rem 2rem;
    gap: 3rem;
}
`
const SplashDescCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
width: 100%;
`
const SplashIcon = styled.img`
width: 95px;
height: 95px;
@media (max-width: 414px) {
    width: 50px;
    height: 100%;
}
`

const Logo = styled.img`
display: flex;
width: 25rem;
margin: 2rem 0rem;
align-items: center;
flex-direction: column;
@media (max-width: 414px) {
    width: 15rem;
    height: 7rem;
    margin: 1rem 0rem;
    object-fit: contain;
}
`

export function SplashCont() {

    const r = useRouter();

    const [active, setActive] = useState(0);
    const [complete, setComplete] = useState(false);

    const splashinfo = [
        {
            icon: "/splash_artner_icons/ideas_colored.svg",
            desc: "Generate ideas using our prompts to create masterpieces."
        },
        {
            icon: "/splash_artner_icons/artchive_colored.svg",
            desc: "Show off your amazing art to others on the Artchive."
        },
        {
            icon: "/splash_artner_icons/resource_colored.svg",
            desc: "We got free & cheap art resources for artists to enjoy!"
        }
    ]

    return (
        <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <SplashContDiv>
                <Logo src="/artner_logo.svg" />

                {splashinfo.map((info, i) => (
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeOut", delay: active === i ? 0: 0.5 * i, duration: 1.5}}
                        onAnimationComplete={() => setComplete(true)}
                    >
                        <SplashDescCont key={i}>
                            <SplashIcon src={info.icon} />
                            <Text size="16px" text={info.desc}></Text>
                        </SplashDescCont>
                    </motion.div>
                )
                )}

                <motion.div
                    initial={{ y: 10, opacity: 0}}
                    animate={{ y: 0, opacity: complete ? 1 : 0}}
                    transition={{ ease: "easeOut", delay: 1.5, duration: 1 }}
                    
                >
                    <Button txt="Let’s Draw!" onRoute={()=>r.push('/home')}/>
                    {/* <button onClick={() => r.push('/home')}>Let’s Draw!</button> */}
                </motion.div>
            </SplashContDiv>
        </motion.div>
    )

}
