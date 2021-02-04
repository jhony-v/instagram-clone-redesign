import React from "react"
import Head from "next/head"

export default function SEO({ title }) {
    return (
       <Head>
          <title>{`${title ? title : ''} Instagram`}</title>
          <link rel="shortcut icon" href="/images/logo_instagram.png" />
       </Head>

    )
}