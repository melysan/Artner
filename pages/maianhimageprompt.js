
import axios from "axios";
import { useState } from "react";


export default function Img() {

    const [image, setImage] = useState();
    const [search, setSearch] = useState("");
    const [imgResult, setImgResult] = useState([]);

    var apiKey = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;

    const unsplashImage = async () => {
        const result = await axios.get(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        console.log(result.data);
        setImage(result.data.urls.regular);
    }


    const Submit = async () => {
        const res = await axios.get(`https://api.unsplash.com/search/photos/?page=1&query=' + search + '&client_id=${apiKey}`);
        console.log(res.data.results);
        setImgResult([...res.data.results]);
        //    console.log(search)
    }

    return <div>
        <button onClick={() => unsplashImage()}>Click here to get a random image</button>
        <img src={image} style={{ width: 400, height: 500 }} />
        {/* <input onChange={e => setSearch(e.target.value)}/> */}
        {/* <button onClick={()=>Submit()}>Search</button> */}
        {/* {imgResult.map((o,i) => (
        <img src={o.urls.raw} loading="lazy" style={{width: 400, height: 400}}></img>
))} */}
    </div>

}
