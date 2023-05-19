import { Link } from "react-router-dom"
import "./TextNextToImageCard.scss"

const TextNextToImageCard = () => {
    return (
        <div classname="text_next_to_image_card">
            <div className="text_container">
                <p>
                    Long random text that will have to be replaced by some lorem ipsum. Long random text that will have to be replaced by some lorem ipsum.
                    Long random text that will have to be replaced by some lorem ipsum. Long random text that will have to be replaced by some lorem ipsum. 
                </p>
                <Link to="/about-us">Learn more</Link>
                
            </div>
            <img src="images/shutterstock_696636415.jpg" alt="An office space" className="card_image"/>
        </div>
    )
}
export default TextNextToImageCard