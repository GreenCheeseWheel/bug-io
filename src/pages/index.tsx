import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/navbar/Navbar";

import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {SessionProvider, getSession} from "next-auth/react"
import userReducer, {signinUser} from "@/slices/user_slice";
import ticketReducer from "@/slices/tickets_slice"
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
    
    store.dispatch(signinUser(propData.userData));
    store.dispatch(setProjArr(data.postingData));

  }, [propData]);


  return (
    <main>
      <SessionProvider>
        <Navbar />

        <section className="h-full grow px-3">
          <Dashboard />
        </section>

      </SessionProvider>
      
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

  const addRes = await fetch("http://localhost:3000/api/mongo/getProjectList");
  const addResJson = await addRes.json();


  return {
    props: { userData: sess.user, postingData: addResJson }
  }

}

export {store};