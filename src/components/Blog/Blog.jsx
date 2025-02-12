import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';


const Blog = ({ blog }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isBtnHovered, setIsBtnHovered] = useState(false);
    return (
        <div className='animate__animated animate__fadeIn flex flex-col gap-5 font-medium text-center items-center justify-center shadow bg-gray-50 dark:bg-gray-700 rounded-xl dark:shadow-2xl  p-5 h-[30vh]'>
            <img onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} className={`${isBtnHovered ? 'opacity-20' : ''} w-4/5 rounded-xl hover:opacity-20 duration-1000`} src={blog.photoURL} alt="blog cover" />
            <Link onMouseEnter={() => {
                setIsVisible(true);
                setIsBtnHovered(true);
            }} onMouseLeave={() => setIsBtnHovered(false)} to={`/blog/${blog._id}`} className={`${isVisible ? '' : 'hidden'} absolute btn btn-wide px-10 my-5 btn-sm bg-gradient-to-r from-[#01769a86] via-[#20758a] dark:to-[#01769a86] text-white border-none hover:bg-primary text-xs duration-1000`}>View Blog</Link>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
};


export default Blog;
