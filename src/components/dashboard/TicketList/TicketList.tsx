import TicketInfo from "./TicketInfo";
import { ticketColorCode } from "@/ticket-code";

export default function TicketList()
{
    var ticketData;

    return(
        <section className="flex flex-col py-2 px-2 darkgray--bg">
            <section className="px-3 py-2 gray--bg rounded-[8px]">
                <p className="font-bold text-xl mb-2">Latest Five Tickets</p>
                <TicketInfo title="JSON error in 'api/getProjectTickets'" status={["resolved", ticketColorCode.resolved]} id={1}/>
                <TicketInfo title="JSON error in 'api/getProjectTickets'" status={["unresolved", ticketColorCode.unresolved]} id={2}/>
                <TicketInfo title="JSON error in 'api/getProjectTickets'" status={["resolved", "#00ff00"]} id={3}/>
                <TicketInfo title="JSON error in 'api/getProjectTickets'" status={["resolved", "#00ff00"]} id={4}/>
                <TicketInfo title="JSON error in 'api/getProjectTickets'" status={["resolved", "#00ff00"]} id={5}/>
            </section>
        </section>
    )

}