import { Link } from "react-router-dom"
import Swiper from "react-id-swiper"
import 'swiper/css'
import "./Header.scss"
import { useEffect, useState } from "react"


const Header = () => {

    const [headerContents, setHeaderContents] = useState([])

    async function getHeaderContents() {
        const response = await fetch("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details")
        if (response.status===200) {
            const data = await response.json()
            console.log(data)
            setHeaderContents(data)
        } else {
            const data = []
            setHeaderContents(data)
        }
    }
    useEffect(() => {
        getHeaderContents()
    }, [])

    // TODO: create the swiper thing 
    return (
     <header>
        {/* <h1>{headerContents?.Title}</h1>
        <p>{headerContents?.Subtitle}</p>
        <Link to="/contact-us">Contact us</Link> */}
     </header>     
    )


}

export default Header