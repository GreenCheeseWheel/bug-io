import Button from "./Button"
import {useState, FormEvent} from "react"
import { useRouter } from "next/router";
import { store } from "@/pages";
import { getSession } from "next-auth/react";



export default function Modal()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const sendData = async (event:FormEvent | null) => {
        const date = new Date().getTime();
        const userName = store.getState().userReducer.name;
        console.error(userName);

        if(event)
        {   
            event.preventDefault();
                        
            const res = await fetch("http://localhost:3000/api/mongo/addProject", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(
                    {
                        code_str: date.toString(), 
                        proj_title: title, 
                        proj_description: description,
                        proj_creator: userName,
                        proj_participants: userName
                    })
            
            })
            .catch(err => { console.error(err); throw new Error(err); });

            if(res.ok)
            {
                // This goes to root, forcing a redux update
                // DO NOT CHANGE
                router.push("/");
            }

        }
    }

    return(
        <div className="w-full md:py-[75px] py-5 gray--bg modal--wrap">
            <form onSubmit={sendData} className="flex flex-col gap-4 bg-transparent md:w-[35%] w-[75%]">
                <input value={title} onChange={(event) => {setTitle(event.currentTarget.value)}} className="text-black caret-[#404145] indent-1 outline-0 border-0" type="text" placeholder="Project name"/>
                <textarea value={description} onChange={(event) => {setDescription(event.currentTarget.value)}} className="outline-0 caret-[#404145] border-0 resize-none text-black indent-1" placeholder="Project description"/>
                <Button onClick={sendData} btnText="Create project" bgColor="#000000" width="35%" height="auto" />
            </form>
        </div>
    )

}