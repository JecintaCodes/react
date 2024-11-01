import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
   import { useState } from 'react';
  import { Bar } from 'react-chartjs-2';
import { readProgress } from '../../../utils/progressAPI';
import { useQuery } from "@tanstack/react-query"
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
 

  const ChartPage: React.FC<{}> = () => {
    const { data: progress } = useQuery({
        queryKey: ["progress"],
        queryFn: readProgress,
        refetchInterval: 3000
    })
    const List= [progress]
    let Match = List.flat().map((props)=>{
        return props?.name
    })
    // console.log(Match)
    
    const arr = Match;
    const counts:any = {};
    
    const labels = Match;
for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

let AllObject = Object.values(counts);
let ALLobject = Object.keys(counts)
console.log("Name",ALLobject)
console.log("Values",AllObject)

    // Match.some((props)=>{


    // })
    console.log("Lables",progress)
    const [data, setData] = useState({
      labels: ALLobject,
      datasets: [{
        label: 'Most Assigned Task',
        data: AllObject,
        backgroundColor: [
          'rgb(153, 102, 255)'
        ],
        borderColor: [
          'rgb(153, 102, 255)'
        ],
        borderWidth: 1
      }]
    });
  
    return <Bar data={data} />;
  };
  export  default ChartPage

// function populateChart(data: ChartData[]): void {
//   const labels = data.map(item => item.label);
//   const values = data.map(item => item.value);

//   const ctx = document.getElementById("myChart") as HTMLCanvasElement;
//   const myChart = new Chart(ctx, {
//     type: "bar", // Change chart type as needed
//     data: {
//       labels: labels,
//       datasets: [{
//         label: "Data from Database",
//         data: values,
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       }]
//     },
//     options: {
//       // Add any additional chart options here
//     }
//   });
// }

// Call the function with your data
// populateChart(dataFromDatabase);

// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { readProgress } from '../../../utils/progressAPI';
// import { useQuery } from "@tanstack/react-query"

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ChartPage: React.FC<{}> = () => {
//   const { data: progress } = useQuery({
//     queryKey: ["progress"],
//     queryFn: readProgress,
//     refetchInterval: 3000
//   });

//   useEffect(() => {
//     // Aggregate the data from MongoDB to fix duplicate labels and sum the values
//     if (progress) {
//       const aggregatedData = aggregateData(progress);
//       const labels = aggregatedData.map(item => item.label);
//       const values = aggregatedData.map(item => item.value);
//       setData({
//         labels: labels,
//         datasets: [{
//           label: 'Expenses by Month',
//           data: values,
//           backgroundColor: ['rgb(153, 102, 255)'],
//           borderColor: ['rgb(153, 102, 255)'],
//           borderWidth: 1
//         }]
//       });
//     }
//   }, [progress]);

//   // Function to aggregate data by label (summing the values for duplicate labels)
//   function aggregateData(data:any) {
//     const aggregatedData = {};

//     data.forEach((item:any) => {
//       const label = item.name;
//       const value = item.value || 0;

//       if (aggregatedData[label]) {
//         aggregatedData[label] += value;
//       } else {
//         aggregatedData[label] = value;
//       }
//     });

//     const aggregatedChartData = [];
//     for (const label in aggregatedData) {
//       aggregatedChartData.push({ label: label, value: aggregatedData[label] });
//     }

//     return aggregatedChartData;
//   }

//   const [data, setData] = useState({
//     labels: [],
//     datasets: [{
//       label: 'Expenses by Month',
//       data: [],
//       backgroundColor: ['rgb(153, 102, 255)'],
//       borderColor: ['rgb(153, 102, 255)'],
//       borderWidth: 1
//     }]
//   });

//   return <Bar data={data} />;
// };

// export default ChartPage;
