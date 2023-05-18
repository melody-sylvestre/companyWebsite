import { Link } from "react-router-dom"
import "./Navbar.scss"

import { ReactComponent as Logo } from '../images/Logo.svg'
const Navbar = () => { 
    
    return (
        <nav>
            <div className="logo_container">
                <Logo/>
            </div>
            <div className="links_container">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <button>Log in</button>
            </div>
            
        </nav>
    )
}
export default Navbar