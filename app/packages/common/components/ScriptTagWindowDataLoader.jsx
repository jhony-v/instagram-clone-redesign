import React from 'react'
import Head from "next/head"

export default function ScriptTagWindowDataLoader({ name, value }) {
    return (
       <Head>
          <script 
            type="text/javascript" 
            dangerouslySetInnerHTML={{ __html: `window.${name}=${JSON.stringify(value)}` }} />
       </Head>
    )
}
