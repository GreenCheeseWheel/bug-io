import {MdAutoAwesomeMosaic, MdHowToReg} from "react-icons/md"
import {BsTicketPerforatedFill} from "react-icons/bs"
import {AiFillFileText} from "react-icons/ai"
import Link from "next/link";
import { store } from "@/pages";
import {useEffect} from "react"

export default function Navbar()
{

    return(
        <nav className="w-full py-1 darkgray--bg">
            <ul className="flex flex-row justify-center items-center gap-5 w-full h-full">
                <li> <Link href="/" className="navbar--item" ><MdAutoAwesomeMosaic size={27}/> <span>Dashboard</span></Link> </li>
                <li> <Link href="/tickets" className="navbar--item" ><BsTicketPerforatedFill size={27}/> <span>All tickets</span></Link> </li>
                <li> <Link href="/projects" className="navbar--item"> <AiFillFileText size={27}/> <span>Projects</span> </Link> </li>
            </ul>
        </nav>
        
    );
}