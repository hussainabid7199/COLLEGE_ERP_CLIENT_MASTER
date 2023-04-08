import React from "react";
import Progress from "../../Graph/Progress";
import Attandance from "../../Graph/Attandance";
import Profile from "../../Profile/Profile";
import Underdev from "../../partials/Underdev";
import Widgets from "../../Widgets/Widgets";
import { useLocation } from "react-router-dom";





const StudentRoute = (clientData) => {

    const location = useLocation();
    const pathname = location.pathname;


    if (pathname === "/dashboard") {
        return <><div className="row">
            <div class="col-sm-12 col-lg-12">
                <div class="card text-white" style={{ backgroundColor: 'orangered' }}>
                    <div class="card-body">
                        <h1 className='py-3 mb-0'><b>Welcome {clientData.firstName + " " + clientData.lastName}</b></h1>
                    </div>

                </div>
            </div>
        </div> <Widgets /> <div className='d-flex justify-content-between'><Progress /> <Attandance /></div></>
    }

    // Sidebar conditional rendering
    if (pathname === "/dashboard/student/profile") {
        return <Profile
            typeOfUser={clientData.typeOfUser.toUpperCase()}
            name={clientData.firstName + " " + clientData.lastName}
            email={clientData.email}
            country={clientData.country}
        />
    }
    else if (pathname === "/dashboard/student/complaint") {
        return <Underdev />
    }
    else if (pathname === "/dashboard/student/attandance") {
        return <Underdev />
    }
    else if (pathname === "/dashboard/student/fee") {
        return <Underdev />
    }
}


export default StudentRoute