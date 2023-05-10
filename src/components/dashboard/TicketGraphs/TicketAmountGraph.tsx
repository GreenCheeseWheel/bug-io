import { ticketColorCode } from "@/ticket-code";
import { useEffect, useRef, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface ITicketAmount {
    total:number,

    newTickets:number,
    triaged: number,
    accepted: number,
    pending: number,
    resolved: number,
    unresolved: number,
}

interface ICustomLabel {
    cx:number, 
    cy:number, 
    midAngle:number, 
    innerRadius:number, 
    outerRadius:number, 
    percent:number, 
    index:number

}

export default function TicketAmountGraph( {total, newTickets, triaged, accepted, pending, resolved, unresolved}:ITicketAmount )
{
    const [graphRadius, setGraphRadius] = useState(50);

    var data = {
        total,
        newTickets,
        triaged,
        accepted,
        pending,
        resolved,
        unresolved,
    };

    var dataArr = [
        {name:"new", value: data.newTickets},
        {name:"triaged", value: data.triaged},
        {name:"accepted", value: data.accepted},
        {name:"pending", value: data.pending},
        {name:"resolved", value: data.resolved},
        {name:"unresolved", value: data.unresolved},
    ]

    const colorArr =  [   
        ticketColorCode.new,
        ticketColorCode.triaged,
        ticketColorCode.accepted,
        ticketColorCode.pending,
        ticketColorCode.resolved,
        ticketColorCode.unresolved
    ];
    
    useEffect(() => {
    
        window.addEventListener("resize", () => {
            const size = window.innerWidth;

            if(size >= 1024)
            {
                setGraphRadius(60);
            }
            else if(size >= 768)
            {
                setGraphRadius(50);
            }
            else 
            {
                setGraphRadius(30);
            }
            


        });
    
    }, [total]);


    return (
        <div className="flex flex-col justify-between w-[40%] h-[90%] gray--bg">
            <span className="justify-left font-bold">Issues Received</span>

            <div className="flex flex-row w-full justify-start items-center">
                <span className="font-bold text-4xl">{data.total}</span>
            </div>
            
            <div className="w-full">
                <ul className="flex flex-row justify-around flex-wrap w-full h-auto p-0 m-0">
                    <li className="graph--list"> <div className="graph--square bg-[#0000ff]"></div> <span>New</span> </li>
                    <li className="graph--list"> <div className="graph--square bg-[#de3163]"></div> <span>Triaged</span></li>
                    <li className="graph--list"> <div className="graph--square bg-[#de3163]"></div> <span>Accepted</span></li>
                    <li className="graph--list"> <div className="graph--square bg-[#ff10f0]"></div> <span>Pending</span></li>
                    <li className="graph--list"> <div className="graph--square bg-[#00ff00]"></div> <span>Resolved</span></li>
                    <li className="graph--list"> <div className="graph--square bg-[#ff0000]"></div> <span>Unresolved</span></li>
                </ul>
            </div>
            <ResponsiveContainer width="100%">
                <PieChart>
                    <Pie
                        data={dataArr}
                        cx="50%"
                        cy="50%"
                        dataKey="value" 
                        innerRadius={graphRadius >= 50 ? graphRadius -20 : graphRadius-15}
                        outerRadius={graphRadius}
                    >
                        {
                        dataArr.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={ colorArr[index] } />
                        ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}