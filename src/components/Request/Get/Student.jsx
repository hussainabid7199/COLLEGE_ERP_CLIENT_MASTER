import React, { useEffect } from 'react'
import { useState } from 'react';
import Studentlist from '../../Lists/UserList';
import LoadingSpinner from '../../partials/LoadingSpinner';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toastify from '../../partials/Toastify';

export default function Student() {
    const [student, setStudent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const studentAuthDetails = async () => {
        try {
            setIsLoading(true);
            const studentResponse = await fetch("/admin/student", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            const responseRecived = await studentResponse.json();
            if (!responseRecived.status === 200) {
                const error = new Error(studentResponse.error);
                throw error;
            } else {
                // setStudent(responseRecived);
                // const Loading = () => {
                //     setIsLoading(false);
                // }
                // setTimeout(Loading, 1000);
                const Datafound = () => {
                    setStudent(responseRecived);
                    const Loading = () => {
                        setIsLoading(false);
                        Toastify("Data Recived");
                    }
                    setTimeout(Loading, 1000);
                }
                const dataLength = responseRecived.length;
                if (dataLength > 0) {
                    Datafound()
                } else {
                    Toastify("Student not found!");
                }
            }



        } catch (error) {
            console.log(error);
        }
    }


    const mapData = student.map((data) => {
        return (
            <Studentlist
                key={data._id}
                _id={data._id}
                firstName={data.firstName.toUpperCase()}
                lastName={data.lastName.toUpperCase()}
                email={data.email}
                phone={data.phone}
                department={data.department}
            />
        )
    })


    useEffect(() => {
        studentAuthDetails()
    }, []);

    return (
        <>

            {isLoading ? <LoadingSpinner /> : mapData}

            <ToastContainer />
        </>
    )
}
