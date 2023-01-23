import styled from "styled-components";

const PaletteDiv = styled.div`
display: flex;
flex-display: row;`

export function ColourPalette() {

    function generatePalette() {
        let url = "http://colormind.io/api/";
        let data = {
            model: "default",
        };
        let palette;

        let colourRequest = new XMLHttpRequest();

        colourRequest.onreadystatechange = function () {
            if (colourRequest.readyState == 4 && colourRequest.status == 200) {
                palette = JSON.parse(colourRequest.responseText).result;
                console.log(palette);
                document.getElementById("paletteSquares").innerHTML = "";
                var i;
                for (i = 0; i <= 4; i++) {
                    var div = document.createElement("div");
                    div.style.width = "100px";
                    div.style.height = "100px";
                    div.style.background = "rgb(" + palette[i].toString() + ")";
                    div.style.color = "white"
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
    return (
        <>
            <h1>Artner Palette Generator</h1>
            <PaletteDiv id="paletteSquares" />
            <button onClick={() => generatePalette()}>Generate </button>
        </>
    )
}
