import React from 'react';
import './chartbox.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Actualchart from './Actualchart';





export default function Chartbox (){

    return(
         <>
         <div className="chartboxContainer">
         <h6 className="chartTitle">Total Portfolio Valuation</h6>
          <h1> $71,450</h1>
         <Actualchart/>
        
         </div>
         
         
         </>
     )

}