import React from "react";

import slackFacebookPost from "../../../assets/images/slack-facebook-posts.png";

export default function HowItWorks() {
  return (
    <div className="w-full py-20">
      <div className="max-w-4xl ml-2 lg:ml-8">
        <div className="flex flex-wrap -mx-6">
          <div className="mb-6 w-full lg:w-1/2 px-6">
            <h2 className="text-light-title dark:text-white my-2 text-3xl lg:text-4xl font-bold mb-4">
              How it works?
            </h2>
            <ol style={{ listStyle: "decimal" }}>
              <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
                GroupsTracker is watching Facebook groups{" "}
              </li>
              <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
                When new post is published you get Slack message with all the
                details: <p>Author </p>
                <p>Post content </p>
                <p>Post Url </p>
                <p>Image</p>
              </li>
            </ol>
          </div>
          <div className="w-full lg:w-1/2 px-6 h-80">
            <img
              className="h-full mx-auto object-cover rounded-lg"
              src={slackFacebookPost}
              alt="slack-facebook-posts"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
