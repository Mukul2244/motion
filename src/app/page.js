"use client"
import React from 'react'
import { motion } from "motion/react"

function page() {

  return (
    <div className='perspective-[1000px] transform-style:preserve-3d h-screen w-full flex justify-center items-center bg-neutral-900'
      style={{
        backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2)0.5px , transparent 0)',
        backgroundSize: '8px 8px',
        backgroundRepeat: 'repeat',

      }}
    >
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y:-5
        }}
        whileTap={{
          y:0
        }}
        style={{
          translateZ: 100
        }}
        transition={{
          durtion: 0.3,
          ease: 'easeInOut'
        }}
        initial={{}}
        animate={{}}
        exit={{}}
        className='relative text-netural-500  py-4 bg-black rounded-lg text-lg font-bold px-12
      shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgb(255,255,255,0.1)_inset]
      group'
      >
        <span className='group-hover:text-cyan-500 transtion-colors duration-300'>Subscribe</span>
        <span className=' absolute  bottom-px bg-gradient-to-r from-transparent 
      via-cyan-500  to-transparent h-px inset-x-0 w-3/4 mx-auto '></span>
        <span className=' absolute  bottom-px bg-gradient-to-r from-transparent 
      via-cyan-500  to-transparent  inset-x-0 w-full mx-auto  blur-sm h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 
      '></span>
      </motion.button>
    </div>
  )
}

export default page