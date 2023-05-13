import Navbar from "@/components/navbar/Navbar"
import Button from "@/components/Button"
import ProjectList from "@/components/projects/ProjectList"
import {useEffect, useState} from "react"
import Link from "next/link"
import { store } from "../index"
import { SessionProvider, getSession, useSession } from "next-auth/react"
import { Session } from "next-auth"

export default function Home()
{
    const [reducer, setReducer] = useState(store.getState().projectsArrReducer) ;
    const [session, setSession] = useState<Session>();
    

    store.subscribe(() => {
        setReducer(store.getState().projectsArrReducer);
    });

    const getSessionHandler = async () => {

        try
        {
            const session = await getSession();
            if(session)
            setSession(session);
            
        }
        catch(err)
        {
            throw new Error(`${err}`);
        }

    }

    useEffect(() => {
    
        getSessionHandler();
    
    }, [])



    return(
        <main>
            <SessionProvider session={session}>
                <Navbar />
                <section className="flex flex-col gap-2 h-full grow py-2 px-3">
                    {
                    
                    session?.user.user.user_role == 0 &&
                    
                    <article className="flex flex-row justify-start py-6">
                        <Link href="/admin/project/create">
                            <Button btnText="Create new project" fontSize="md" bgColor="#ff10f0" width="50" height="25" />
                        </Link>

                    </article>
                    }

                    { reducer.projectArr.map((item) => 
                    
                    <ProjectList key={item.proj_id} id={item.proj_id} name={item.proj_title} creator={item.proj_creator} participants={item.proj_participants} description={item.proj_description} /> 
                    
                    )}


                </section>
            </SessionProvider>

        </main>
    )

}