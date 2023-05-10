import TicketInfo from "./TicketInfo";
import { ticketColorCode } from "@/ticket-code";
import { store } from "@/pages";
import { useEffect, useMemo, useState } from "react";
import { ticket_schema } from "@/ticket_col_format";

export default function TicketList( {ticketNum}:{ticketNum:number} )
{
    const [ticketData, setTicketData] = useState([{ticket_id: "", ticket_title: "", ticket_description: "", ticket_status: 0}] );
    const [reducer, setReducer] = useState( store.getState().projectsArrReducer );  
    

    store.subscribe(() => {
        setReducer(store.getState().projectsArrReducer);
    })

    useEffect(() => {
        var ticketArr:any = [];
        reducer.projectArr.forEach(proj => 
            {
                ticketArr = ticketArr.concat(proj.proj_tickets);

            })

        setTicketData( ticketArr.slice(0, ticketNum) );
    }, [reducer, ticketNum])


    return(
        <section className="flex flex-col py-2 px-2 darkgray--bg">
            <section className="px-3 py-2 gray--bg rounded-[8px]">
                <p className="font-bold text-xl mb-2">Latest {ticketNum} Tickets</p>
                
                {ticketData.map(ticket => 
                   
                    <TicketInfo 
                    key={ticket.ticket_title} 
                    id = {ticket.ticket_id}
                    title={ticket.ticket_title} 
                    description={ ticket.ticket_description}
                    status={ticket.ticket_status}

                    
                    />)}

                </section>
        </section>
    )

}