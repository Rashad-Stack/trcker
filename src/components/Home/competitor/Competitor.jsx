import React from "react";
import success from "../../../assets/images/success.svg";
import ListItem from "./ListItem";

export default function Competitors() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
            <div className="max-w-md">
              <span className="text-primary font-bold">
                Monitor facebook groups for keywords
              </span>
              <h2 className="text-light-title dark:text-white mb-6 text-4xl lg:text-5xl font-bold font-heading !leading-relaxed">
                Always before competitors
              </h2>
              <ul>
                <ListItem
                  title="Sell more"
                  description="Find out immediately that someone is looking for the
                      services you offer."
                />
                <ListItem
                  title="Track mentions about you"
                  description="Put out fires before they escalate."
                />
                <ListItem
                  title="Monitor your competitors"
                  description="Monitor your competitors' activity and recommend your
                      services."
                />
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
            <img src={success} alt="gain new clients from facebook groups" />
          </div>
        </div>
      </div>
    </section>
  );
}
