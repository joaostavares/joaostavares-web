import Head from 'next/head'
import {Analytics} from '@vercel/analytics/react';
import dynamic from 'next/dynamic';

export default function Home() {
    const Buttons = dynamic(() => import('../components/buttons'), {
        ssr: false,
    });
    const Profile = dynamic(() => import('../components/profile'), {
        ssr: false,
    });
    return (

        <div className='bg-gradient-to-tr from-blue-400 to-emerald-400 h-screen overflow-auto'>
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
