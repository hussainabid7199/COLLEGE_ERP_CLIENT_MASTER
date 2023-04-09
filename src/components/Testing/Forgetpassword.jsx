import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toastify from '../partials/Toastify';
import LoadingSpinner from '../partials/LoadingSpinner';


export default function Forgetpassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleForgotPassword = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const handleUserEmail = await fetch("/resetpassword", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })

        const response = await handleUserEmail.json();
        console.log(response);

        handleUserEmail.status === 404 || response.code === 404 ?
            <>
                {setTimeout(() => {
                    setIsLoading(false);
                }, 2000)}
                {console.log("!Invalid email")}{Toastify("!User don't exist")}
            </>
            :
            <>
                {setTimeout(() => {
                    setIsLoading(false);
                }, 2000)}
                {console.log("User exist")}{Toastify("Email sent to registered email!")}
            </>

    }


    return (
        <>
            {isLoading ? <LoadingSpinner /> :

                <div className="container my-5 d-flex justify-content-center">
                    <div>
                        <h2 className='my-4'>Forgot Password</h2>
                        <form>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="input-field" placeholder="Registerd email" value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} required />
                            </div>
                            <div className='my-4'>
                                <button type="submit" className='btn btn-warning' onClick={handleForgotPassword}>Submit</button>
                            </div>
                        </form>
                        <h1>Underdevelopment</h1>
                    </div>
                    <ToastContainer />
                </div>
            }
        </>


    )
}
