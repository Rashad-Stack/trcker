import React from "react";
import { Main } from "../../layouts";
import { Comments } from "../../components/HowItWorks";
import MemberExtractingImg from "../../assets/images/membersExtracting1.png";
import WhyMemberExtracting from "../../components/footer/memberExtracting/WhyMemberExtracting";
import MemberExtractingHowDo from "../../components/footer/memberExtracting/MemberExtractingHowDo";
import MemberExtractingHowWorks from "../../components/footer/memberExtracting/MemberExtractingHowWorks";
import { Link } from "react-router-dom";

export default function MemberExtracting() {
  return (
    <Main>
      <section className=" bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <div className="mb-10 max-w-2xl mx-auto text-center">
            {" "}
            <div className="mt-2">
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
                How to extract members from Facebook Groups
              </h2>
            </div>
          </div>

          <div className="mb-10">
            <img
              className="w-full h-80 object-cover rounded-lg"
              style={{ height: "24rem" }}
              src={MemberExtractingImg}
              alt="facebook groups members extracting"
            />
          </div>

          <WhyMemberExtracting />
          <MemberExtractingHowDo />
          <MemberExtractingHowWorks />

          <div className="text-center my-8 lg:max-w-lg ">
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white !leading-relaxed">
              Run facebook group extractor now
            </h2>
            <Link
              className=" py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
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
