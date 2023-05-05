import { useEffect } from "react";
import TicketAmountGraph from "./TicketAmountGraph";
import TicketTypeGraph from "./TicketTypeGraph";

export default function TicketGraph()
{

    useEffect(() => {
        // This effect should be responsible of bringing the MongoDB data in and
        // passing it down to TicketTypeGraph and TicketAmountGraph

        
    }, [])

    return (
        <article className="flex flex-row justify-around items-center h-[50vh] darkgray--bg">
            <TicketTypeGraph />
            <TicketAmountGraph />
        </article>
    )
}