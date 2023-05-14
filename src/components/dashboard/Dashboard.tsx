import { Session } from "next-auth";
import TicketCounter from "./TicketCounter/TicketCounter";
import TicketGraph from "./TicketGraphs/TicketGraph";
import TicketList from "./TicketList/TicketList";
import {useEffect, useState} from "react"
import { getSession } from "next-auth/react";

export default function Dashboard( )
{   

    const [session, setSession] = useState<Session>()

    const handleSession = async () => {
        
        const sess = await getSession();
        if(sess)
        setSession(sess);
    };

    useEffect(() => {
        handleSession();

    }, [])

    return(
        <section className="flex flex-col w-full h-full gap-4 pt-4 gray--bg">
            
            <article className="w-full h-auto">
                <TicketCounter />
            </article>
            
            <article className="w-full h-auto">
                <TicketGraph />
            </article>
            
            <article className="w-full h-auto">
                <TicketList ticketNum={5}/>
            </article>
        
        </section>

    );

}