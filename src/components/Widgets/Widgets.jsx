import React from 'react'

export default function Widgets() {






    return (
        <>
    
                        {/* <!-- Widgets  --> */}
                        <div className="row">
                            <div class="col-sm-6 col-lg-4">
                                <div class="card text-white" style={{backgroundColor: "#FF1F9A"}}>
                                    <div class="card-body">
                                        <div className="stat-widget-five">
                                            <div className="stat-icon dib flat-color">
                                                <i className="pe-7s-users" style={{ fontSize: "65px" }}></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <h3 class="mb-0 fw-r">
                                                        <span class="count float-right">55</span>
                                                        <span>%</span>
                                                    </h3>
                                                    <p class="text-light mt-1 m-0">Attandance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div class="col-sm-6 col-lg-4">
                                <div class="card text-white bg-primary">
                                    <div class="card-body">
                                        <div className="stat-widget-five">
                                            <div className="stat-icon dib flat-color">
                                                <i className="pe-7s-cash" style={{ fontSize: "65px" }}></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <h3 class="mb-0 fw-r">
                                                        <span class="count float-right">85</span>
                                                        <span>%</span>
                                                    </h3>
                                                    <p class="text-light mt-1 m-0">Fee Paid</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div class="col-sm-6 col-lg-4">
                                <div class="card text-white bg-success">
                                    <div class="card-body">
                                        <div className="stat-widget-five">
                                            <div className="stat-icon dib flat-color">
                                                <i className="pe-7s-browser" style={{ fontSize: "65px" }}></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <h3 class="mb-0 fw-r">
                                                        <span class="count float-right">85</span>
                                                        <span>%</span>
                                                    </h3>
                                                    <p class="text-light mt-1 m-0">Result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- /Widgets --> */}
        </>
    )
}
