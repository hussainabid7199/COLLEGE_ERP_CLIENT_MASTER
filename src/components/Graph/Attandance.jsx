import React from 'react'
import { Doughnut, Pie } from "react-chartjs-2";

export default function Attandance() {
    const data = {
        labels: [
            'Pre',
            'Abs',
            'Medical L',
            'Other'
        ],
        datasets: [{
            label: 'Teacher',
            data: [60, 20, 10, 2],
            backgroundColor: [
                '#F9E002',
                '#F51B64',
                "#DB491F",
                "#750D30"
            ],
            hoverOffset: 4
        }
    ]
    };

    return (
        <>
            {/* Progress */}
            <div class="card col-xxl-4 mx-1" style={{backgroundColor: "black"}}>
                <div class="card-body">
                    <div style={{ height: "100%", width: "100%" }}>
                        <Pie data={data} />
                    </div>
                </div>
            </div>

            {/* Progress */}
        </>
    )
}


const TeacherAttandance =()=> {
    const data = {
        labels: [
            'Pre',
            'Abs',
            'Med'
        ],
        datasets: [{
            label: ["Present", "Absent", "Medical Leave"],
            data: [100, 10, 5],
            backgroundColor: [
                '#E16D0E',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <>
            {/* Progress */}
            <div class="card col-xxl-4 mx-1" style={{backgroundColor: "#00032C"}}>
                <div class="card-body">
                    <div style={{ height: "100%", width: "100%" }}>
                        <Doughnut data={data} />
                    </div>
                </div>
            </div>

            {/* Progress */}
        </>
    )
}


export {TeacherAttandance}