import React, { Component } from "react";
import { Doughnut, Pie } from "react-chartjs-2";

import "../../styles/Chart.css";

export default class Chart extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            chartData: {
                labels: ["Javascript","ReactJS", "React-Native", "HTML", "CSS", "NodeJS", "ExpressJS", "MongoDB", "MySQL"],
                datasets: [
                    {
                        label: "Skills",
                        data: [20, 30, 15, 15, 5, 5, 5, 2.5, 2.5],
                        backgroundColor: ["#49A9EA", "#36CAAB", "#fc6444", "#fb806f", "#2464b4", "#9b63a4", "#9c7eb8", "#4c344c", "#4c344c"],
                        borderWidth: 0.5,
                        borderColor: "#777",
                        hoverBorderWidth: 2,
                        hoverBorderColor: "#000"
                    }
                ]
            }
        }
        // this.renderChart = this.renderChart.bind(this);
    }


    // renderChart() {
    //     let myChart = document.getElementById("ProjectsChart").getContext('2d');
    //     let labels1 = ["Javascript", "C++", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "MySQL", "HTML", "CSS"];

    //     let chart1 = new Chart(myChart, {
    //         type: "doughnut",
    //         data: {
    //             labels: labels1,
    //             datasets: [{
    //                 data: data1,
    //                 backgroundColor: colors1
    //             }]
    //         },
    //         options: {
    //             title: {
    //                 text: "I hope you like doughnuts...",
    //                 display: true
    //             }
    //         }
    //     });
    // }

    render() {
        return(
            <div className="chart">
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: "Skills",
                            fontSize: 30,
                            maintainAspectRatio: false,
                            responsive: true,
                            responsiveAnimationDuration: 2000,
                        
                        },
                        legend: {
                            display: true,
                            position: "right"
                        }
                    }}
                />
            </div>
        )
    }
}