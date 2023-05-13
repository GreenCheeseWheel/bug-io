import TicketInfo from "./TicketInfo";
import { store } from "@/pages";
import { useEffect, useMemo, useState } from "react";

interface ITicketListFilters {

    ticketTitleFilter?:string,
    ticketNum:number,

}

export default function TicketList( { ticketTitleFilter, ticketNum }:ITicketListFilters )
{
    const [ticketData, setTicketData] = useState([{ticket_id: "", ticket_title: "", ticket_description: "", ticket_status: 0}] );
    const [reducer, setReducer] = useState( store.getState().projectsArrReducer );  
    

    store.subscribe(() => {
        setReducer(store.getState().projectsArrReducer);
    })

    useEffect(() => {
        var ticketArr:any = [];

        // Ticker arr is an array of ticket arrays with this. We flatten it and pass it as non-nested
        ticketArr = reducer.projectArr.map(proj => proj.proj_tickets.filter(ticket => ticket.ticket_title.includes(""+ticketTitleFilter)));        

        ticketArr = ticketArr.flat(1);

        setTicketData( ticketArr );
    }, [reducer, ticketNum, ticketTitleFilter])


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