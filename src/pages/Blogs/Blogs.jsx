import axios from "axios";
import { useEffect, useState } from "react";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('https://rentr-server.vercel.app/blogs/')
            .then(res => setBlogs(res.data))
    }, []);
    return (
        <div className="animate__animated animate__fadeIn w-11/12 mx-auto">
            <HelmetProvider>
                <Helmet>
                    <title>Rentr | Blogs</title>
                </Helmet>
                <div className="mb-5 sm:mb-15">
                    <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary pb-2 sm:pb-5">Blogs</h1>
                </div>
                <div>
                    {
                        blogs.length !== 0
                            ?
                            <div className="grid gc-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-5 sm:pt-10 sm:gap-5">
                                {
                                    blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                                }
                            </div>
                            :
                            <div className="grid gc-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-5 sm:pt-10 sm:gap-5">
                                <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                                    <div className="skeleton h-36 w-full dark:bg-gray-700"></div>
                                </div>
                                <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                                    <div className="skeleton h-36 w-full dark:bg-gray-700"></div>
                                </div>
                                <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                                    <div className="skeleton h-36 w-full dark:bg-gray-700"></div>
                                </div>
                                <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                                    <div className="skeleton h-36 w-full dark:bg-gray-700"></div>
                                </div>
                                <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                                    <div className="skeleton h-36 w-full dark:bg-gray-700"></div>
                                </div>
                                <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                                    <div className="skeleton h-36 w-full dark:bg-gray-700"></div>
                                </div>
                            </div>
                    }
                </div>
            </HelmetProvider>
        </div>
    );
}

export default Blogs;
