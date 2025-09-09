export default function Results({resultsRef, recipe}) {
    return(
        <section className="results" ref={resultsRef}>
            <header>Chef's Recipe:</header>
            <h1 className="recipeTitle">{recipe.title}</h1>
            <div className="usedIngr">
                <h4>Used Ingredients</h4>
                <ul>
                    {recipe.ingredients.map((item, index)=>(
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="instructions">
                <h4>Instructions</h4>
                <ol>
                    {recipe.instructions.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
            
        </section>
    )
}