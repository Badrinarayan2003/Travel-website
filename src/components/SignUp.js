
import { useState } from "react";

function SignUp() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        gender: ""
    })
    const [isVisible, setIsVisible] = useState(false)
    const [cIsVisible, setCIsVisible] = useState(false)

    const handlChange = (evt) => {
        const newVal = evt.target.value;
        const newName = evt.target.name;

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
            password: "",
            cpassword: "",
            gender: ""
        })
    }


    return (

        <div className="login-signup-container">
            <div className="signup-container">
                <form action="">
                    <h1>Sign Up</h1>
                    <div className="sign-search-item">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Full Name" name="name" value={data.name} onChange={handlChange} />
                    </div>
                    <div className="sign-search-item">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" name="email" value={data.email} onChange={handlChange} />
                    </div>
                    <div className="sign-search-item">
                        <label htmlFor="">password</label>
                        <input type={isVisible ? "text" : "password"} placeholder="Password" name="password" value={data.password} onChange={handlChange} />
                        <span id="sign-eye" onClick={() => setIsVisible(!isVisible)}>{isVisible ? (<i class="fa-solid fa-eye-slash"></i>) : (<i class="fa-solid fa-eye"></i>)}</span>
                    </div>
                    <div className="sign-search-item">
                        <label htmlFor="">confirm password</label>
                        <input type={cIsVisible ? "text" : "password"} placeholder="confirm password" name="cpassword" value={data.cpassword} onChange={handlChange} />
                        <span id="sign-eye" onClick={() => setCIsVisible(!cIsVisible)}>{cIsVisible ? (<i class="fa-solid fa-eye-slash"></i>) : (<i class="fa-solid fa-eye"></i>)}</span>
                    </div>
                    <div className="gender">
                        <span>Male</span>
                        <input type="radio" name="gender" value="Male" onChange={handlChange} />
                        <span>Female</span>
                        <input type="radio" name="gender" value="Female" onChange={handlChange} />
                    </div>
                    <button onClick={handleClick}>Sign Up</button>
                </form>
            </div>
        </div>

    );
}

export default SignUp;