import Navbar from "@/components/navbar/Navbar"
import Button from "@/components/Button"
import ProjectList from "@/components/projects/ProjectList"

import Link from "next/link"
import { useEffect } from "react"
import { store } from "../index"

export default function Home()
{
    var projectArray = store.getState().projectsArrReducer.projectArr;


    return(
        <main>
            <Navbar />
            <section className="flex flex-col gap-2 h-full grow px-3">
                <article className="flex flex-row justify-between py-6">
                    <Link href="/projects/project/create">
                        <Button btnText="Create new project" fontSize="md" bgColor="#ff10f0" width="50" height="25" />
                    </Link>

                    <Link href="/projects" >
                        <Button btnText="Add participant" fontSize="md" bgColor="#ff10f0" width="50" height="25" />
                    </Link>
                </article>

                {projectArray.map((item) => 
                
                <ProjectList id={item.proj_id} name={item.proj_title} creator={item.proj_creator} participants={item.proj_participants} description={item.proj_description} /> 
                
                )}


            </section>

        </main>
    )

}