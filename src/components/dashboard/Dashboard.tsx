import Button from "../Button";
import TicketCounter from "./TicketCounter/TicketCounter";
import TicketGraph from "./TicketGraphs/TicketGraph";
import TicketList from "./TicketList/TicketList";

export default function Dashboard( )
{

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