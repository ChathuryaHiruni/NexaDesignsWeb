import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import image from '../../assets/image.jpg'
import {motion} from "framer-motion"
import PropTypes from "prop-types";

export const FadeUp = (delay) =>{
    return{
        initial: {
            opacity: 0,
            y: 50,
        },
        animate:{
            opacity:1,
            y:0,
            transition: {
                type:"spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease:"easeInOut",
            },
        },
    };
}

const Hero = ({onServiceClick}) => {
  return <section className='bg-light
  overflow-hidden relative'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
           {/*Motors Info */}
           <div className='flex flex-col justify-center py-14
           md:py-0 relative z-10'>
           <div className='text-center md:text-left space-y-10
           lg:max-w-[400px]'>
            <motion.h1 
            variants={FadeUp(0.6)}
            initial='initial'
            animate='animate'
            className='text-2xl lg:text-4xl font-bold !leading-snug'>
            <span className='text-secondary'>
            Elevate Your Digital Presence</span>
            </motion.h1>
            <motion.h2 
            variants={FadeUp(0.6)}
            initial='initial'
            animate='animate'
            className='text-2xl lg:text-4xl font-bold !leading-snug'>
            Crafting innovative solutions in web development and UI/UX design   
            </motion.h2>
            <motion.div 
            variants={FadeUp(0.8)}
            initial='initial'
            animate='animate'
            className='flex justify-center md:justify-start'>
            
                <button onClick={onServiceClick} className='primary-btn flex items-center gap-2 group'>
                Explore Our Services
                <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 
                group-hover:-rotate-45 duration-300'/>
                </button> 
              
            </motion.div>
            </div>
           </div>
           {/*Hero Image*/} 
           <div className='flex justify-center items-center'>
            <motion.img 
            initial={{ x: 50, opacity:0}}
            animate={{ x:0, opacity: 1}}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut'}}
            src={image} alt='' className='w-[400px] 
            xl:w-[600px] relative z-10 drop-shadow'/>
           </div>
        </div>
    </section>
  
}

Hero.propTypes = {
    onServiceClick: PropTypes.func.isRequired,
}

export default Hero