import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

function Buttons() {
    return (
        <div className='flex justify-center items-center'>
            <ul className='w-[244px] sm:w-[360px]'>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.7
                        }
                    },
                }}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }} className='text-xl font-body'>
                        <a href='https://www.github.com/joaostavares'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src='/github.svg'
                                alt='Github Logo'
                                height={24}
                                width={24}
                                priority
                            />
                            &nbsp; Github
                        </a>
                    </motion.li>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.8
                        }
                    },
                }}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }} className='text-xl font-body'>
                        <a href='https://www.linkedin.com/in/joaostavaress'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src='/linkedin.svg'
                                alt='LinkedIn Logo'
                                height={24}
                                width={24}
                                priority
                            />
                            &nbsp; LinkedIn
                        </a>
                    </motion.li>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.9
                        }
                    },
                }}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }} className='text-xl font-body' >
                        <a href='https://www.instagram.com/joaostavares/'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src='/insta.svg'
                                alt='Instagram Logo'
                                height={24}
                                width={24}
                                priority
                            />
                            &nbsp; Instagram
                        </a>
                    </motion.li>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 1
                        }
                    },
                }}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }} className='text-xl font-body' >
                        <a href='https://open.spotify.com/user/serafini98?si=a4c8b1a645cd4b5c'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src='/spotify.svg'
                                alt='Spotify Logo'
                                height={24}
                                width={24}
                                priority
                            />
                            &nbsp; Spotify
                        </a>
                    </motion.li>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 1.1
                        }
                    },
                }}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }} className='text-xl font-body' >
                        <a href='https://twitter.com/joaostavaress'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src='/twitter.svg'
                                alt='Twitter Logo'
                                height={24}
                                width={24}
                                priority
                            />
                            &nbsp; Twitter
                        </a>
                    </motion.li>
                </motion.div>
            </ul>
        </div>
    );
}

export default Buttons