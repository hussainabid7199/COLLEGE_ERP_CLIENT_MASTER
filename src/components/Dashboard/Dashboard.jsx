import React, { useState, useEffect } from 'react'
import { SuperAdmin, SuperStudent, SuperTeacher } from '../partials/Navbar';
import Header from '../partials/Header';
import { useNavigate } from 'react-router-dom';
import AdminRoute from '../Routes/Admin/AdminRoute';
import TeacherRoute from '../Routes/Admin/TeacherRoute';
import StudentRoute from '../Routes/Admin/StudentRoute';




export default function Dashboard() {

  const navigate = useNavigate();
  const [clientData, setClientData] = useState([]);
  
  const usersDasboard = async () => {
    try {
      const response = await fetch("/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await response.json();
      console.log(data);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      } else {
        setClientData(data);
      }


    } catch (err) {
      console.log(err);
      navigate("/");
    }

  }


  const panalHandler = () => {
    if (clientData.typeOfUser === "admin") {
      return (
        <>{AdminRoute(clientData)}</>
      )
    }
    else if (clientData.typeOfUser === "teacher") {
      return (
        <>{TeacherRoute(clientData)}</>
      )
    }
    else if (clientData.typeOfUser === "student") {
      return (
        <>{StudentRoute(clientData)}</>
      )
    }

  }


  useEffect(() => {
    usersDasboard();
  }, []);

  return (
    <div>
      <Header />

      {/* Sidebar Conditional */}
      {clientData.typeOfUser === "admin" ? <SuperAdmin /> : clientData.typeOfUser === "teacher" ? <SuperTeacher /> : clientData.typeOfUser === "student" ? <SuperStudent /> : null}
      {/* Sidebar Conditional */}


      <div id="right-panel" className="right-panel">
        <div className="content">
          <div className="animated fadeIn container"></div>
          {panalHandler()}
        </div>
      </div>
    </div>
  )
}
