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
import { useQuery } from "@tanstack/react-query"
import { readDone } from '../../../utils/doneApi';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
 

  const ChartDone: React.FC<{}> = () => {

    const { data: done } = useQuery({
        queryKey: ["done"],
        queryFn: readDone,
        refetchInterval: 1000
    })
    const List= [done]
    let Match = List.flat().map((props)=>{
        return props?.assignedName
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
    console.log("Lables",done)
    const [data, setData] = useState({
      labels: ALLobject,
      datasets: [{
        label: 'Most Done Task',
        data: AllObject,
        backgroundColor: [
          'rgb(25, 154, 102)'
        ],
        barPercentage: 0.3,
        borderColor: [
            'rgb(25, 154, 102)'
        ],
        borderWidth: 1
      }]
    });
  
    return <Bar data={data} />;
  };
  export  default ChartDone


