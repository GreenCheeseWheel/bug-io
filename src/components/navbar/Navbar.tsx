import {MdAutoAwesomeMosaic} from "react-icons/md"
import {BsTicketPerforatedFill} from "react-icons/bs"
import {AiFillFileText} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import Link from "next/link";


export default function Navbar()
{

    return(
        <nav className="w-full py-1 darkgray--bg">
            <ul className="flex flex-row justify-center items-center gap-5 w-full h-full">
                <li> <Link href="/" className="navbar--item" ><MdAutoAwesomeMosaic size={27}/> <span>Dashboard</span></Link> </li>
                <li> <Link href="/tickets" className="navbar--item" ><BsTicketPerforatedFill size={27}/> <span>All tickets</span></Link> </li>
                <li> <Link href="/projects" className="navbar--item"> <AiFillFileText size={27}/> <span>Projects</span> </Link> </li>
                <li> <Link href="/api/auth/signout" className="navbar--item" > <BiLogOut size={27} />  <span>Sign out</span> </Link></li>
            </ul>
        </nav>
        
    );
}