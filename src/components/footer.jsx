import { FaX } from "react-icons/fa6"
import "./footer.css"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer(){
    
    
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>ChefMate</h2>
                    <p>Your trusted cooking companion</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Cooking Tips</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="Twitter"><FaX /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 ChefMate. All Rights Reserved.</p>
            </div>
        </footer>

    )
}