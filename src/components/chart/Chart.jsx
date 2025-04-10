import './chart.css';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', total: 2 },
    { name: 'Feb', total: 3 },
    { name: 'Mar', total: 2 },
    { name: 'Apr', total: 2 },
    { name: 'May', total: 4 },
    { name: 'Jun', total: 3 }, 
    { name: 'Jul', total: 5 }, 
    { name: 'Aug', total: 2 }, 
    { name: 'Sept', total: 5 }, 
    { name: 'Oct', total: 1 }, 
    { name: 'Nov', total: 2 }, 
    { name: 'Dec', total: 3 }, 
  ];

  
const Chart = ({aspect, title}) => {
    return (
        <div className='chart'>
            <div className='chart-title'>{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={200} data={data}
                    margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray"/>
                    <CartesianGrid strokeDasharray="3 3" className='chart-grid' />
                    <Tooltip />
                    <Area 
                        type="monotone" 
                        dataKey="total" 
                        stroke="#8884d8" 
                        fillOpacity={1} 
                        fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
