import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react"

interface IProjectDetail
{
    id:number,
    name:string,
    creator:string,
    participants:string[],
    description:string,
}


export default function ProjectDetail( {id, name, creator, participants, description}:IProjectDetail )
{
    var currUser:string;
    const router = useRouter();

    useEffect(() => {
        currUser = "Me";
    }, [])

    const authorizeAccess = (event:MouseEvent) => {
        if(participants.indexOf(currUser) < 0)
        {
            router.push("/projects/project/" + id);
        }
        else {
            alert("You are not allowed to access this project");
        }
    }

    return(
        <>
            <div key={id} className="flex flex-row justify-between items-center px-[5px] md:px-[40px] w-full gray--bg">
                    <span className="text-[#606164] text-sm">{id}</span>
                    <span onClick={authorizeAccess} className="md:text-xl md:font-bold text-md font-semibold">{name}</span>
                    <span className="text-[#606164] text-sm">Created by {creator}</span>
            </div>

            <div className="flex flex-col gap-4 w-full bg-[#303134] ">
                <ul className="flex flex-row flex-nowrap items-center w-full py-0 px-2 m-0 gap-2">
                    <li className="font-semibold text-md">Participants: </li>
                    {participants.map(item => <li key={item}><span className="rounded-full text-[#202124] text-sm font-semibold px-3 bg-[#ffa500]">{item}</span></li>)}
                </ul>

                <div className="w-full px-2">
                    <p className="text-[#998899] text-sm font-semibold">{description}</p>
                </div>

            </div>



        </>
    );

}