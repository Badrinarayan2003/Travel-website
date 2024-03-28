
import { useState } from "react";

function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (evt) => {
        const newVal = evt.target.value
        const newName = evt.target.name
        setData((pre) => {
            return { ...pre, [newName]: newVal }
        })
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        console.log(data);
        setData({
            name: "",
            email: "",
            phone: "",
            message: "",
        })
    }


    return (
        <div className="contact-box" id="small-contact-box">
            <section className="contact-box-one">
                <h1>Get In Touch</h1>
                <p>Phone:<span> +91(12 3456 7890)</span></p>
                <p className="email">Email:<span> traveller@bus.com</span></p>
                <p>Address:Udayagiribihar, RBI Colony, Baramunda, Bhubaneswar, Odisha 751003</p>
            </section>
            <section className="contact-box-two">
                <div className="box-one">
                    <div className="contact-input">
                        <input type="text" placeholder="Full Name" name="name" value={data.name} onChange={handleChange} />
                    </div>
                    <div className="contact-input">
                        <input type="email" placeholder="Email" name="email" value={data.email} onChange={handleChange} />
                    </div>
                    <div className="contact-input">
                        <input type="number" placeholder="Phone" name="phone" value={data.phone} onChange={handleChange} />
                    </div>
                </div>
                <div className="box-two">
                    <textarea name="message" id="" cols="30" rows="5" placeholder="Your Message" value={data.message} onChange={handleChange}></textarea>
                </div>
            </section>
            <div className="contact-btn">
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

export default Contact;