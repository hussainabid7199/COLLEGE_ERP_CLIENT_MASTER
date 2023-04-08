import React from 'react'
import admin from "../../images/admin.jpg";

export default function Profile(props) {
    return (
        <>
           
                    <div className="d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title mb-3">{props.typeOfUser}</strong>
                                </div>
                                <div className="card-body">
                                    <div className="mx-auto d-block">
                                        <img className="rounded-circle mx-auto d-block" src={admin} alt="avatar" />
                                        <h5 className="text-sm-center mt-2 mb-1">{props.name}</h5>
                                        <div className="location text-sm-center"><i className="fa fa-envelope"></i> {props.email}</div>
                                        <div className="location text-sm-center"><i className="fa fa-map-marker"></i> {props.country}</div>
                                    </div>
                                    <hr />
                                    <div className="card-text text-sm-center">
                                        <a href="/"><i className="fa fa-facebook pr-1"></i></a>
                                        <a href="/"><i className="fa fa-twitter pr-1"></i></a>
                                        <a href="/"><i className="fa fa-linkedin pr-1"></i></a>
                                        <a href="/"><i className="fa fa-pinterest pr-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
        </>
    )
}
