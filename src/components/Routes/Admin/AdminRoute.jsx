import React from "react";
import Widgets from "../../Widgets/Widgets";
import { Interpolar } from "../../Graph/Progress";
import Attandance from "../../Graph/Attandance";
import Profile from "../../Profile/Profile";
import Student from "../../Request/Get/Student";
import Teacher from "../../Request/Get/Teacher";
import Register from "../../Request/Post/Register";
import { useLocation } from "react-router-dom";






const AdminRoute = (clientData) => {

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
      <Widgets /> <div className='d-flex justify-content-between'><Interpolar /><Attandance /></div>
    </>
  }

  // Sidebar conditional rendering
  if (pathname === "/dashboard/admin/profile") {
    return <Profile
      typeOfUser={clientData.typeOfUser.toUpperCase()}
      name={clientData.firstName + " " + clientData.lastName}
      email={clientData.email}
      country={clientData.country}
    />
  } else if (pathname === "/dashboard/admin/student") {
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
  else if (pathname === "/dashboard/admin/teacher") {
    return <>

      <div className="row">
        <div class="col-sm-12 col-lg-12">
          <div class="card text-white" style={{ backgroundColor: 'orangered' }}>
            <div class="card-body">
              <h1 className='py-3 mb-0'><b>Teacher Panal</b></h1>
            </div>

          </div>
        </div>
      </div>
      <Teacher /></>
  }
  else if (pathname === "/dashboard/admin/register") {
    return <>

      <div className="row">
        <div class="col-sm-12 col-lg-12">
          <div class="card text-white" style={{ backgroundColor: 'orangered' }}>
            <div class="card-body">
              <h1 className='py-3 mb-0'><b><h1>Admin Registration Panal</h1></b></h1>
            </div>
          </div>
        </div>
      </div>

      <Register /></>
  }
}


export default AdminRoute;