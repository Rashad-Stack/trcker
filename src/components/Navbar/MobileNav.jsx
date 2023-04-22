import React from "react";
import { Link, useMatch } from "react-router-dom";
import { FaTwitter, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";

import { Button } from "../ui";
import logo from "../../assets/images/logo.png";

export default function MobileNav({ isMenuOpen, onClick }) {
  return (
    <div
      className={`flex md:hidden flex-col justify-between fixed min-h-full h-screen w-full sm:w-96 bg-light-secondary dark:bg-dark-tertiary left-0 top-0 p-4 transition-all ease-in-out ${
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
        <ul className="md:hidden flex flex-col gap-8 mt-10">
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/"
              className={
                useMatch("/")
                  ? "font-bold text-primary"
                  : "text-sm text-gray-400 hover:text-gray-500 font-semibold"
              }
            >
              Start
            </Link>
          </li>
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/how-it-works"
              className={
                useMatch("/how-it-works")
                  ? "font-bold text-primary"
                  : "text-sm text-gray-400 hover:text-gray-500 font-semibold"
              }
            >
              How it works
            </Link>
          </li>
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/price"
              className={
                useMatch("/price")
                  ? "font-bold text-primary"
                  : "text-sm text-gray-400 hover:text-gray-500 font-semibold"
              }
            >
              Pricing
            </Link>
          </li>
          <li className="text-gray-300 flex gap-4 items-center">
            <Link
              to="/contact"
              className={
                useMatch("/contact")
                  ? "font-bold text-primary"
                  : "text-sm text-gray-400 hover:text-gray-500 font-semibold"
              }
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <Button title="Sign in" onClick={() => null} />
        <Button title="Sign up" onClick={() => null} colored />
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
