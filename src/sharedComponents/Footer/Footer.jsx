import logo from '../../assets/logo.png'
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import {  FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-slate-100 dark:bg-gray-700 mt-12 sm:mt-18 lg:mt-24'>
            <footer className="w-11/12 py-5 sm:py-10 mx-auto flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
                <div>
                    <img className='w-14 sm:w-20' src={logo} alt="" />
                    <h2 className='text-3xl sm:text-4xl font-mono font-bold'><span className='text-primary'>R</span>entr</h2>
                    <p className='sm:w-3/5 text-xs'>Wide selection of cars to choose your perfect one for your journey. Trusted by both car enthusiastas and regular users!</p>
                </div>
                <div className='sm:w-1/4 flex flex-col sm:justify-end sm:items-end'>
                    <p className="font-medium text-lg">Find us on:</p>
                    <div className="flex pt-2 gap-2 text-xl lg:text-2xl xl:text-3xl">
                    <Link to="https://github.com/ashis263"><FaSquareGithub className='text-[]' /></Link>
                    <Link to="https://www.linkedin.com/in/ashis263/"><FaLinkedin className='text-[#0077B5]' /></Link>
                    <Link to="https://www.facebook.com/ashis263/"><FaFacebookSquare className='text-[#1877F2]' /></Link>
                    </div>
                </div>
            </footer>
            <hr />
            <p className="text-xs text-center py-2">Copyright © {new Date().getFullYear()} - All right reserved by Rentr</p>
        </div>
    );
}

export default Footer;
