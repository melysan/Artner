import dynamic from "next/dynamic";

const ImgPrompt = dynamic(() => import('./randomimage'), {
    ssr: false
})

export default ImgPrompt;