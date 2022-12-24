import Head from 'next/head'
import {Analytics} from '@vercel/analytics/react';
import Profile from "../components/profile";
import Buttons from "../components/buttons";

export default function Home() {
    return (
        <div className='bg-gradient-to-tr from-red-400 via-blue-300 to-green-300 h-screen overflow-auto'>
            <Head>
                <title>João Tavares</title>
                <meta name="description" content="João Tavares"/>
                <link rel="icon" href="favicon.ico"/>
            </Head>
            <main>
                <Profile/>
                <Buttons/>
            </main>
            <Analytics/>
        </div>
    );
}
