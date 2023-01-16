import Head from 'next/head'
import {Analytics} from '@vercel/analytics/react';

export default function Home() {
    return (

        <div className='bg-gradient-to-tr from-blue-400 to-emerald-400 h-screen overflow-auto'>
            <Head>
                <title>Desabilitado</title>
                <meta name="description" content="Desabilitado"/>
                {/*<link rel="icon" href="favicon.ico"/>*/}
            </Head>
            <main>
                <div className='flex justify-center items-center text-body'>
                    <h1>Permanentemente Desabilitado apenas aguardando o dominio expirar</h1>
                </div>
            </main>
            <Analytics/>
        </div>
    );
}
