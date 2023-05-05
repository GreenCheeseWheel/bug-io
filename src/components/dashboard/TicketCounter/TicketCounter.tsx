import Ticket from "../Ticket";

export default function TicketCounter()
{
    return(
        <div className="flex flex-row items-center justify-between px-2 text-white h-[100px] w-full darkgray--bg">
            <Ticket counter={0} type="New" bgFlag="#de3163"/>
            <Ticket counter={0} type="Triaged" bgFlag="#ff10f0" />
            <Ticket counter={0} type="Resolved" bgFlag="#00ff00" />
            <Ticket counter={0} type="Unresolved" bgFlag="#ff0000" />
        </div>
    );
}