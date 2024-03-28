
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {


    const [isVisible, setIsVisible] = useState(false)

    const [data, setData] = useState({
        username: "",
        password: ""
    })


    const handleChange = (evt) => {
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
            username: "",
            password: ""
        })
    }


    return (
        <div className="login-signup-container">
            <div className="sub-container">
                <form action="">
                    <h1>Login</h1>
                    <div className="search-item">
                        <span htmlFor=""><i className="fa-solid fa-user"></i></span>
                        <input type="email" placeholder="Email" name="username" value={data.username} onChange={handleChange} />
                    </div>
                    <div className="search-item">
                        <span htmlFor=""><i className="fa-solid fa-lock"></i></span>
                        <input type={isVisible ? "text" : "password"} placeholder="Password" name="password" value={data.password} onChange={handleChange} />
                        <span id="login-eye" onClick={() => setIsVisible(!isVisible)}>{isVisible ? (<i class="fa-solid fa-eye-slash"></i>) : (<i class="fa-solid fa-eye"></i>)}</span>
                    </div>
                    <div className="forget-sign">
                        <a href="/">forgot Password?</a>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <button onClick={handleClick}>Login</button>
                    <p>--- Sign Up With ---</p>
                    <div className="signup-icon">
                        <div className="google-icon"><i className="fa-brands fa-google"></i></div>
                        <div className="twitter-icon"><i className="fa-brands fa-twitter"></i></div>
                        <div className="facebook-icon"><i className="fa-brands fa-facebook"></i></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;