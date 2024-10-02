import React , { useState }from 'react'
import { FaCode, FaPallet, FaClipboardList} from "react-icons/fa";
import {motion} from "framer-motion";
import PropTypes from 'prop-types';

const Modal = ({ isVisible, onClose, content }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-[50%] relative z-60">
            <button onClick={onClose} className="absolute top-2 right-2 text-2xl">
              &times;
            </button>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">{content.title}</h2>
              <p className="mt-4">{content.description}</p>
            </div>
          </div>
        </div>
      );
};

    Modal.propTypes = {
        isVisible: PropTypes.bool.isRequired,   // Ensure isVisible is a required boolean
        onClose: PropTypes.func.isRequired,     // Ensure onClose is a required function
        content: PropTypes.shape({              // Validate content structure
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired,
      };

const ServiceData = [
    {
        id:1,
        title: "Web Development",
        description: "Custom websites tailored to your business needs.",
        link:"#",
        icon:<FaCode />,
        delay: 0.2,
    },
    {
        id:2,
        title: "UI/UX Design",
        description: "Creating user-friendly designs for better engagement.",
        link:"#",
        icon:<FaPallet />,
        delay: 0.3,
    },
    {
        id:3,
        title: "Content Strategy",
        description: "Effective blogging to enhance your online presence.",
        link:"#",
        icon:<FaClipboardList />,
        delay: 0.3,
    },
]
const SlideLeft =(delay) => {
    return{
        initial: {
            opacity: 0,
            x: 50,
        },
        animate:{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease:"easeInOut",

            }
        }
    }
}
const Service = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  return (
  <section className='bg-white'>
    <div className='container pb-14 pt-16'>
        <h1 className='text-4xl font-bold text-left pb-10'>
        Our Expertise
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-1
        md:grid-cols-3 gap-10'>
        {ServiceData.map((services) => (
                <motion.div 
                key={services.id}
                variants={SlideLeft(services.delay)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}}
                className='bg-[#f4f4f4] rounded-2xl flex
                flex-col gap-4 items-center justify-center p-4
                py-7 hover:bg-white hover:scale-110 
                duration-300 hover:shadow-2xl cursor-pointer'
                onClick={() => handleCardClick(services)}>
                    <div className='text-4xl mb-4'> {services.icon}</div>
                    <h1 className='text-lg font-semibold 
                    text-center px-3'>{services.title}</h1>
                </motion.div>
            ))}
            </div>
    </div>
     {/* Modal */}
     {selectedService && (
        <Modal
          isVisible={isModalVisible}
          onClose={closeModal}
          content={selectedService}
        />
      )}
  </section>
  );
};

export default Service