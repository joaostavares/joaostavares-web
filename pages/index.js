import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/profile.png'
import {motion} from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>João Tavares</title>
                <meta name="description" content="João Tavares"/>
                <link rel="icon" href="favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .4
                        }
                    },
                }}>
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        height={200}
                        width={200}
                        className={styles.profile}
                        priority
                        placeholder="blur"
                    />
                </motion.div>
                <motion.h3 className={styles.description} initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .5
                        }
                    },
                }}>João Tavares</motion.h3>
                <motion.div className={styles.grid} initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .75
                        }
                    },
                }}>

                    <motion.a href="https://github.com/joaostavares" className={styles.card} target="_blank"
                              rel="noopener noreferrer" whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <h3>Github</h3>
                    </motion.a>

                    <motion.a href="https://www.linkedin.com/in/joaotavaress/" className={styles.card} target="_blank"
                              rel="noopener noreferrer" whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <h3>LinkedIn</h3>
                    </motion.a>
                    <motion.a href="https://www.instagram.com/joaostavares/" className={styles.card} target="_blank"
                              rel="noopener noreferrer" whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <h3>Instagram</h3>
                    </motion.a>
                    <motion.a href="https://steamcommunity.com/id/werewolf-gg/" className={styles.card} target="_blank"
                              rel="noopener noreferrer" whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <h3>Steam</h3>
                    </motion.a>
                </motion.div>
            </main>
            <Analytics />
        </div>
    )
}
