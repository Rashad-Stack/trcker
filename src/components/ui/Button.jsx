import { Link } from "react-router-dom";

export default function Button({ title, to, colored, big }) {
  return (
    <Link
      className={`${
        big
          ? "inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose font-semibold text-center"
          : "inline-block py-2 px-6 text-sm font-bold"
      } ${
        colored ? "bg-primary text-white" : "bg-gray-300 text-black"
      } rounded-l-xl rounded-t-xl`}
      to={to}
    >
      {title}
    </Link>
  );
}
