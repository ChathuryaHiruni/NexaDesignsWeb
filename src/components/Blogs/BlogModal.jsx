import React from 'react'
import PropTypes from 'prop-types';

const BlogModal = ({ blog, isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg w-3/4 max-h-96 overflow-auto">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-black text-3xl focus:outline-none" 
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Blog Image */}
        <img src={blog.photo_url} alt={blog.title} className="w-full h-60 object-cover mb-4 rounded-lg" />
        
        {/* Blog Title */}
        <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
        
        {/* Blog Description */}
        <p className="text-gray-700 mb-4">{blog.description}</p>
        
        {/* Blog Content (HTML) */}
        <div className="blog-content">
          <div 
            className="prose prose-lg"  // Tailwind typography utility for better readability
            dangerouslySetInnerHTML={{ __html: blog.content_html }} 
          />
        </div>
      </div>
    </div>
  );

}

BlogModal.propTypes = {
    blog: PropTypes.shape({
      photo_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content_html: PropTypes.string.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default BlogModal