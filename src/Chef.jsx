import { useEffect, useState, useRef } from "react"
import sampleRecipe from "./sampleRecipe.json"
import "./Chef.css"
import Footer from "./typingComponents/footer"
import { MdMarkEmailUnread } from "react-icons/md"
import { BsTelephone, BsTelephoneOutbound } from "react-icons/bs"
import { PiPhoneCall } from "react-icons/pi"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import chefLogo1 from "./assets/cheflogo1.png"
import chefLogo2 from "./assets/cheflogo2.png"

export default function Chef(){
    const [ingr, setIngr] = useState('')
    const [ingrList, setIngrList] = useState([])
    const [recipe, setRecipe] = useState(null)
    const [showFakeFooter, setShowFakeFooter ] = useState(true)
    
    const ingrRef = useRef(null)
    function addIngr(){
        if (ingr.trim().length > 15 || ingr.length < 3) return;
        setIngrList(prev=>([...prev, ingr.trim()]));
        setIngr('')
        setShowFakeFooter(false)
    }
    useEffect (()=> {
        ingrList && ingrRef.current.scrollIntoView()
    },[ingrList])

    const inputRef= useRef(null) 
    useEffect(()=>{
        inputRef.current.focus()
    },[])
      
    

    //getting data from gemini AI API//
    /*
    useEffect(()=>{        
        const getRecipe = async ()=>{
            try{
                const response = await fetch('',
                {
                method: "POST",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({
                    contents: [
                        {role: "user",parts: [{text: "Write a recipe in JSON format with keys: 'title', 'ingredients', and 'instructions'."}]}
                    ]
                })
                }
            );
            const data = await response.json();
            (data.instructions);
        } catch (err) {
            console.error(err);
        }
        };

        
        getRecipe();
    },[]);*/

    //getting data from a localfile//

    const resultsRef = useRef(null)
    function getRecipe(){        
        setRecipe(sampleRecipe)             
    }

    useEffect (()=> {
        recipe && resultsRef.current?.scrollIntoView() 
    },[recipe])


    
    return(
        <main>
            <section className="heroContainer">
                <article className="chefHero">
                    <header>Ch<span className="word2">ef</span> Ma<span className="word2">te</span></header>
                    <div className="heroRight">
                        <p>Add ingredients and submit to the Chef for a recipe</p>
                        <form action={addIngr}>
                        <input
                            
                            ref={inputRef}
                            className="input"
                            placeholder="type ingredient"
                            onChange={(e)=>{setIngr(e.target.value)}}
                        />
                        <button 
                            className="addBtn" 
                            type="submit"
                            
                        >
                            Add Ingredient
                        </button>
                        </form>
                        <div 
                            className="fakeFooter"
                            style={{
                                display: showFakeFooter ? "block" :"none",
                            }}>

                                <MdMarkEmailUnread />
                                <PiPhoneCall />
                                <FaFacebook />
                                <FaInstagram />
                                <FaX />
                                <FaWhatsapp />
                        </div>
                    </div>
                </article>
            </section >
                {ingrList.length >= 1 ?
                    <article 
                        className="ingredientList" 
                        ref={ingrRef}
                        style={{
                            position : "relative",
                            zIndex : "2"
                        }}
                        >
                        <header>Ingredients</header>
                        <div className="list" >
                            {ingrList.map(item => 
                                <p className="listItem">{item}</p>)
                            }
                        </div>             
                    </article>:null
                }
                              
                
                {ingrList.length > 3 ? 
                    <article className="recipe" >
                        <button className="submitBtn" onClick={getRecipe}>Submit to Chef</button>
                        <section className= "chefLogo2">
                            <img src={chefLogo2} />
                        </section>
                        {recipe && 
                            <section className="results" ref={resultsRef}>
                                <header>Chef's Recipe:</header>
                                <h1 className="recipeTitle">{recipe.title}</h1>
                                <div className="usedIngr">
                                    <h4>Used Ingredients</h4>
                                    <ul>
                                        { recipe.ingredients.map((item)=>(
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="instructions">
                                    <h4>Instructions</h4>
                                    <ol>
                                        {recipe.instructions.map((item)=>(
                                            <li>{item}</li>
                                        ))}
                                    </ol>
                                </div>
                                
                            </section>}
                            <Footer />
                    </article>:null}
                    
             
        </main>
    )
}