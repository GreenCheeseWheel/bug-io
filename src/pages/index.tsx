import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/navbar/Navbar";

import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {SessionProvider, getSession} from "next-auth/react"
import userReducer, {signinUser} from "@/slices/user_slice";
import ticketReducer, {updateTickets} from "@/slices/tickets_slice"
import projectsArrReducer, {setProjArr} from "@/slices/projects_slice"

import { NextPageContext } from "next";
import { useEffect } from "react";

const store = configureStore(
  {
    reducer: combineReducers({userReducer, ticketReducer, projectsArrReducer}),
  }
);


export default function Home(propData:any) {
  
  var data = propData;


  useEffect(() => {
    
    var {user_name, user_email,user_role} = propData.userData;
    var arrTickets:any = [];

    console.error(data.projData);
    store.dispatch(signinUser( {name: user_name, email: user_email ,role: user_role} ));
    store.dispatch(setProjArr(data.projData));
    

  }, [propData]);


  return (
    <main>
        <Navbar />

        <section className="h-full grow px-3">
          <Dashboard />
        </section>
    </main>
  )
  
}


export const getServerSideProps = async (ctx:NextPageContext) =>
{

  const sess = await getSession(ctx);

  if(!sess)
  {
    return {
      redirect: {destination: "api/auth/signin", permanent: false}
    }
  }

  const projectRes = await fetch("http://localhost:3000/api/mongo/getProjectList");
  const projectResJson = await projectRes.json();

  return {
    props: { userData: sess.user, projData: projectResJson }
  }

}

export {store};