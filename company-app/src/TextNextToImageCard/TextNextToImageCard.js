import { Link } from "react-router-dom"
import "./TextNextToImageCard.scss"

const TextNextToImageCard = () => {
    return (
        <div classname="text_next_to_image_card">
            <div className="text_container">
                <p>
                Lorem ipsum dolor sit amet. Qui Quis atque quo enim optio ut totam iste et ullam animi. Id molestias culpa eos nisi mollitia qui autem consectetur aut consectetur voluptas eum dolorem voluptatem et quas laudantium. Et voluptatibus excepturi et similique nobis qui ratione tempora id praesentium doloremque eum dolores officia? Qui enim laborum eum assumenda architecto qui labore culpa. 
                </p>
                <Link to="/about-us">Learn more</Link>
                
            </div>
            <img src="images/shutterstock_696636415.jpg" alt="An office space" className="card_image"/>
        </div>
    )
}
export default TextNextToImageCard