import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";



export default function Progress() {
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Progress",
                backgroundColor: "orange",
                borderColor: "rgb(123, 49, 152)",
                data: [0, 10, 5, 2, 10, 20, 25, 74, 24, 35, 39, 12],
            },
        ],
    };

    const progressChart = () => {
        return (
            <>
                {/* Progress */}
                <div class="card bg-dark col-xxl-8 col-md-8 col-sm-12">
                    <div class="card-body">
                        <div style={{ height: "100%", width: "100%" }}>
                            <Bar data={data} />
                        </div>
                    </div>
                </div>

                {/* Progress */}
            </>
        )
    }

    return (
        <>

            {progressChart()}


        </>
    )
}




const Linechart = () => {
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Student Progress",
                backgroundColor: "red",
                borderColor: "white",
                data: [0, 10, 5, 2, 10, 20, 25, 64, 24, 25, 29, 12],
            },
        ],
    };

    const LineChart = () => {
        return (
            <>
                {/* Progress */}
                <div class="card col-xxl-8 col-md-8 col-sm-12" style={{backgroundColor: "black"}}>
                    <div class="card-body">
                        <div style={{ height: "100%", width: "100%" }}>
                            <Line data={data} />
                        </div>
                    </div>
                </div>

                {/* Progress */}
            </>
        )
    }

    return (
        <>

            {LineChart()}


        </>
    )
}


const Interpolar = () => {
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const datapoints = [5, 20, 30, 28, 40, 50, 35, 30, 50, 55, 50];

    // const DATA_COUNT = 12;
    // for (let i = 0; i < DATA_COUNT; ++i) {
    //     labels.push(i.toString());
    // }
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Student Progress",
                backgroundColor: "red",
                borderColor: "white",
                data: [0, 10, 5, 2, 10, 20, 25, 50],
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
                responsive: true,
            },
            {
                label: 'Teacher Progress',
                data: datapoints,
                borderColor: "Green",
                backgroundColor: "yellow",
                fill: false,
                responsive: true,
            }
        ],
    };

    const InterpolarChart = () => {
        return (
            <>
                {/* Progress */}
                <div class="card col-xxl-8 col-md-8 col-sm-12" style={{ backgroundColor: "#000000" }}>
                    <div class="card-body">
                        <div style={{ height: "100%", width: "100%" }}>
                            <Line data={data} />
                        </div>
                    </div>
                </div>

                {/* Progress */}
            </>
        )
    }

    return (
        <>

            {InterpolarChart()}


        </>
    )
}

export { Linechart, Interpolar }
