import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {


  return (
    <main className="flex flex-col gray--bg w-full">
      
      <Navbar />

      <section className="h-full grow px-3">
        <Dashboard />
      </section>
      
    </main>
  )
}
