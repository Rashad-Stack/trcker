import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";

export default function ItemCard() {
  return (
    <div className="w-full lg:w-1/2 bg-light-tertiary dark:bg-dark-tertiary rounded p-4">
      <div className="flex flex-wrap gap-4">
        <div className="w-full sm:w-32">
          <img
            className="w-full object-cover"
            src="https://randomuser.me/api/portraits/women/60.jpg"
            alt="user"
          />
        </div>
        <div>
          <h2 className="text-light-title dark:text-white text-lg font-bold">
            John Landing
          </h2>
          <p className="text-sm text-gray-700 dark:text-dark-paragraph">
            Berkshire Hathaway HomeService Woodmont reality
          </p>
          <div className="w-full flex items-center gap-2 mt-2">
            <Link to="#" className="text-primary">
              <BsTelephoneFill size={15} />
            </Link>
            <Link to="#" className="text-primary">
              <GrFacebookOption size={20} />
            </Link>
            <Link to="#" className="text-primary">
              <HiHome size={20} />
            </Link>
          </div>
          <div className="w-full mt-4 py-2">
            <p className="flex items-center text-xs text-gray-700 dark:text-dark-paragraph mb-1">
              Posted 3 days ago in
              <Link to="#" className="flex items-center text-primary text-xs">
                Lab coat agents: Referrals (<AiFillLock size={10} />)
              </Link>
            </p>

            <p className="text-xs text-gray-700 dark:text-dark-paragraph">
              notification send via email and slack
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-t border-gray-300 dark:border-gray-700 py-6">
        <p className="text-md text-gray-700 dark:text-dark-paragraph">
          Seeking an experienced listing agent in{" "}
          <span className="bg-primary rounded-l-xl rounded-t-xl p-1">
            Austin
          </span>
          <span className="bg-primary rounded-l-xl rounded-t-xl p-1">
            Texas
          </span>
          Please PM me
        </p>
      </div>
      <div className="py-4 flex gap-3 items-center">
        <Link
          to="#"
          className="bg-blue-700 text-white rounded flex w-full md:w-32 h-10 justify-center items-center gap-1"
        >
          <GrFacebookOption /> Go to Post
        </Link>
        <Link
          to="#"
          className="bg-primary text-white py-2 px-4 rounded flex h-10 justify-center items-center gap-1  w-full md:w-32"
        >
          <BsTelephoneFill /> Call Agent
        </Link>
      </div>
    </div>
  );
}
