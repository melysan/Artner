import styled from "styled-components";
import { Text } from "../Text";
import Link from "next/link";

const NavList = styled.ul`
list-style-type: none;
width: 100vw;
margin:0;
padding: 0;
overflow: hidden;
background-color: #8B7979;
font-size: 1rem;
`

const NavListItem = styled.li`
float: right;
`

const NavLogo = styled.li`
float: left;
`


const StyledLink = styled(Link)`
display: block;
color: white;
text-align: center;
padding: 2em;
text-decoration: none;
&:hover {
    background-color: #AA9093;
    text-decoration: underline;
    text-underline-offset: 8px;


}`

export function NavBar() {
    return (
        <>
            <NavList>

                <NavLogo>
                    <StyledLink href="/home">
                        <Text
                            colour="white"
                            size="1em"
                            text="LOGO FILLER" />
                    </StyledLink>
                </NavLogo>

                <NavListItem>
                    <StyledLink href="/about">
                        <Text
                            colour="white"
                            size="1em"
                            text="About" />
                    </StyledLink>
                </NavListItem>
                <NavListItem>
                    <StyledLink href="/resources">
                        <Text
                            colour="white"
                            size="1em"
                            text="Resources" />
                    </StyledLink>
                </NavListItem>
                <NavListItem>
                    <StyledLink href="/artchive">
                        <Text
                            colour="white"
                            size="1em"
                            text="Artchive" />
                    </StyledLink>
                </NavListItem>
                <NavListItem>
                    <StyledLink href="/home">
                        <Text
                            colour="white"
                            size="1em"
                            text="Home" />
                    </StyledLink>
                </NavListItem>
            </NavList>

        </>
    )
}
