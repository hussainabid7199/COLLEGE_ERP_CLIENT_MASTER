import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toastify from '../../partials/Toastify';




export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: "", lastName: "", email: "", phone: "", country: "", password: "", cpassword: "", department: "", designation: "", typeOfUser: ""
    });

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value

        setData({ ...data, [name]: value });
    }

    const Input = async (event) => {
        event.preventDefault();
        const { firstName, lastName, department, email, phone, country, password, cpassword, designation, typeOfUser } = data;

        const registerData = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, department, email, phone, country, password, cpassword, designation, typeOfUser
            })
        })
        const response = await registerData.json();
        registerData.status === 422 || !response ?
            <>
                {console.log("Invalid registration - try again!")}
                {Toastify("Invalid registration - try again!")}
            </>
            :
            <>  {Toastify("Registration successfull")}
                {console.log("Registration successfull")}
                {navigate("/dashboard/admin/register")}
              
            </>

    }


    const onReset = (e) => {
        e.preventDefault();
        setData({ firstName: " ", lastName: " ", department: " ", email: " ", phone: " ", country: " ", password: " ", cpassword: " ", designation: " ", typeOfUser: " " });
    }

    return (
        <>


            <div className="row">
                <div class="col-sm-12 col-lg-12">
                    <div class="card text-white" style={{ backgroundColor: "black" }}>
                        <div class="card-body">
                            <div className='container'>
                                <form class="row g-3" method='POST'>
                                    <div class="col-md-6">
                                        <label htmlFor="First Name">First Name</label>
                                        <input type="text" className="form-control" name='firstName' id='firstName' required value={data.firstName} onChange={handleInput} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="Last Name">Last Name</label>
                                        <input type="text" className="form-control" required name='lastName' value={data.lastName} onChange={handleInput} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="Email">Email</label>
                                        <input type="email" className="input-field form-control" required name='email' value={data.email} onChange={handleInput} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="Password">Password</label>
                                        <input type="password" className="input-field form-control" placeholder='******' required name="password" value={data.password} onChange={handleInput} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="Confirm Password">Confirm Password</label>
                                        <input type="text" className="input-field form-control" required name="cpassword" value={data.cpassword} onChange={handleInput} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="Phone">Phone</label>
                                        <input type="text" className="input-field form-control" required name="phone" value={data.phone} onChange={handleInput} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="Country">Country</label>
                                        <input type="text" className="input-field form-control" required name='country' value={data.country} onChange={handleInput} />
                                    </div>

                                    <div class="col-md-6">
                                        <label htmlFor="Department">Department</label>
                                        <select type="text" className="input-field form-control" required name='department' value={data.department} onChange={handleInput}>
                                            <option>----Select Department----</option>
                                            <option value="science">Science</option>
                                            <option value="computerscience">Computer Science</option>
                                            <option value="medical">Medical</option>
                                            <option value="business">Business</option>
                                            <option value="research">Research</option>
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label htmlFor="Designation">Designation</label>
                                        <select type="text" className="input-field form-control" name='designation' required value={data.designation} onChange={handleInput}>
                                            <option>----Select Designation----</option>
                                            <option value="srprofessor">Sr. Professor</option>
                                            <option value="jrprofessor">Jr. Professor</option>
                                            <option value="student">Student</option>
                                        </select>
                                    </div>


                                    <div class="col-md-6">
                                        <label htmlFor="User Type">User Type</label>
                                        <select type="text" className="input-field form-control" name='typeOfUser' required value={data.typeOfUser.toLowerCase()} onChange={handleInput}>
                                            <option>----Select User Type----</option>
                                            <option value="admin">Admin</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="student">Student</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <button type='submit' className='btn btn-primary px-5 my-3' onClick={Input}>Submit</button>
                                        <button className='btn btn-danger px-5 mx-5 my-3' onClick={onReset}>Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )

}





