import React, { useEffect } from 'react'
import { useState } from 'react';
import TeacherList from '../../Lists/UserList';
import LoadingSpinner from '../../partials/LoadingSpinner';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toastify from '../../partials/Toastify';

export default function Teacher() {
    const [teacher, setTeacher] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const teacherAuthDetails = async () => {
        try {
            setIsLoading(true);
            const teacherResponse = await fetch("/admin/teacher", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            const responseRecived = await teacherResponse.json();
            if (!responseRecived.status === 200) {
                const error = new Error(teacherResponse.error);
                throw error;
            } else {
                // setTeacher(responseRecived);
                const Datafound = () => {
                    setTeacher(responseRecived);
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
                    Toastify("Teachers not found!");
                }
            }


        } catch (error) {
            console.log(error);
        }
    }


    const mapData = teacher.map((data) => {
        return (
            <TeacherList
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
        teacherAuthDetails()
    }, []);

    return (
        <>


            {isLoading ? <LoadingSpinner /> : mapData}

            <ToastContainer />
        </>
    )
}
