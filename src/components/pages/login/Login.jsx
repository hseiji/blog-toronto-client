import { Link } from 'react-router-dom'
import { useRef, useContext, useState } from 'react';
import { Context } from "../../context/Context";
import './login.css'
import { axiosInstance } from '../../../config';

export default function Login() {

    //Variables using useRef to login
    const userRef = useRef();
    const passwordRef = useRef();
    //useContext Context API
    const { dispatch, isFetching } = useContext(Context);
    //
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //It changes the state of our useReducer to LoginStart
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axiosInstance.post("/auth/login", { //http://localhost:8000/auth/login
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            //If the login is succesful updates the new state 
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE"});
            setError(true);
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder="Enter your username..." ref={userRef}/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password..." ref={passwordRef}/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                {error && <span>Something went wrong...</span>}
                <button className="registerButton">
                    <Link to="/register" className="link">
                        Register
                    </Link>
                </button>
            </form>
        </div>
    )
}
