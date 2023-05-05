import { useEffect, useRef } from "react";
import { ResponsiveContainer, Bar, CartesianGrid, XAxis, YAxis, Tooltip,BarChart } from "recharts";
// This is the chart's data structure/types
interface IDataStruct {
    new:number,
    triaged: number,
    accepted: number,
    pending: number,
    resolved: number,
    unresolved: number,
}

export default function TicketTypeGraph()
{
    var canvasElement = useRef<HTMLCanvasElement>(null);

    var data:IDataStruct = {
        new: 2,
        triaged: 3,
        accepted: 1,
        pending: 2,
        resolved: 1,
        unresolved: 2
    };

    const dataArr = [
        {name: "new", new_amount: data.new},
        {name: "triaged", triaged_amount: data.triaged},
        {name: "accepted", accepted_amount: data.accepted},
        {name: "pending", pending_amount: data.pending},
        {name: "resolved", resolved_amount: data.resolved},
        {name: "unresolved", unresolved_amount: data.unresolved},
    ]

    
    const barColor = ["#0000ff", "#de3163", "#de3163", "#ff10f0", "#00ff00", "#ff0000"]
   

    return (
        <div className="flex flex-col justify-between w-[45%] h-[90%] gray--bg">
            <span className="justify-left font-bold">Overall Ticket Type</span>
            
            <div className="flex w-full justify-center items-center">
                <span>Overall issues</span>
            </div>
            
            <ResponsiveContainer width="100%">
                <BarChart
                    data={dataArr} 
                    cx="50%"
                    cy="50%"  
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="new_amount" fill={barColor[0]}/>
                    <Bar dataKey="triaged_amount" fill={barColor[1]}/>
                    <Bar dataKey="accepted_amount" fill={barColor[2]}/>
                    <Bar dataKey="pending_amount" fill={barColor[3]}/>
                    <Bar dataKey="resolved_amount" fill={barColor[4]}/>
                    <Bar dataKey="unresolved_amount" fill={barColor[5]}/>

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}