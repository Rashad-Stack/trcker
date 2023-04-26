import React from "react";
import { Link } from "react-router-dom";

export default function WantMonitor() {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
        Want to monitor facebook groups?
      </h2>
      <Link
        className="inline-block py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
        to="/register"
      >
        Get started
      </Link>
    </div>
  );
}
