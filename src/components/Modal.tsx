import Button from "./Button"
import {useState, FormEvent} from "react"
import { useRouter } from "next/router";



export default function Modal()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const sendData = async (event:FormEvent | null) => {
        if(event)
        {   
            event.preventDefault();
            
            // Create project fetch() code here
            // I still need to create that api in the
            // pages/api/mongo directory

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