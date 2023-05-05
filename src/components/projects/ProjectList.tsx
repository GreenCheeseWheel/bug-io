import {useEffect} from "react"
import ProjectDetail from "./ProjectDetail";

interface IProjectList
{
    id:number,
    name:string,
    creator:string,
    participants:string[],
    description:string,
}

export default function ProjectList()
{
    var projectList:IProjectList[] = [
        {id: 1, name:"BugTracker", creator: "Me", participants: ["Me", "Mother"], description:"Bugtracker simple | Next js"},
        {id: 2, name:"BugTrackerProj", creator: "You", participants: ["You", "Father"], description:"Bugtracker simple | Next js | Data"}
    ]; 

    useEffect(() => {
        // Fetch project list


    }, []);

    return (
        <section className="flex flex-col gap-2 py-5 px-4 w-full darkgray--bg">
            {
            projectList.map((item) => 
                <ProjectDetail 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                    creator={item.creator} 
                    participants={item.participants}
                    description={item.description}
                    />
            )
            }

        </section>
    )
}