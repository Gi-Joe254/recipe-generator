import { useEffect, useState, useRef } from "react"
import sampleRecipe from "./sampleRecipe.json"
//import "./Chef.css"
import recipeBg from "./assets/ingrBackground.png"
import recipeBg3 from "./assets/ingrBg3.avif"

export default function Chef(){
    const [ingr, setIngr] = useState('')
    const [ingrList, setIngrList] = useState([])
    const [recipe, setRecipe] = useState(null)
    
    const ingrRef = useRef(null)
    function addIngr(){
        if (ingr.trim().length > 10 || ingr.length < 3) return;
        setIngrList(prev=>([...prev, ingr.trim()]));
        setIngr('')
    }
    useEffect (()=> {
        ingrList.length >1 && ingrRef.current.scrollIntoView()
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
    return(
        <main>
            <section className="heroContainer">
                <article className="chefHero">
                    <header>Online Chef</header>
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
                        <div
                            style={background}>
                        </div>               
                    </article>:null
                }
                              
                
                {ingrList.length > 3 ? 
                    <article className="recipe" >
                        <button onClick={getRecipe}>Submit to Chef</button>
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
                    </article>:null}
        </main>
    )
}