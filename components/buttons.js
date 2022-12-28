import React from "react";
import git from "../public/github.svg"
import insta from "../public/insta.svg";
import linkedin from "../public/linkedin.svg"
import steam from "../public/steam.svg"
import twitter from "../public/twitter.svg";
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
                    }} className='text-xl'>
                        <a href='https://www.github.com/joaostavares'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src={git}
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
                    }} className='text-xl'>
                        <a href='https://www.instagram.com/joaostavares'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src={insta}
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
                            delay: 0.9
                        }
                    },
                }}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }} className='text-xl'>
                        <a href='https://www.linkedin.com/in/joaostavaress'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src={linkedin}
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
                            delay: 1
                        }
                    },
                }}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }} className='text-xl' >
                        <a href='https://steamcommunity.com/id/werewolf-gg/'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src={steam}
                                alt='Steam Logo'
                                height={24}
                                width={24}
                                priority
                            />
                            &nbsp; Steam
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
                    }} className='text-xl' >
                        <a href='https://twitter.com/joaostavaress/'
                           target={'_blank'}
                           rel={'noreferrer'}
                           className='btn'
                        >
                            <Image
                                src={twitter}
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