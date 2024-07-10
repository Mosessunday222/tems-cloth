import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="bg-pink-200 py-6">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="mb-4">
                        <p className="text-white text-center">Subscribe to our newsletter</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 mb-2 sm:mb-0 sm:mr-4 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                            Contact Us
                        </button>
                    </div>
                    <ul className="flex justify-center space-x-6 text-black text-2xl cursor-pointer">
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="hover:text-black transition duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-black transition duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <FaGoogle className="hover:text-black transition duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-black transition duration-300" />
                            </a>
                        </li>
                    </ul>
                   
                </div>
            </footer>
        </>
    );
}

export default Footer;
