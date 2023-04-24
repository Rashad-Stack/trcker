import React from "react";
import fbGroup from "../../../assets/images/api-facebook-groups.svg";

export default function FacebookWebhookHeader() {
  return (
    <div className="w-full py-20">
      <div className="mb-10 text-center">
        <div className="mt-2">
          <h2 className="text-light-title dark:text-white mb-6 text-4xl lg:text-5xl font-bold font-heading">
            API - Webhooks for Facebook Groups
          </h2>
        </div>
      </div>
      <div className="mb-10">
        <img
          className="w-full h-80 object-cover rounded-lg"
          src={fbGroup}
          alt="face book group api"
        />
      </div>
      <div className="max-w-2xl">
        <br />
        <h3 className="text-light-title dark:text-white my-2 text-3xl lg:text-4xl font-bold mb-4 ">
          Introduction
          <br />
        </h3>
        <p className="text-gray-700 dark:text-dark-paragraph">
          Can I use the API for Facebook groups?
          <br />
          Can I get notifications about new posts or comments with my keywords?
          <br />
          <br />
          Yes.
          <br />
          <br />
          Just use GroupsTracker.com Webhooks.
        </p>
      </div>
    </div>
  );
}
