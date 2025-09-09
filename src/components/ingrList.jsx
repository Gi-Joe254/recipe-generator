import "./ingrList.css"

export default function IngrList({ingrRef, ingrList, handleDel}) {
   

    return(
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
                    <p className="listItem" key={item.id}>
                        {item.ingr}
                        <button
                            onClick={() => {handleDel(item.id)}}
                        >x</button>
                    </p>)
                }
            </div>             
        </article>
    )
}