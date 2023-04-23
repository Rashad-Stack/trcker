import React from "react";
import signUp from "../../assets/images/pablo-coming-soon-light-color.png";
import { Button } from "../ui";

export default function SignupSection() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 order-1 lg:order-0">
            <h2 className="text-light-title dark:text-white mb-4 text-4xl md:text-5xl font-bold font-heading">
              Sign up for free
            </h2>
            <p className="mb-8 text-gray-700 dark:text-dark-paragraph leading-loose">
              Be first to know when somebody talks about you, your products or
              your competitors.
            </p>
          <Button title=" Get Started" to="/register" colored big/>
          </div>
          <div className="w-full lg:w-1/2 px-4 order-0 lg:order-1 mb-8 lg:mb-0">
            <img src={signUp} alt="pablo-coming-soon-light-color" />
          </div>
        </div>
      </div>
    </section>
  );
}
