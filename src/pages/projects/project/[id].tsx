import Button from "@/components/Button";
import TicketList from "@/components/dashboard/TicketList/TicketList";
import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";


// What should the design look like?
// Check examples of bugzilla, etc
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
        const currProjId = 0;
        
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
                    currProjId,
                    ticketTitle,
                    ticketDescription,
                } )
            }
        );
        
        if( !setTicketRes.ok)
        {
            console.error(setTicketRes);
        }


        // Reset vals at the end of everything
        
        router.back();



    }
    

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

            <section className="w-full px-3 py-4">                
                <form onSubmit={ handleFormSubmit } className="flex flex-col gap-2 w-[50%]  md:w-[33%]">
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

            </section>

            <TicketList ticketNum={numTicketsShown} />
        </main>
    )

}