import React from "react";
import { Linechart } from "../../Graph/Progress";
import { TeacherAttandance } from "../../Graph/Attandance";
import Profile from "../../Profile/Profile";
import Student from "../../Request/Get/Student";
import Underdev from "../../partials/Underdev";
import { useLocation } from "react-router-dom";


const TeacherRoute = (clientData) => {

  const location = useLocation();
  const pathname = location.pathname;

    if (pathname === "/dashboard") {
      return <>
        <div className="row">
          <div class="col-sm-12 col-lg-12">
            <div class="card text-white" style={{ backgroundColor: 'orangered' }}>
              <div class="card-body">
                <h1 className='py-3 mb-0'><b>Welcome {clientData.firstName + " " + clientData.lastName}</b></h1>
              </div>

            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between'><Linechart /> <TeacherAttandance /></div></>
    }

    // Sidebar conditional rendering
    if (pathname === "/dashboard/teacher/profile") {
      return <Profile
        typeOfUser={clientData.typeOfUser.toUpperCase()}
        name={clientData.firstName + " " + clientData.lastName}
        email={clientData.email}
        country={clientData.country}
      />
    }
    else if (pathname === "/dashboard/teacher/student") {
      return <>
      
      <div className="row">
          <div class="col-sm-12 col-lg-12">
            <div class="card text-white" style={{ backgroundColor: 'orangered' }}>
              <div class="card-body">
                <h1 className='py-3 mb-0'><b>Student Panal</b></h1>
              </div>

            </div>
          </div>
        </div>
      
      
      <Student /></>
    }
    else if (pathname === "/dashboard/teacher/complaint") {
      return <Underdev />
    }
    else if (pathname === "/dashboard/teacher/attandance") {
      return <Underdev />
    }
    else if (pathname === "/dashboard/teacher/salary") {
      return <Underdev />
    }
  }

export default TeacherRoute;


// import React from 'react'

// export default function TeacherRoute() {
//     const pathname = window.location.pathname;
//   return (
//     <div>
      
//     </div>
//   )
// }
