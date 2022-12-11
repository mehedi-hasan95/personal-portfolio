import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    const current = new Date();
    const date = `${current.getFullYear()}`;
    return (
        <footer className="bg-gray-800 text-gray-50 mt-16">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li><p>&copy; {date} Md. Mehedi Hasan </p></li>
                </ul>
                <div className="flex flex-col justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <a href='https://www.linkedin.com/in/mehedi-hasan95/' title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900">
                            <FaLinkedinIn />
                        </a>
                        <a href='https://github.com/mehedi-hasan95' title="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900">
                            <FaGithub />
                        </a>
                        <a href='https://www.facebook.com/mehedi995' title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900">
                            <FaFacebookF />
                        </a>
                        <a href="mailto:mehedi.hasan100@outlook.com" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900">
                            <SiGmail />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;