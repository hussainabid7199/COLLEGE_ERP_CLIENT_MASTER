
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import LoadingSpinner from '../partials/LoadingSpinner';
// import ImageTopDesign from "../../images/login/topdesign.png";
// import MidDesign2 from "../../images/login/mid-design2.png";
// import BottomImg from "../../images/login/bottomimg.png";
// import MidDesign from "../../images/login/mid-designe1.png";
import Background from "../../../images/login/background.png";
import Logo from "../../../images/login/logo1.png";
import EmailSign from "../../../images/icon/EmailSign.png";
import Lock from "../../../images/icon/Lock.png";
import { toast } from 'react-toastify';
// import Hide from "../../../images/icon/hide.png";
// import Eye from "../../../images/icon/eye.png";






export default function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState();

  const handleLoginUser = async (e) => {
    e.preventDefault();
    const loginData = await fetch("/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })

    const loginSubmittedData = await loginData.json();
    console.log(loginSubmittedData)
    if (loginData.status === 400 || !loginSubmittedData) {
      window.alert("Invalid Credential");
      console.log("Invalid Credential");
    }
    else {
      navigate("/dashboard");
      console.log("Login Successfull");
      toast.success("Login Successfull!");
    }
  }


  // const myfirstFunction = () => {
  //   const x = document.getElementById("myfirstInput");
  //   const y = document.getElementById("hide1");
  //   const z = document.getElementById("hide2");


  //   if (x.type === 'password') {

  //     x.type = "text";
  //     y.style.display = "block";
  //     z.style.display = "none";
  //   }
  //   else {
  //     x.type = "password";
  //     y.style.display = "none";
  //     z.style.display = "block";
  //   }
  // }

  return (
    <>
      <section>
        <div className='LoginMain login-container'>
          <div id="Background" className="Bg-img">
            {/* <img src={ImageTopDesign} className="topimg" alt="" />
          <img src={BottomImg} className="bottomimg" alt="" />
          <img src={MidDesign2} className="mid-img-2" alt="" />
          <img src={MidDesign} className="mid-img-1" alt="" /> */}
            <img src={Background} className="mid-img-1" alt="" />
          </div>
          <div className='d-flex justify-content-center container'>
            <div id="login-page" className="login-box">
              <div className="logo">
                <img src={Logo} alt="" />

              </div>

              <form id="login" className="input-group" method="post">
                <div className="input-box">
                  <img src={EmailSign} className alt="" />
                  <input type="email" className="input-field" placeholder="Registerd email" value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }} required />
                </div>
                <div className="input-box">
                  <img src={Lock} alt="" />
                  <input type="password" className="input-field" id="myfirstInput" required
                    name="password-login"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }} 
                      
                    />
                </div>

                {/* <img src={Hide} onclick={myfirstFunction()} id="hide1" className="hide-icon" alt="" />
                <img src={Eye} onclick={myfirstFunction()} id="hide2" className="hide-icon" alt="" /> */}



                <Link to={"/forgotpassword"}> <span className="forgot-password">Forgot Password</span>  </Link>
                <div className='mt-5 container d-flex justify-content-center'>
                  <button onClick={handleLoginUser} type="submit" className="submit-btn">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}







