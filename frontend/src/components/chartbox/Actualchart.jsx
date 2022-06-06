import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '0',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Year 1',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Year 2',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Year 3',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Year 4',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Year 5',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Year 6',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



export default function Actualchart (){

    return(
         <>
         
         
         <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
          { <XAxis datakey="name" stroke="#5550bd"/>}
         { /* <YAxis type="number" /*domain={[0, 100000]} *//*/>*/}
            <Line type="monotone" dataKey="uv" stroke="#5550bd" />
          </LineChart>
         </ResponsiveContainer>
         

       
         
         
         </>
     )

}