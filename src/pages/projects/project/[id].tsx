import { useRouter } from "next/router";


// What should the design look like?
// Check examples of bugzilla, etc
export default function Project()
{
    const router = useRouter();
    const {id} = router.query;
    

    return <p>Project id: {id}</p>

}