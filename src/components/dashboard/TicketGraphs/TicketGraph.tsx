import { useEffect, useState } from "react";

import { store } from "@/pages";
import TicketAmountGraph from "./TicketAmountGraph";
import TicketTypeGraph from "./TicketTypeGraph";

export default function TicketGraph()
{   
    const [totalTickets, setTotalTickets] = useState(0);
    const[newTickets, setNewTickets] = useState(0);
    const[triagedTickets, setTriagedTickets] = useState(0);
    const[acceptedTickets, setAcceptedTickets] = useState(0);
    const[pendingTickets, setPendingTickets] = useState(0);
    const[resolvedTickets, setResolvedTickets] = useState(0);
    const[unresolvedTickets, setUnresolvedTickets] = useState(0);

    useEffect(() => {
        const reducer = store.getState().ticketReducer;

        setTotalTickets(reducer.ticket_arr.length);
        setNewTickets(reducer.new_tickets);
        setTriagedTickets(reducer.triaged_tickets);
        setAcceptedTickets(reducer.accepted_tickets);
        setPendingTickets(reducer.pending_tickets);
        setResolvedTickets(reducer.resolved_tickets);
        setUnresolvedTickets(reducer.unresolved_tickets);

    }, []);

    return (
        <article className="flex flex-row justify-around items-center h-[50vh] darkgray--bg">
            <TicketTypeGraph 
                new={newTickets} 
                triaged={triagedTickets} 
                accepted={acceptedTickets} 
                pending={pendingTickets}
                resolved={resolvedTickets}
                unresolved={unresolvedTickets}
                />

            <TicketAmountGraph 
                total={totalTickets}
                newTickets={newTickets}
                triaged={triagedTickets} 
                accepted={acceptedTickets} 
                pending={pendingTickets}
                resolved={resolvedTickets}
                unresolved={unresolvedTickets}
                />
        </article>
    )
}