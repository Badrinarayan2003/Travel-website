
import { useState } from "react";

function Footer() {
    // const [data, setData] = useState("")

    const [data, setData] = useState({
        email: ""
    })


    const handlChange = (evt) => {
        const newVal = evt.target.value
        const newName = evt.target.name
        setData(() => {
            return { [newName]: newVal }
        })
    }

    // const handlChange = (evt) => {
    //     const newVal = evt.target.value
    //     setData(newVal)
    // }

    const handleClick = (evt) => {
        evt.preventDefault();
        console.log(data)
    }

    return (
        <>
            <footer className="footer-box">
                <div className="footer-box-one">
                    <h3>Get In Touch</h3>
                    <p><span><i className="fa-solid fa-location-dot"></i> </span> Baramunda, Bhubaneswar, 751003</p>
                    <p className="footer-mail-number"><span><i className="fa-solid fa-envelope"></i> </span> traveller@bus.com</p>
                    <p className="footer-mail-number"><span><i className="fa-solid fa-phone"></i> </span> +91 (12 3456 7890)</p>
                </div>
                <div className="footer-box-two">
                    <div className="social-media-icon">
                        <div className="foot-facebook"><i className="fa-brands fa-facebook"></i></div>
                        <div className="foot-insta"><i className="fa-brands fa-instagram"></i></div>
                        <div className="foot-twitter"><i className="fa-brands fa-linkedin"></i></div>
                    </div>
                    <p>Explore our updates on social media.</p>
                </div>
                <div className="footer-box-three">
                    <h3>TRAVELLERS</h3>
                    <div>
                        <input type="email" placeholder="Email" name="email" value={data.email} onChange={handlChange} />
                    </div>
                    <button id="subscribe-btn" onClick={handleClick}>Subscribe</button>
                </div>
            </footer>
            <div className="copyright-footer">
                <p>© 2024 All Rights Reserved.</p>
                <p>TRAVELLERS.COM</p>
            </div>
        </>
    );
}

export default Footer;