import { useEffect, useState, useRef } from "react"
import sampleRecipe from "./sampleRecipe.json"
import "./Chef.css"
import Footer from "./components/footer"
import chefLogo2 from "./assets/cheflogo2.png"
import { nanoid } from "nanoid"
import Hero from "./components/hero"
import IngrList from "./components/ingrList"
import Results from "./components/results"

export default function Chef(){
    const [ingr, setIngr] = useState('')
    const [ingrList, setIngrList] = useState([])
    const [recipe, setRecipe] = useState(null)
    const [showFakeFooter, setShowFakeFooter ] = useState(true)
    
    const ingrRef = useRef(null)

    function addIngr(){
        if (ingr.trim().length > 15 || ingr.length < 3) return;
        setIngrList(prev=>([
            ...prev, {
            ingr: ingr.trim(),
            id: nanoid()
        }]));
        setIngr('')
        setShowFakeFooter(false)
        inputRef.current?.focus()
    }
    
    useEffect (()=> {
        ingrList.length >= 1 && ingrRef.current?.scrollIntoView({behavior: 'smooth'})
    },[ingrList])

    const inputRef= useRef(null) 

    useEffect(()=>{
        inputRef.current?.focus()
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
    const [recipeShown, setRecipeShown] = useState(false)

    function getRecipe(){      
        setRecipe(sampleRecipe) 
        setRecipeShown(true)            
    }

     function handleDel(id) {
            const updatedList = ingrList.filter(item =>
                item.id !== id
            );
            setIngrList(updatedList)
        }

    useEffect (()=> {
        recipe && resultsRef.current?.scrollIntoView({behavior: 'smooth'}) 
    },[recipe])

    return(
        <main>
            <Hero 
                addIngr={addIngr}
                inputRef = {inputRef}
                onChange={(e)=>{setIngr(e.target.value)}}
                style={{
                            display: showFakeFooter ? "block" :"none",
                        }}
            />
            {ingrList.length >= 1 ?
            <IngrList 
                ingrRef={ingrRef}
                ingrList={ingrList}
                handleDel={handleDel}
            />
            :null
            }
            {ingrList.length > 3 ? 
            <article className="recipe" >
                <button 
                    className="submitBtn" 
                    onClick={getRecipe}
                >
                    {!recipeShown? 'Submit to Chef': 'New Ingredients'}
                </button>
                <section className= "chefLogo2">
                    <img src={chefLogo2} />
                </section>
                {recipe && 
                    <Results 
                        resultsRef={resultsRef}
                        recipe={recipe}
                    />
                }
                <Footer />
            </article>:null}
                    
             
        </main>
    )
}