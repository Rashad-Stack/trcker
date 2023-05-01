import React from "react";
import lowerPriceGroouplyImg from "../../../assets/images/lower-price-groouply.svg";
import { Link } from "react-router-dom";

export default function MuchLowerPrice() {
  return (
    <div className="relative flex">
      <div className="hidden lg:absolute inset-y-0 left-0 -ml-6 lg:flex items-center">
        {" "}
      </div>{" "}
      <div className="w-full lg:w-4/5 lg:ml-auto lg:pl-8">
        <img
          className="max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded "
          src={lowerPriceGroouplyImg}
          alt="80% lower prices then groouply.com"
        />
        <div className="lg:hidden mt-12 text-center" />
        <div className="lg:absolute top-0 left-0 mt-12 lg:mt-20 max-w-xl mx-auto lg:mx-0 p-6 lg:py-24 rounded border-gray-50 shadow-xl bg-light-tertiary dark:bg-dark-tertiary text-center">
          <span className="font-bold text-gray-700 dark:text-dark-paragraph">
            80% lower
          </span>
          <h2 className="text-4xl font-bold font-heading text-light-title dark:text-white">
            Much lower price
          </h2>
          <br />
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
            $5/group instead of $25 (Groouply) and no minimal monthly fee ($500
            Groouply)
          </p>
          <br />
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph text-xs leading-loose">
            Based on a price list (groouply.com/pricing) - 16.12.2021 (
            <Link
              className="font-bold text-primary"
              to="/atis-assets/illustrations/groouply.com-pricing.png"
            >
              screenshot
            </Link>
            ). Now prices are hidden.{" "}
          </p>
        </div>
      </div>
      <div className="hidden lg:absolute inset-y-0 right-0 -mr-8 lg:flex items-center">
        {" "}
      </div>{" "}
    </div>
  );
}
