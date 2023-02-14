import styled from "styled-components"
import { Text } from "../Text"

const FooterCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #8B7979;
    height: 2rem;
    color: white;
`

export function Footer() {
    return (
        <FooterCont>
            <Text size="14px" text="Copyright © 2023 Artner. All Rights Reserved"></Text>
        </FooterCont>
    )

}