import React from 'react';
import { Link } from 'react-router-dom';

export default function Underdev() {

    const pathname = window.location.pathname;
    const linkRender = ()=>{
        if(!pathname === "/dashboard"){
          return  <Link to={"/"} className="btn">Go Back</Link>
        }else{
          return  <Link to={"/dashboard"} className="btn">Go Back</Link> 
        }
    }

    return (
        <div className="development container col-xxl-12 col-md-12 col-sm-12 d-flex justify-content-center">
            <div className="box">
                <h5>Under Development</h5>
                <p>We're currently working on this page and it will be up soon. In the meantime, please check back later.</p>
                {linkRender()}
            </div>
        </div>
    )
}
