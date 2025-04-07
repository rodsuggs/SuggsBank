"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts }) => {
  
    const data = {
        datasets: [
            {
                label : 'Banks',
                data: [2385851, 1919242, 5156984],
                backgroundColor: ['#0747b6','#ADD8E6' , '#D3D3D3']
            }
        ],
        labels : ['Bank 1', 'Bank 2', 'Bank3']
    }
    return <Doughnut 
    data = {data}
    />
}

export default DoughnutChart