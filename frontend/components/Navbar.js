import React from 'react'
import Link from 'next/link'
import NProgress from 'nprogress'
import { Router } from 'next/router'
import Head from 'next/head'

Router.onRouteChangeStart = url=>{ 
    console.log("Okay Chnaged");
    NProgress.start() 
}
Router.onRouteChangeComplete =  url => NProgress.done()

const Navbar = () => {
    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <div>
            <ul>
                <Link href="/" >
                <li>Home</li>
                </Link>

                <Link href="/signup" >
                <li>Home</li>

                </Link>


                <Link href="/signin" >
                <li>Home</li>
                </Link>

                

                <li>Home</li>

                <li>Home</li>

            </ul>
        </div>
        </>
    )
}

export default Navbar
