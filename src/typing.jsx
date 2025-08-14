import { useState, useRef, useEffect } from "react"

import Footer from "./typingComponents/footer"

export default function Typing(){
    const goToFooter = useRef(null)
    
    const [userText, setUserText] = useState('')
    
    const section2Ref = useRef(null)
    const section3Ref = useRef()

    useEffect(()=>{ 
        section2Ref.current?.scrollIntoView({behavoir:'smooth'})
    },[])

    function goToSection3(){
        section3Ref.current.scrollIntoView({behavoir:'smooth'})
    }
    function onChange(event){

        setUserText(event.target.value)
    }


    return(
        <>  
            <button 
                onClick={()=>(goToFooter.current?.scrollIntoView())}
            >go to footer</button>
            <div 
                style={{cursor:'pointer', textDecoration:'underline'}} 
                onClick={goToSection3}
            >
                To section 3
            </div>
            <section 
                className="intro"
                style={{height:'400px'}}
            >
                <h1>Intro</h1>
                <input type="text" value={userText} name="userInput" onChange={onChange} />
                <div>{userText}</div>
            </section>
            <section 
                style={{height:'500px'}}
                ref={section2Ref}
            >   
                <h1>Another section, not the other one that was not the fisrt one, and not the the fast one you last went
                </h1>
            </section>
            <section 
                style={{height:'500px'}}
                ref={section3Ref}
                
            >A section that is not the first one</section>
            <Footer  ref = {goToFooter}/>
        </>
    )        
}