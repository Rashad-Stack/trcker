import React from "react";
import { Link, useMatch } from "react-router-dom";
import { FaTwitter, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";

import { Button } from "../ui";
import logo from "../../assets/images/logo.png";

export default function MobileNav({ isMenuOpen, onClick }) {
  return (
    <div
      className={`flex lg:hidden flex-col justify-between fixed min-h-full h-screen w-full sm:w-96 bg-light-secondary dark:bg-dark-tertiary left-0 top-0 p-4 transition-all ease-in-out ${
        isMenuOpen ? "translate-x-0 z-50" : "-translate-x-full"
      }`}
    >
      <div  className="px-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-8" />
          </Link>
          <button className="dark:text-gray-300 text-gray-700" onClick={onClick}>
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="lg:hidden flex flex-col gap-8 mt-10">
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/"
              className={`font-semibold text-sm ${
                useMatch("/")
                  ? "text-primary"
                  : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
              }`}
            >
              Start
            </Link>
          </li>
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/how-it-works"
              className={`font-semibold text-sm ${
                useMatch("/how-it-works")
                  ? "text-primary"
                  : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
              }`}
            >
              How it works
            </Link>
          </li>
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/price"
              className={`font-semibold text-sm ${
                useMatch("/price")
                  ? "text-primary"
                  : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
              }`}
            >
              Pricing
            </Link>
          </li>
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/contact"
              className={`font-semibold text-sm ${
                useMatch("/contact")
                  ? "text-primary"
                  : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
              }`}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <Button title="Sign in" to="/login" big />
        <Button title="Sign up" to="/register" colored big/>
        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className="flex justify-center items-center gap-4">
          <li className="text-primary">
            <a href="#">
              <FaFacebook size={20} />
            </a>
          </li>
          <li className="text-primary">
            <a href="#">
              <FaTwitter size={20} />
            </a>
          </li>
          <li className="text-primary">
            <a href="#">
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
