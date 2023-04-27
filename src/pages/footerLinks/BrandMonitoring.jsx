import React from "react";
import { Main } from "../../layouts";
import { Comments } from "../../components/HowItWorks";
import brandMonitorImg from "../../assets/images/facebook-group-brands-monitor.png";
import BrandMonitoringHowDo from "../../components/footer/brandMonitoring/brandMonitoringHowDo/BrandMonitoringHowDo";
import BrandMonitoringHowItWork from "../../components/footer/brandMonitoring/brandMonitoringHowItWork/BrandMonitoringHowItWork";
import { Link } from "react-router-dom";
import BrandMonitoryWhy from "../../components/footer/brandMonitoring/brandMonitorWhy/BrandMonitoryWhy";

export default function BrandMonitoring() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <div className="mb-10 max-w-2xl mx-auto text-center">
            {" "}
            <div className="mt-2">
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
                How to monitor brands on Facebook Groups
              </h2>
            </div>
          </div>

          <div className="mb-10">
            <img
              className="w-full h-80 object-cover rounded-lg"
              style={{ height: "24rem" }}
              src={brandMonitorImg}
              alt="brands monitoring on facebook groups"
            />
          </div>
          <BrandMonitoryWhy />
          <BrandMonitoringHowDo />
          <BrandMonitoringHowItWork />

          <div className="max-w-xl mx-auto text-center">
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
              Want to monitor brands on facebook groups?
            </h2>
            <Link
              className="inline-block py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
              to="/register"
            >
              Get started
            </Link>
          </div>
        </div>
        <Comments />
      </section>
    </Main>
  );
}
