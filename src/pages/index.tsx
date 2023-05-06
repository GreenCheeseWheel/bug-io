import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/navbar/Navbar";

import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { Session } from "next-auth";
import {SessionProvider, getSession} from "next-auth/react"
import userReducer from "@/slices/user_slice";
import ticketReducer from "@/slices/tracker_slice"
import { redirect } from "next/dist/server/api-utils";
import { NextPageContext } from "next";

const store = configureStore(
  {
    reducer: combineReducers({userReducer, ticketReducer}),
  }
);

export default function Home() {

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

  return {
    props: { data: sess.user }
  }
}

export {store};