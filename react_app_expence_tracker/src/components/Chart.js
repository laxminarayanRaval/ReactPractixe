import React from 'react'

import { Bar } from 'react-chartjs-2'

import { Chart as ChartJS ,BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { Typography } from '@mui/material';


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Expense Bar Char'
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


function Chart(props) {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    
    const proData = labels.map(e => props.data.filter(ele => e === ele.date)
        .map(ele => ele.amount)
        .reduce((prev, curr) => prev + curr,0)
    );

    const data = {
        labels,
        datasets: [
          {
            label: props.label,
            data: proData,
            backgroundColor: props.backgroundColor,
          },
        ],
      };
  
    console.log(...proData);
    
    console.log("chart", data);
    
  return (
    <div>
        <Typography variant="h5" component="b">
            Chart {props.label}
        </Typography><br />
        <Bar height={props.height} width={props.width} options={options} data={data} />
    </div>
  )
}

export default Chart