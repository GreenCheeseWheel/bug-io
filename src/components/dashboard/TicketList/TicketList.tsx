import TicketInfo from "./TicketInfo";
import { store } from "@/pages";
import { project_schema } from "@/project_col_format";
import { getSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

interface ITicketListFilters {

    ticketTitleFilter?:string,
    ticketNum:number,
    projectId?:string | string[] | undefined,

}

export default function TicketList( { ticketTitleFilter, ticketNum, projectId }:ITicketListFilters )
{
    const [ticketData, setTicketData] = useState([{ticket_id: "", ticket_title: "", ticket_description: "", ticket_status: 0}] );
    const [reducer, setReducer] = useState( store.getState().projectsArrReducer );  
    const [currentProject, setCurrentProject] = useState<project_schema>();

    store.subscribe(() => {
        setReducer(store.getState().projectsArrReducer);
    })

    const getCurrentProject = async () => {
        if(projectId)
        {
            var helperCurrProject = reducer.projectArr.filter(proj => proj.proj_id == projectId).at(0);
            
            setCurrentProject( helperCurrProject );
            

        }
        else
        {
            const sess = await getSession();

            if(sess)
            {
                
                var currProj = reducer.projectArr.filter(proj => proj.proj_participants.includes(sess?.user.user.user_name) ).at(0) ;
                setCurrentProject(currProj);
    
            }
            
        }
    }

    useEffect(() => {
        getCurrentProject();

    }, [reducer])

    useEffect(() => {
        var ticketArr:any = [];

        // Ticker arr is an array of ticket arrays with this. We flatten it and pass it as non-nested
        if(currentProject && ticketTitleFilter)
        {
            ticketArr = currentProject.proj_tickets.filter(ticket => 
                
                ticket.ticket_title.toLowerCase().includes( ticketTitleFilter.toLowerCase() )
                
            );

            setTicketData( ticketArr.slice(0, ticketNum) );
        }
        else if(currentProject)
        {
            ticketArr = currentProject.proj_tickets;
            setTicketData( ticketArr.slice(0, ticketNum) );

        }


        


    }, [ticketNum, ticketTitleFilter, currentProject])


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