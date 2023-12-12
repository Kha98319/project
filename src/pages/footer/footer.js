import { Link } from "react-router-dom"
import './footer.css'
import { useRef } from "react"
const Footer = ()=>{
    const inaref = useRef()
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(inaref.current === '') return
        alert('Sent!')
        window.location.reload()
    }
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sollicitudin nulla, vel dapibus justo.</p>
                    <div className="social-links">
                    <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="/"><i className="fab fa-twitter"></i></Link>
                    <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                    <Link to="/"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>

                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allproducts">Products</Link></li>
                    <li><Link to="/productsreview">Services</Link></li>
                    <li><Link to="/productsreview">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h2>Contact Us</h2>
                    hello can you cantact to me!
                </div>
                </div>

                <div className="footer-bottom">
                &copy; 2023 Your Website | Designed by Your Name
            </div>
        </div>
    )
}
export default Footer