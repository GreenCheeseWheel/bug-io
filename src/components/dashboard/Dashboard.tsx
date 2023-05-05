import Button from "../Button";
import TicketCounter from "./TicketCounter/TicketCounter";
import TicketGraph from "./TicketGraphs/TicketGraph";
import TicketList from "./TicketList/TicketList";

export default function Dashboard()
{

    return(
        <section className="flex flex-col w-full h-full gap-4 pt-4 gray--bg">
            
        
            <article className="w-full h-auto flex flex-row justify-start">
                <Button btnText="Create a new project" fontSize="md" bgColor="#ff10f0" width="auto" height="auto"/>
            </article>
            
            <article className="w-full h-auto">
                <TicketCounter />
            </article>
            
            <article className="w-full h-auto">
                <TicketGraph />
            </article>
            
            <article className="w-full h-auto">
                <TicketList />
            </article>
        
        
        </section>

    );

}