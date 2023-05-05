import { useRouter } from "next/router";

export default function Project()
{
    const router = useRouter();
    const {id} = router.query;
    

    return <p>Project id: {id}</p>

}