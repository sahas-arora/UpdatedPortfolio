import React, { Component } from "react";
import { Doughnut, Pie } from "react-chartjs-2";

import "../../styles/Chart.css";

export default class Chart extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            chartData: {
                labels: ["Javascript", "C++", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "MySQL", "HTML", "CSS"],
                datasets: [
                    {
                        label: "Skills",
                        data: [20, 15, 25, 10, 5, 5, 5, 5, 5, 5],
                        backgroundColor: ["#49A9EA", "#36CAAB"],
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
            <div className="chart" 
                style={{ height: "500px", width: "800px"}}
                >
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