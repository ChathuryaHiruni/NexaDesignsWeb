
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogModal from './BlogModal';
import {motion} from "framer-motion"


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


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null); // State to track selected blog
    const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close

    useEffect(() => {
        axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30')
          .then(response => setBlogs(response.data.blogs))
          .catch(error => console.error('Error fetching blogs:', error));
      }, []);

const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };



  return (
  <div>
  <section className='bg-light'>
  <div className='container pb-14 pt-16'>
        <h1 className='text-4xl font-bold text-left pb-10'>
        Insights & Ideas
        </h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map(blog => (
              <motion.div 
                key={blog.id}
                variants={ FadeUp(blog.delay)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}} 
                className="p-6 bg-gray-100 shadow-lg rounded-2xl hover:bg-white hover:scale-110 
                duration-300 hover:shadow-2xl cursor-pointer" 
                onClick={() => openModal(blog)} // Open modal on click
              >
                <img src={blog.photo_url} alt={blog.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p>{blog.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
           </div>
    </section>
      
      {selectedBlog && <BlogModal blog={selectedBlog} isOpen={isModalOpen} onClose={closeModal} />}
      </div>
        )



}

export default Blogs