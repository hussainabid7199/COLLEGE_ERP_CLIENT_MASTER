import React from 'react'

export default function Studentlist(props) {
    return (
        <>
            
            <div className="row">
                <div class="col-sm-12 col-lg-12 d-flex justify-content-center mx-0 my-0">
                    <div className='d-flex'>
                        <div class="col-md-2 my-1">
                            <input type="text" className="form-control" name='firstName' id='firstName' required value={props._id} />
                        </div>
                        <div class="col-md-2 mx-2 my-1">
                            <input type="text" className="form-control" name='firstName' id='firstName' required value={props.firstName + " " + props.lastName} />
                        </div>
                        <div class="col-md-3 mx-1 my-1">
                            <input type="email" className=" form-control" required name='email' value={props.email} />
                        </div>
                        <div class="col-md-2 mx-1 my-1">
                            <input type="text" className=" form-control" required name="password" value={props.phone} />
                        </div>
                        <div class="col-md-2 my-1">
                            <input type="text" className="form-control" required name="cpassword" value={props.department} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const TeacherList = (props) => {
    return (
        <div className="row">
                <div class="col-sm-12 col-lg-12 d-flex justify-content-center mx-0 my-0">
                    <div className='d-flex'>
                        <div class="col-md-2 my-1">
                            <input type="text" className="form-control" name='firstName' id='firstName' required value={props._id} />
                        </div>
                        <div class="col-md-2 mx-2 my-1">
                            <input type="text" className="form-control" name='firstName' id='firstName' required value={props.firstName + " " + props.lastName} />
                        </div>
                        <div class="col-md-3 mx-1 my-1">
                            <input type="email" className=" form-control" required name='email' value={props.email} />
                        </div>
                        <div class="col-md-2 mx-1 my-1">
                            <input type="text" className=" form-control" required name="password" value={props.phone} />
                        </div>
                        <div class="col-md-2 my-1">
                            <input type="text" className="form-control" required name="cpassword" value={props.department} />
                        </div>
                    </div>
                </div>
            </div>

    )
}

export { TeacherList };
