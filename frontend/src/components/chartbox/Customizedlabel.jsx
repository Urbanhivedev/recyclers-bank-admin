import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export default function CustomizedLabel (props){

    return (
        <text x={props.x} y={props.y} dy={18} dx={7} fill={props.stroke} fontSize={10} textAnchor="middle">
          {props.value}
        </text>
      );

}