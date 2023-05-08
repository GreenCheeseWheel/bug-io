import {useEffect, useState} from "react"
import { ticketColorCode } from "@/ticket-code"
import ticket_status from "@/ticket_col_format"

interface ITicketInfo {
    title:string,
    status:number,
    id:string,
}




export default function TicketInfo({title, status, id}:ITicketInfo)
{
    const [ticketColor, setTicketColor] = useState("");
    const [ticketStatus, setTicketStatus] = useState("");

    
    useEffect(() => {

        if( status == ticket_status.new ) 
        {
            setTicketColor(ticketColorCode.new);
            setTicketStatus("New");
        }

        if( status == ticket_status.triaged ) 
        {
            setTicketColor(ticketColorCode.triaged);
            setTicketStatus("Triaged");
        }
        if( status == ticket_status.accepted ) 
        {
            setTicketColor(ticketColorCode.accepted);
            setTicketStatus("Accepted");
        }
        if( status == ticket_status.pending ) 
        {
            setTicketColor(ticketColorCode.pending);
            setTicketStatus("Pending");
        }
        if( status == ticket_status.unresolved ) 
        {
            setTicketColor(ticketColorCode.unresolved);
            setTicketStatus("Unresolved");
        }
        if( status == ticket_status.resolved ) 
        {
            setTicketColor(ticketColorCode.resolved);
            setTicketStatus("Resolved");
        }
        

    }, [status]);

    return(
        <article className="w-full h-auto py-1 px-2 border-solid border-[1px] border-[#aaaaaa] border-separate gray--bg">
            <div className="flex flex-row flex-nowrap gap-2">
                <span className="font-semibold text-lg">{title}</span>
                <div style={{backgroundColor: ticketColor}} className="rounded-full p-1 text-sm text-black"> {ticketStatus} </div>
            </div>
            <span className="font-semibold text-sm">{id}</span>
        </article>
    )

}