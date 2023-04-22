import React from "react";
import { Link } from "react-router-dom";

export default function FormHeader({title}) {
  return (
    <>
      <div className="header font-bold text-[#161C24] dark:text-white text-md py-4 sm:py-6 px-6 sm:px-10 border-b border-[#424250]">
        {title}
      </div>

      <div className="RegWLink p-5">
        <h5 className="text-[#161C24] dark:text-white text-center">
          {title} with one of the following:
        </h5>
        <div className="allLinks flex justify-center mt-3">
          <Link to="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="h-9 w-9 cursor-pointer text-[#AD1418] mr-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </Link>
          <Link to="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="h-9 w-9 cursor-pointer text-[#AD1418] mr-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </Link>
        </div>
      </div>
      {/* orr */}
      <div
        className="text-center  relative before:content-[''] before:block max-[415px]:before:w-[130px]  before:w-[200px] before:h-[2px] before:absolute before:left-0 before:top-1/2  before:bg-[#424250] before:ml-7 
     after:content-[''] after:block  max-[415px]:after:w-[130px] after:w-[200px] after:h-[2px] after:absolute after:right-0 after:top-1/2  after:bg-[#424250] after:mr-7"
      >
        <span className="text-white bg-[#33333D]">OR</span>
      </div>
    </>
  );
}
