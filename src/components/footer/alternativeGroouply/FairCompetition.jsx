import React from "react";
import groouplyLawyerImg from "../../../assets/images/groouplyLawyer1.jpg";
import groouplyLawyer2Img from "../../../assets/images/groouplyLawyer2.jpg";

export default function FairCompetition() {
  return (
    <div className="relative flex mt-8 lg:mt-28">
      <div className="hidden lg:absolute inset-y-0 left-0 -ml-6 lg:flex items-center">
        {" "}
      </div>{" "}
      <div className="w-full lg:w-4/5 lg:mr-auto bg-white rounded lg:p-16 lg:pr-32">
        <img
          className=" max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded"
          src={groouplyLawyerImg}
          alt="groouply.com  frightening and lawsuits 1"
        />
        <img
          className=" max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded"
          src={groouplyLawyer2Img}
          alt="groouply.com  frightening and lawsuits 2"
        />
        <div className="lg:hidden mt-12 text-center" />
        <div className="lg:absolute top-0 right-0 mt-12 lg:mt-20 max-w-xl mx-auto lg:mx-0 p-6 lg:py-24 rounded border-gray-50 shadow-xl text-center bg-light-tertiary dark:bg-dark-tertiary">
          <span className="font-bold text-gray-700 dark:text-dark-paragraph">
            Focus on quality, not frightening and lawsuits
          </span>
          <h2 className="text-4xl font-bold font-heading text-light-title dark:text-white">Fair competition</h2>
          <br />
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
            When it turned out that Groouply.com could not buy our site, Mike
            Rubini(owner) and his lawyers have decided to fight us by
            intimidating lawsuits rather than trying to do a better service. We
            enclose a scan of the letter in which they demand that this page be
            removed and stop comparing with their service.
            <br />
            <br />
            We belive that customers should know varius options to make a better
            choice.{" "}
          </p>{" "}
        </div>
      </div>
      <div className="hidden lg:absolute inset-y-0 right-0 -mr-8 lg:flex items-center">
        {" "}
      </div>{" "}
    </div>
  );
}
