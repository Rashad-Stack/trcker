import React from "react";
import { Link } from "react-router-dom";

import slackAccess from "../../../assets/images/slack-groupstracker.png";

export default function FewEasyStep() {
  return (
    <div className="w-full py-10">
      <div className="max-w-4xl ml-2 lg:ml-8">
        <div className="flex flex-wrap -mx-6">
          <div className="mb-6 w-full lg:w-1/2 px-6">
            <h2 className="text-light-title dark:text-white my-2 text-3xl lg:text-4xl font-bold mb-4">
              Few easy steps
            </h2>
            <ol style={{ listStyle: "decimal" }}>
              <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
                <Link className="text-primary font-bold" to="/register">
                  Register{" "}
                </Link>
                your account
                <br />
              </li>
              <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
                <Link className="text-primary font-bold" to="/groups">
                  Add{" "}
                </Link>
                Facebook groups
                <br />
              </li>
              <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
                <Link className="text-primary font-bold" to="/keywords">
                  Add{" "}
                </Link>
                keywords
                <br />
              </li>
              <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
                Click integration with your Slack account.
                <br />
                On the next screen choose channel for notifications
                <br />
                and that is all.
                <a href="https://slack.com/oauth/v2/authorize?client_id=27468531776.4439229078307&scope=incoming-webhook&user_scope=&redirect_uri=https://www.groupstracker.com/api/slack/callback&state=E5yrRW9hstjg0FKb">
                  <img
                    alt="Add to Slack"
                    height={40}
                    width={139}
                    src="https://platform.slack-edge.com/img/add_to_slack.png"
                    srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                  />
                </a>
              </li>
            </ol>
          </div>
          <div className="w-full lg:w-1/2 px-6 h-80">
            <img
              className="h-full mx-auto object-cover rounded-lg"
              src={slackAccess}
              alt="slack-groupstracker"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
