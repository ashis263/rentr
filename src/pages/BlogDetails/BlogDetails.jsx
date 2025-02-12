import { useLoaderData } from "react-router-dom";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const BlogDetails = () => {
    const blog = useLoaderData();
    return (
        <div className="animate__animated animate__fadeIn w-11/12 mx-auto shadow-xl p-5 rounded-xl">
            <HelmetProvider>
                <Helmet>
                    <title>{`Rentr | ${blog.title}`}</title>
                </Helmet>
                <div className="sm:w-2/3 mx-auto">
                    <img className="w-full sm:w-2/3 mx-auto rounded-xl mb-5 sm:mb-10 border" src={blog.photoURL} alt="blog cover" />
                    <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl sm:pt-0 font-bold text-primary pb-2 sm:pb-5">{blog.title}</h2>
                    <p className="mb-5 sm:mb-10 text-justify">{blog.description}</p>
                </div>
            </HelmetProvider>
        </div>
    );
}

export default BlogDetails;
