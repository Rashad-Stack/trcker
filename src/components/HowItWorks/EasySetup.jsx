import React from "react";
import SetupCard from "./SetupCard";

export default function EasySetup() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-16 mx-auto max-w-md text-center">
          <span className="text-primary font-bold">Easy setup</span>
          <h2 className="text-light-title dark:text-white text-4xl lg:text-5xl font-bold font-heading !leading-relaxed">
            How GroupsTracker works?
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <SetupCard
            free
            index="1"
            title="Sign up (for free)"
            description="It's free, easy and fast (takes 1 minute)"
          />
          <SetupCard
            index="2"
            title="Add Facebook groups"
            description="Add links to the groups you want to monitor"
          />
          <SetupCard
            last
            index="3"
            title="Add keywords"
            description=" If only any of the keywords appear in post or comment, you will
            be notified"
          />
        </div>
      </div>
    </section>
  );
}
