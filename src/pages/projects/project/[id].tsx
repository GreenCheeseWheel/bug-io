import Button from "@/components/Button";
import TicketList from "@/components/dashboard/TicketList/TicketList";
import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import { getSession} from "next-auth/react";
import { Session } from "next-auth";
import roles from "@/user_col_format";



export default function Project()
{
    const router = useRouter();
    const {id} = router.query;

    // Ticket search states
    const [numTicketsShown, setNumTicketsShown] = useState(5);
    const [ticketSearch, setTicketSearch] = useState("");

    // Ticket creation states
    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketDescription, setTicketDescription] = useState("");

    // Ticket id for deletion
    const [ticketId, setTicketId] = useState(-1);

    //Session check
    const [session, setSession] = useState<Session>();


    const validateField = (ev:ChangeEvent<HTMLInputElement>) => {
        
        var targetVal = 0;

        if( ev.currentTarget.value &&  parseInt( ev.currentTarget.value ) > 0 )
        {
            targetVal = parseInt(ev.currentTarget.value);
        }

        setNumTicketsShown(targetVal);

    }; 


    const handleFormSubmit = async (ev:FormEvent) =>
    {
        ev.preventDefault();
        const date = new Date().getTime();

        if(!ticketTitle.trim() || !ticketDescription.trim() )
        {    
            alert("An error has ocurred. Check that ticke data is not empty");
            return;
        }
        
        const baseUrl = "" + process.env.NEXTAUTH_URL

        var setTicketRes = await fetch("http://localhost:3000/api/mongo/tickets/addTicket",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( {
                    code_str: date.toString(),
                    id,
                    ticketTitle,
                    ticketDescription,
                } )
            }
        );
        

        // Reset vals at the end of everything
        
        router.push("/");

    }

    const handleDeleteProject = async () => {

        const response = await fetch("http://localhost:3000/api/mongo/deleteProjectByID?id=" + id);
        if(response.ok)
        {
            router.push("/");
        }        

    }

    const handleDeleteTicket = async (ev:FormEvent) => {
        ev.preventDefault();



        const response = await fetch("http://localhost:3000/api/mongo/tickets/deleteTicket",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                proj_id: id,
                ticket_id: ticketId,
            })

        });

        router.push("/");

    }

    const handleSession = async () => {
        
        const sess = await getSession();
        if(!sess)
        router.push("/login");
        else
        setSession(sess);
        
    }

    
    useEffect(() => {
        
        handleSession();

    }, [])

    return (
        <main>
            

            <Navbar />
            <section className="flex flex-row justify-between w-full py-2 px-3">
                <input 
                    type="text"
                    placeholder="Search by title"
                    className="text-black outline-0"
                    value={ticketSearch}
                    onChange={(ev) => {setTicketSearch( ev.currentTarget.value )}}

                    />

                <form>
                    <label htmlFor="tickets" >
                        Number of tickets shown
                    </label>
                    <input 
                        id="tickets"
                        type="number" 
                        className="text-black outline-0"
                        value={numTicketsShown}  
                        onChange={ validateField }
                        />
                </form>

                

            </section>

            <section className="flex flex-row justify-between w-full gap-1 px-3 py-4">                
                <form onSubmit={ handleFormSubmit } className="flex flex-col gap-2 w-[45%]  md:w-[33%]">
                    <input 
                        type="text"
                        placeholder="Ticket title"
                        className="text-black outline-0"
                        value={ticketTitle}
                        onChange={(ev) => { setTicketTitle(ev.currentTarget.value) }}

                        />

                    <input 
                        type="text"
                        placeholder="Ticket description"
                        className="text-black outline-0"
                        value={ticketDescription}
                        onChange={(ev) => { setTicketDescription(ev.currentTarget.value) }}

                        />

                    <Button bgColor="orange" btnText="Add ticket" width="auto" height="auto" />
                </form>

                <form onSubmit={handleDeleteTicket} className="flex flex-col w-[45%] md:w-[33%] ">
                    <input 
                        type="number" 
                        placeholder="Ticket ID"
                        className="text-black outline-0 "
                        onChange={(ev) => {setTicketId(parseInt(ev.target.value))}}
                        />

                    <Button  btnText="Delete ticket" width="auto" height="auto"/>
                </form>



            </section>

            <TicketList projectId={id} ticketNum={numTicketsShown} ticketTitleFilter={ticketSearch} />

            {
            session?.user.user.user_role == roles.admin &&
            <section className="w-full py-3 px-2 flex flex-row justify-start">
                
                <Button 
                    btnText="Delete project" 
                    bgColor="red" 
                    width="auto" 
                    height="auto" 
                    onClick={handleDeleteProject}
                    />

            </section>
            }
            
        </main>
    )

}