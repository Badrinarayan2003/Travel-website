import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const [isCheck, setIsCheck] = useState(false)
    const [isScroll, setIsScroll] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <nav className={`navbar ${isScroll ? ("sticky") : ("fixed")}`}>
            <div className="logo">
                <Link exact to="/"><h1>TRAVE<span>LLERS</span></h1></Link>
            </div>
            <div className={`links ${isCheck ? 'links-enable' : 'links-disable'}`} >
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                <Link className='login-button' id='login-btn' to="/login">Login</Link>
                <Link className='signup-button' id='signup-btn' to="/signup">Sign Up</Link>
            </div>
            <label onClick={() => setIsCheck(!isCheck)} >{isCheck ? (<i className="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-bars"></i>)}</label>
        </nav>
    );
}


export default Navbar;
