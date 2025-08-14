import { useState, useEffect }from "react";
import recipeBg3 from "./assets/ingrBg3.avif"

export default function HeroBg(){
    const [bgSize, setBgSize] = useState('cover');

    useEffect (()=>{
        const handleResize = () => {
            window.innerWidth <=768 &&
            setBgSize('300px auto')
        }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
    },[])

    const background = {
        position : "absolute",
        inset : "0",
        backgroundImage : `url(${recipeBg3})`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        opacity : "0.4",
        border: '1px solid black', 
        
        }
    return <div style={background}></div> 
}