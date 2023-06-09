import { FormEvent, useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { project_schema } from "@/project_col_format";

import Button from "@/components/Button"


export default function Home(props:any)
{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [selectedProject, setSelectedProject] = useState("");
    const [projectList, setProjectList] = useState<project_schema[]>([]);
    const router = useRouter();

    const handleLogin = async (e:FormEvent) => {
        e.preventDefault();

        const provider = await getProviders();

        if(!username.trim() || !password.trim()) 
        {
            alert("Username and password must not be empty!");
            return;
        }

        const signinResp = await signIn( "credentials" , {
            redirect: false,
            username: username,
            password: password,
            project: selectedProject,
            
        });

        if(signinResp && signinResp.ok)
        {
            router.push("/");
            return;
        }

        alert("Error at sign up: " + signinResp?.error);

    };


    useEffect(() => {

        
        setProjectList(props.projectResJson);
        setSelectedProject(props.projectResJson[0].proj_title);

    }, [props]);

    return (
        <main className="w-full min-h-screen m-0 p-0 bg-[#3b5998]">
            <nav className="flex flex-row items-center text-black bg-white h-[55px]">
                
                <div className="flex flex-row flex-nowrap items-center gap-1" >
                    <img src="./bug.svg" alt="Imagen del bug"></img>
                    <span className="font-bold text-sm">BugIO Bug Tracker</span>
                </div>

            </nav>

            <div className="py-5 m-auto bg-white w-[75%] md:w-[50%] lg:w-[33%] h-fit">
                <form 
                    onSubmit={handleLogin}
                    className="flex flex-col w-full h-full gap-2 md:gap-5 px-2 py-4 flex-nowrap"
                    >

                    <input value={username} onChange={(e) => {setUsername(e.currentTarget.value)}} className="text-black border-solid border-[1px] border-[#776677] outline-0 font-semibold caret-[#776677] py-2 indent-2" type="text" placeholder="GreenCheeseWheel" />
                    <input value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} className="text-black border-solid border-[1px] border-[#776677] outline-0 font-semibold caret-[#776677] py-2 indent-2" type="password" placeholder="admin" />
                    <select value={selectedProject} onChange={(e) => {console.error(e.currentTarget.value); setSelectedProject(e.target.value) }} className="text-black outline-0 border-solid border-[1px] border-black">
                        {
                            projectList.map((project) => <option key={project.proj_id}>{project.proj_title}</option>)
                        }
                    </select>

                    <Button btnText="Sign in" bgColor="#3b5998" width="auto" height="auto" />

                </form>

                <div className="flex flex-col gap-1 px-2">
                    
                    <div 
                        className="relative flex flex-row flex-nowrap border-solid border-t-[1px] my-4 border-[#808080] justify-center items-center h-0"
                        >
                        <span className="absolute text-center text-black text-sm bg-white">Need an account?</span>
                    </div>                    
                    <Button onClick={() => {router.push("/register")}} btnText="Register" bgColor="#3b5998" width="auto" height="auto" />
                </div>
            </div>

        </main >
    )

}

export const getServerSideProps = async () => {

    const baseUrl = "" + process.env.NEXTAUTH_URL;
    
    const projectRes = await fetch( baseUrl + "/api/mongo/getProjectList");
    const projectResJson = await projectRes.json();

    return { 
        props: {projectResJson} 
    };

}