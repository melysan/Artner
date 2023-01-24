import dynamic from "next/dynamic";
import Img from "../../pages/maianhimageprompt";

const ImgPrompt = dynamic(() => import('./randomimage'), {
    ssr: false
})

export default ImgPrompt;