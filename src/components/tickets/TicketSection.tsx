import React, {useState} from "react"
import TicketList from "../dashboard/TicketList/TicketList";


export default function TicketSection()
{
    const [searchText, setSearchText] = useState("");

    return(
        <section className="flex flex-col w-full h-full gap-4 pt-4 gray--bg">
            
            <article className="flex flex-row items-center justify-center w-full h-fit py-5">
                
                <input 
                    value={searchText} 
                    onChange={(thisEv) => {setSearchText(thisEv.currentTarget.value)}} 
                    type="text" 
                    placeholder="Search..." 
                    className="w-[80%] h-[35px] text-gray-800 placeholder-gray-600 outline-0 indent-3 caret-gray-600"
                    />
            
            </article>

            <article className="w-full h-auto">
                <TicketList ticketNum={50} />
            </article>
        </section>
    );
}