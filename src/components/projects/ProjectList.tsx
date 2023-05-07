import {useEffect} from "react"
import ProjectDetail from "./ProjectDetail";

const mongodb_uri = process.env.MONGODB_URI;

interface IProjectList
{
    id:string,
    name:string,
    creator:string,
    participants:string[],
    description:string,
}

export default function ProjectList({id, name, creator, participants, description}:IProjectList)
{

    return (
        <section className="flex flex-col gap-2 py-5 px-4 w-full darkgray--bg">
            
             
            <ProjectDetail 
                key={id} 
                id={id} 
                name={name} 
                creator={creator} 
                participants={participants}
                description={description}
                />

        </section>
    )
}

export async function getServerSideProps()
{
    


}