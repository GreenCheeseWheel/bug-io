import Link from "next/link"

export default function Modal()
{

    return(
        <div className="md:w-[450px] md:py-[4rem] gray--bg modal--wrap">
            <Link className="bg-white w-[70%] text-black text-md text-center font-semibold rounded-full px-3 py-1" href="/api/auth/signin/github">Sign in with GitHub</Link>
            <Link className="bg-white w-[70%] text-black text-md text-center font-semibold rounded-full px-3 py-1" href="/api/auth/signin/github">Sign in with Google</Link>
            <Link className="bg-white w-[70%] text-black text-md text-center font-semibold rounded-full px-3 py-1" href="/api/auth/signin/github">Sign in with LinkedIn</Link>
        </div>
    )

}