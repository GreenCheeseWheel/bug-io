import Navbar from "@/components/navbar/Navbar";
import TicketSection from "@/components/tickets/TicketSection";

export default function Home()
{   

    return (
        <main className="flex flex-col gray--bg w-full">
            <Navbar />

            <section className="min-h-[120vh] grow px-3">
                <TicketSection />
            </section>

        </main>
    );

}