import { useEffect, useState } from "react"

interface ITicketProps {
    counter?:number,
    type?:string,
    bgFlag?:string,
}

export default function Ticket({counter, type, bgFlag}:ITicketProps)
{

    return(
        <div className="flex flex-row h-[90%] w-[20%] rounded-[5px] gray--bg">

            <div style={{backgroundColor: bgFlag}} className="h-full w-[20px] rounded-[5px]"></div>
            <div className="flex flex-col h-full grow justify-center sm:justify-safe">
                <span className="w-full text-2xl font-semibold indent-[5%]">{counter}</span>
                <span className="hidden w-full sm:inline-flex sm:text-sm md:text-md lg:text-lg font-semibold indent-[10%]">{type}</span>
            </div>
        </div>
    )

}