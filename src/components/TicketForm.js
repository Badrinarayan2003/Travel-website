
import React, { useState } from "react";

function TicketForm() {
    const [data, setData] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        gender: ""

    })
    const [submitMsg, setSubmitMsg] = useState(false)


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
        setSubmitMsg(true)

        setData({
            name: "",
            age: "",
            phone: "",
            email: "",
            gender:""
        })

        setTimeout(() => {
            setSubmitMsg(false)
        },3000)
    }


    return (
        <div className="ticket-form-container">
            <form>
                <h2>Enter Your Details</h2>
                {submitMsg?(<p>Submited Successfully</p>):("")}
                <div className="passenger-name-age">
                    <div className="passenger-name">
                        <label>passenger Name</label>
                        <input type="text" placeholder="Full Name" name="name" value={data.name} onChange={handleChange} />
                    </div>
                    <div className="passenger-age">
                        <label>Age</label>
                        <input type="number" placeholder="age" name="age" value={data.age} onChange={handleChange} />
                    </div>
                </div>
                <div className="pass-phone-email">
                    <div className="pass-phone">
                        <label>Phone</label>
                        <input type="number" placeholder="Phone" name="phone" value={data.phone} onChange={handleChange} />
                    </div>
                    <div className="pass-email">
                        <label>Email</label>
                        <input type="email" placeholder="Email" name="email" value={data.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="pass-gender">
                    <span>Male</span>
                    <input type="radio" name="gender" value="Male" onChange={handleChange} />
                    <span>Female</span>
                    <input type="radio" name="gender" value="Female" onChange={handleChange} />
                </div>
                <div className="ticket-sbmt-btn">
                    <button onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default TicketForm;