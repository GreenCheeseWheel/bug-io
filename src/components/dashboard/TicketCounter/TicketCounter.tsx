import {useEffect, useState} from "react"

import { store } from "@/pages";
import { ticketColorCode } from "@/ticket-code";
import Ticket from "../Ticket";

export default function TicketCounter()
{   
    const [newTickets, setNewTickets] = useState(0);
    const [triagedTickets, setTriagedTickets] = useState(0);
    const [resolvedTickets, setResolvedTickets] = useState(0);
    const [unresolvedTickets, setUnresolvedTickets] = useState(0);

    useEffect(() => {
        const reducer = store.getState().ticketReducer;
        setNewTickets(reducer.new_tickets);
        setTriagedTickets(reducer.triaged_tickets);
        setResolvedTickets(reducer.resolved_tickets);
        setUnresolvedTickets(reducer.unresolved_tickets);
    }, []);


    return(
        <div className="flex flex-row items-center justify-between px-2 text-white h-[100px] w-full darkgray--bg">
            <Ticket counter={newTickets} type="New" bgFlag={ ticketColorCode.new }/>
            <Ticket counter={triagedTickets} type="Triaged" bgFlag={ticketColorCode.triaged} />
            <Ticket counter={resolvedTickets} type="Resolved" bgFlag={ ticketColorCode.resolved } />
            <Ticket counter={unresolvedTickets} type="Unresolved" bgFlag={ticketColorCode.unresolved} />
        </div>
    );
}