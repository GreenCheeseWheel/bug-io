import { ticketColorCode } from "@/ticket-code";
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

export default function TicketTypeGraph({ new: newTickets, triaged, accepted, pending, resolved, unresolved }:IDataStruct )
{
    var canvasElement = useRef<HTMLCanvasElement>(null);

    var data = {
        newTickets,
        triaged,
        accepted,
        pending,
        resolved,
        unresolved,
        
    };

    const dataArr = [
        {name: "new", new_amount: data.newTickets},
        {name: "triaged", triaged_amount: data.triaged},
        {name: "accepted", accepted_amount: data.accepted},
        {name: "pending", pending_amount: data.pending},
        {name: "resolved", resolved_amount: data.resolved},
        {name: "unresolved", unresolved_amount: data.unresolved},
    ]
   

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
                    <Bar dataKey="new_amount" fill={ticketColorCode.new}/>
                    <Bar dataKey="triaged_amount" fill={ ticketColorCode.triaged }/>
                    <Bar dataKey="accepted_amount" fill={ ticketColorCode.accepted }/>
                    <Bar dataKey="pending_amount" fill={ticketColorCode.pending }/>
                    <Bar dataKey="resolved_amount" fill={ticketColorCode.resolved }/>
                    <Bar dataKey="unresolved_amount" fill={ticketColorCode.unresolved }/>

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}