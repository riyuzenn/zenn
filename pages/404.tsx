import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
const Index: NextPage = () => {
  const { asPath } = useRouter();


  return (
    <>
      
      <Head>
        <title>no such file or directory</title>
      </Head>
      
      <div className="flex flex-col justify-center items-center my-10" style={{ lineHeight: 1.5 }}>
        <p className="">
          <pre>
          {`
            ________________________________________ 
           | gnikehttsniaganoilleberpuesornorabeht  |
            ----------------------------------------
             \\
               \\
                   .--.
                  |o_o |
                  |:_/ |
                 //   \\ \\
                (|     | )
               /'\\_   _/\`\\
               \\___)=(___/
           
          `}
          </pre>
         
        </p>
        <br></br>
        <p><span className="text-red-700">error:</span> <b className="text-white">{`~${asPath}`}</b>: no such a file or directory </p>
      </div>

    </>
  )
}
export default Index;
