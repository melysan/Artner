import styled from "styled-components";
import { Text } from "../Text";
import { useEffect } from "react";

const PaletteDiv = styled.div`
display: flex;
flex-display: row;`

const PaletteButton = styled.button`
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
const FlexWrap = styled.div`
display: flex;
flex-wrap: wrap;
`

export function ColourPalette() {

    function generatePalette() {
        let url = "http://colormind.io/api/";
        let data = {
            model: "default",
        };
        let palette;

        let colourRequest = new XMLHttpRequest();

        colourRequest.onreadystatechange = function () {
            if (colourRequest.readyState == 3 && colourRequest.status == 200) {
                palette = JSON.parse(colourRequest.responseText).result;
                console.log(palette);
                document.getElementById("paletteSquares").innerHTML = "";
                var i;
                for (i = 0; i <= 3; i++) {
                    var div = document.createElement("div");
                    div.style.width = "80px";
                    div.style.height = "80px";
                    div.style.background = "rgb(" + palette[i].toString() + ")";
                    div.style.color = "white"
                    div.style.fontSize = "12px"
                    div.style.textAlign = "center"
                    div.innerHTML = palette[i]
                    document.getElementById("paletteSquares").appendChild(div);
                }
            } else {
                console.log(`error ${colourRequest.status} ${colourRequest.statusText}`);
            }
        };

        colourRequest.open("POST", url, true);
        colourRequest.send(JSON.stringify(data));
    }


    useEffect(() => {
        generatePalette();
    }, []);

    return (
        <>
            <Text
                text="Colour Palette"
                size="16px" />
            <FlexWrap>
                <PaletteDiv id="paletteSquares" />
            </FlexWrap>
            <PaletteButton onClick={() => generatePalette()}>Generate Random Palette</PaletteButton>
        </>
    )
}
