import Navbar from "@/components/navbar/Navbar"
import Button from "@/components/Button"
import ProjectList from "@/components/projects/ProjectList"
import {useState} from "react"
import Link from "next/link"
import { store } from "../index"

export default function Home()
{
    const [reducer, setReducer] = useState(store.getState().projectsArrReducer) ;
    
    store.subscribe(() => {
        setReducer(store.getState().projectsArrReducer);
    });


    return(
        <main>
            <Navbar />
            <section className="flex flex-col gap-2 h-full grow px-3">
                <article className="flex flex-row justify-start py-6">
                    <Link href="/projects/project/create">
                        <Button btnText="Create new project" fontSize="md" bgColor="#ff10f0" width="50" height="25" />
                    </Link>

                </article>

                { reducer.projectArr.map((item) => 
                
                <ProjectList id={item.proj_id} name={item.proj_title} creator={item.proj_creator} participants={item.proj_participants} description={item.proj_description} /> 
                
                )}


            </section>

        </main>
    )

}