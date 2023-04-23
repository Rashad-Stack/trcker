import React from "react";
import heroImage from "../../assets/images/facebook-groups-monitor6.svg";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className={`bg-light-secondary dark:bg-dark-secondary bg-[url('../assets/images/light_lines.svg')] dark:bg-[url('../assets/images/dark_lines.svg')] overflow-hidden bg-no-repeat bg-cover`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-wrap -mx-4 pt-20 pb-20">
          <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
            <div className="w-full text-center lg:text-left">
              <div className="max-w-md mx-auto lg:mx-0">
                <h1 className="mb-3 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white !leading-relaxed">
                  <span>
                    Track <span className="text-primary">keywords </span>in
                    <span className="text-primary"> any </span>Facebook Group
                  </span>
                </h1>
              </div>
              <div className="max-w-sm mx-auto lg:mx-0">
                <p className="mb-6 text-gray-700 dark:text-dark-paragraph leading-loose">
                  Follow public and private Facebook groups. Receive alerts and
                  notifications as soon as there is a new post or comment with
                  your keyword even if you are not an admin.
                </p>
                <div>
                  <Button
                    title="Get Started"
                    to="/register"
                    big
                    colored
                  />
                  <Button
                    title="How it works"
                    to="/how-it-works"
                    big
                  />
    
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2  flex items-center justify-center">
            <img
              className="h-full"
              src={heroImage}
              alt="facebook groups following"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
