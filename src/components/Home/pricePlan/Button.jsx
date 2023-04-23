import React from "react";
import { Link } from "react-router-dom";

export default function Button({ active, title, to }) {
  return (
    <Link
      className={`inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl font-bold leading-loose transition duration-200 ${
        active ? "bg-white text-black" : "bg-primary  text-white"
      }`}
      to={to}
    >
      {title}
    </Link>
  );
}
