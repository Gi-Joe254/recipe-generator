import { MdMarkEmailUnread } from "react-icons/md"
import { PiPhoneCall } from "react-icons/pi"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

export default function Hero({addIngr, inputRef, onChange, style}) {
    return (
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
                        onChange={onChange}
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
                        style={style}>

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
    )
}