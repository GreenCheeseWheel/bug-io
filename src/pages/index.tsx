import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/navbar/Navbar";

import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {SessionProvider, getSession} from "next-auth/react"
import userReducer, {signinUser} from "@/slices/user_slice";
import ticketReducer, {updateTickets} from "@/slices/tickets_slice"
import projectsArrReducer, {setProjArr} from "@/slices/projects_slice"

import { NextPageContext } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const store = configureStore(
  {
    reducer: combineReducers({userReducer, ticketReducer, projectsArrReducer}),
  }
);

export default function Home(propData:any) {
  
  var data = propData;
  const router = useRouter();

  useEffect(() => {
    
    var {user_name, user_email,user_role} = propData.userData.user;
    var {proj_title} = propData.userData.project;

    var arrTickets:any = [];

    data.projData.forEach((proj: { proj_tickets:any }) => {
      arrTickets = arrTickets.concat(proj.proj_tickets);  
    });

    store.dispatch(signinUser( {name: user_name, email: user_email ,role: user_role, proj_title: proj_title} ) );
    store.dispatch(setProjArr(data.projData));
    store.dispatch(updateTickets(arrTickets));


  }, []);


  return (
    <main>
        <Navbar />
      
        <section className="h-full grow px-3">
          <Dashboard />
        </section>
    </main>
  )
  
}

function componentDidUpdate(prevProps:any, prevState:any)
{ 
  console.log("Update!");

}


export const getServerSideProps = async (ctx:NextPageContext) =>
{

  const sess = await getSession(ctx);
  const baseUrl = "" +process.env.NEXTAUTH_URL;

  if(!sess)
  {
    return {
      redirect: {destination: "/login", permanent: false}
    }
  }

  const projectRes = await fetch( baseUrl + "/api/mongo/getProjectList");
  const projectResJson = await projectRes.json();

  return {
    props: { userData: sess.user, projData: projectResJson }
  }

}

export {store};