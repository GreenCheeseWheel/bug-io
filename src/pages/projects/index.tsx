import Navbar from "@/components/navbar/Navbar"
import Button from "@/components/Button"
import ProjectList from "@/components/projects/ProjectList"

export default function Home()
{

    return(
        <main>
            <Navbar />
            <section className="flex flex-col gap-2 h-full grow px-3">
                <article className="flex flex-row justify-between py-6">
                    <Button btnText="Create new project" fontSize="md" bgColor="#ff10f0" width="50" height="25" />
                    <Button btnText="Add participant" fontSize="md" bgColor="#ff10f0" width="50" height="25" />
                </article>

                <ProjectList />

            </section>

        </main>
    )

}