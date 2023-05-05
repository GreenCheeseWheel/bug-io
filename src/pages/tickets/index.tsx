import Navbar from "@/components/navbar/Navbar";
import TicketSection from "@/components/tickets/TicketSection";

export default function Home()
{   

    return (
        <main>
            <Navbar />

            <section className="h-full grow px-3">
                <TicketSection />
            </section>

        </main>
    );

}