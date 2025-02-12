import logo from '../../assets/logo.png'
import { FaSquareGithub, FaLinkedin, FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
    return (
        <div className='bg-slate-100 dark:bg-gray-700 mt-12 sm:mt-18 lg:mt-24'>
            <footer className="w-11/12 py-5 sm:py-10 mx-auto flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
                <div className='sm:flex-1'>
                    <img className='w-14 sm:w-20' src={logo} alt="" />
                    <h2 className='text-3xl sm:text-4xl font-mono font-bold'><span className='text-primary'>R</span>entr</h2>
                    <p className='text-xs'>Wide selection of cars to choose your perfect one for your journey. Trusted by both car enthusiastas and regular users!</p>
                </div>
                <div className='sm:self-end sm:flex-1'>
                    <p className='text-xl font-medium'>Quick Links</p>
                    <div className='flex flex-col'>
                        <Link to="/">Home</Link>
                        <Link to="/cars">Available Cars</Link>
                        <Link to="/blogs">Blogs</Link>
                    </div>
                </div>
                <div className='sm:w-1/4 flex flex-col sm:justify-end sm:items-end sm:self-end sm:flex-1'>
                    <AnchorLink href="#header" className="text-center mb-5 btn btn-ghost hover:bg-transparent flex px-0 max-sm:hidden"><FaArrowRightLong className="-rotate-90 text-sm text-primary" /> Go to top</AnchorLink>
                    <p className="font-medium text-lg">Find us on:</p>
                    <div className="flex pt-2 gap-2 text-xl lg:text-2xl xl:text-3xl">
                        <Link to="https://github.com/ashis263"><FaSquareGithub className='text-[]' /></Link>
                        <Link to="https://www.linkedin.com/in/ashis263/"><FaLinkedin className='text-[#0077B5]' /></Link>
                        <Link to="https://www.facebook.com/ashis263/"><FaFacebookSquare className='text-[#1877F2]' /></Link>
                    </div>
                </div>
            </footer>
            <hr />
            <AnchorLink href="#header" className="text-center py-0 btn btn-ghost hover:bg-transparent flex px-0 sm:hidden"><FaArrowRightLong className="-rotate-90 text-sm text-primary" /> Go to top</AnchorLink>
            <p className="text-xs text-center max-sm:pb-2 sm:py-2">Copyright © {new Date().getFullYear()} - All right reserved by Rentr</p>
        </div>
    );
}

export default Footer;
