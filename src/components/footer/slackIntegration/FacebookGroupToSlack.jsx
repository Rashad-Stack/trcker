import React from "react";
import slackToFacebook from "../../../assets/images/facebook-groups-to-slack.png";

export default function FacebookGroupToSlack() {
  return (
    <div className="w-full">
      <div className="mb-10 max-w-2xl mx-auto text-center">
        <div className="mt-2">
          <h2 className="text-light-title dark:text-white mb-6 text-4xl lg:text-5xl font-bold font-heading">
            Facebook Groups to Slack
          </h2>
        </div>
      </div>
      <div className="mb-10">
        <img
          className="w-full h-80 object-cover rounded-lg"
          style={{ height: "24rem" }}
          src={slackToFacebook}
          alt="sending facebook groups posts to slack"
        />
      </div>
      <div className="w-full">
        <br />
        <h3 className="text-light-title dark:text-white my-2 text-3xl lg:text-4xl font-bold mb-4 ">
          Introduction
          <br />
        </h3>
        <p className="text-gray-700 dark:text-dark-paragraph">
          How to monitor posts and comments on Facebook groups and automatically
          send to Slack?
          <br />
          <br />
          Use GroupsTracker.com, add groups, keywords and click Slack
          integration.
        </p>
      </div>
    </div>
  );
}
