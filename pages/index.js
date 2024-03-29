import Head from 'next/head'
import dynamic from "next/dynamic";

export default function Home() {
    const Buttons = dynamic(() => import('../components/buttons'), {
        ssr: false,
    });
    const Profile = dynamic(() => import('../components/profile'), {
        ssr: false,
    });
    return (
    <div className='bg-gradient-to-bl from-black to-rose-900 h-screen overflow-auto'>
        <Head>
            <title>João Tavares</title>
            <meta name="description" content="João Tavares"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <Profile/>
            <Buttons/>
        </main>
    </div>
);
}
