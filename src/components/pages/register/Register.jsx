import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import { axiosInstance } from '../../../config';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); //so it doesn't refresh the page
        setError(false);
        try {
            const newUser = {
                username,
                email,
                password
            }
            const res = await axiosInstance.post("/register", newUser); //http://localhost:8000/auth/register
            res.data && window.location.replace("/login"); //once user is registered it redirects to the login page
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                
                <label>Username</label>
                <input type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)}/>

                <label>Email</label>
                <input type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)}/>

                <label>Password</label>
                <input type="text" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>

                <button className="registerSubmitButton" type="submit">Register</button>
                <button className="registerSecondaryButton">
                    <Link to="/login" className="link">
                        Login
                    </Link>
                </button>
                {error && <span>Something went wrong...</span>}
            </form>
        </div>
    )
}
