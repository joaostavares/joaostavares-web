import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import ProfilePic from "../public/profile.webp";

function Profile() {
    return (

        <div className='w-full pt-12 pb-4
        flex justify-center items-center
        flex-col text-center space-y-6'>
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
                <div className='bg-gradient-to-tr from-amber-200
                via bg-amber-300 to indigo-200 h-48 w-48
                border-none rounded-full overflow-hidden'>
                    <Image
                        src={ProfilePic}
                        alt='My Profile Picture'
                        height={300}
                        width={300}
                        objectFit='contain'
                        placeholder={'blur'}
                    />
                </div>
            </motion.div>
            <div>
                <motion.h2 className='font-body text-xl font-bold text-black' initial="hidden" animate="visible" variants={{
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
                }}>João Tavares</motion.h2>
                <motion.h2 className='font-body text-gray-700' initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .6
                        }
                    },
                }}>@joaostavares</motion.h2>
            </div>
        </div>
    );
}

export default Profile