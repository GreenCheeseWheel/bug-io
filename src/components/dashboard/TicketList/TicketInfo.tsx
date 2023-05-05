interface ITicketInfo {
    title:string,
    status:string[],
    id:number,
}

export default function TicketInfo({title, status, id}:ITicketInfo)
{


    return(
        <article className="w-full h-auto py-1 px-2 border-solid border-[1px] border-[#aaaaaa] border-separate gray--bg">
            <div className="flex flex-row flex-nowrap gap-2">
                <span className="font-semibold text-lg">{title}</span>
                <div style={{backgroundColor: status[1]}} className="rounded-full p-1 text-sm text-black">{status[0]}</div>
            </div>
            <span className="font-semibold text-sm">{id}</span>
        </article>
    )

}