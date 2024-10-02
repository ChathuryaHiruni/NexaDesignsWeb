import React from 'react'
import { FaBell } from 'react-icons/fa'
import bgimage3 from "../../assets/bgimage3.jpg";
import {motion} from "framer-motion"

const bgStyle ={
    backgroundImage: `url(${bgimage3})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const AboutUs= () => {
  return <section className='bg-[#f7f7f7]'>
  <motion.div 
  initial={{opacity: 0}}
  whileInView={{opacity:1}}

  style={bgStyle} className='container py-24 md:py-48'>
    <motion.div 
    initial={{opacity: 0, scale: 0.5}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 0.6, ease:'easeInOut'}}
    className='flex flex-col justify-centerl'>
        <div className='text-center space-y-4 lg:max-w-[1000px] mx-auto'>
            <h1 className='text-4xl font-bold !leading-snug'>
            About Us</h1>
            <div>
            <p >Welcome to NexaDesigns, where creativity meets functionality. We are a dynamic team of passionate web developers, UI/UX designers, and content strategists committed to delivering innovative digital solutions. Our mission is to transform ideas into visually stunning, user-centric experiences that drive results.</p>

<p>At NexaDesigns, we believe that great design isn’t just about aesthetics – it’s about solving problems and enhancing the user journey. We take a holistic approach, blending cutting-edge technology, intuitive design, and engaging content to create websites that not only look exceptional but also deliver a seamless user experience.</p>

<p> Whether you're a startup looking to build your online presence or an established brand aiming to refresh your digital strategy, NexaDesigns is here to help you stand out in a competitive market. With a deep understanding of modern web development and a commitment to staying ahead of industry trends, we are your trusted partner in the digital world.</p>
</div>
            <button 
            className='primary-btn !mt-8 inline-flex
            items-center gap-4 group'>
            Subscribe Now
            <FaBell
            className='group-hover:animate-bounce
            group-hover:text-lg duration-200'/>
            </button>
        </div>
    </motion.div>
  </motion.div>


  </section>
  
}

export default AboutUs