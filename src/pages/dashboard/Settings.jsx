import React, { useState } from "react";
import { DashboardLayout } from "../../layouts";
import {
  CheckBox,
  OwnServer,
  SettingsDropdown
} from "../../components/dashboard/settings";
import { Link } from "react-router-dom";

export default function Settings() {
  const [isPostsChecked, setIsPostsChecked] = useState(false);
  const [isAuthorChecked, setIsAuthorChecked] = useState(false);
  const [isCommentsChecked, setIsCommentsChecked] = useState(false);
  const [isViaEmailChecked, setIsViaEmailChecked] = useState(false);
  const [isViaWebhookChecked, setIsViaWebhookChecked] = useState(false);
  const [isViaTextMsgChecked, setIsViaTextMsgChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isOwnServer, setIsOwnServer] = useState(false);

  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80 px-8">
        <div className="container mx-auto">
          <h2 className="text-light-title dark:text-white mt-4 mb-4 text-2xl font-bold">
            Settings:
          </h2>
          <div className="flex items-center gap-8">
            <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/3">
              <p className="text-light-title dark:text-white mb-8">Track:</p>
              <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-800 mb-8">
                <CheckBox
                  title="Posts"
                  isChecked={isPostsChecked}
                  setCheckedHandler={setIsPostsChecked}
                />
                <CheckBox
                  title="Author"
                  isChecked={isAuthorChecked}
                  setCheckedHandler={setIsAuthorChecked}
                />
                <CheckBox
                  title="Comments"
                  isChecked={isCommentsChecked}
                  setCheckedHandler={setIsCommentsChecked}
                />
              </div>
              <div className="mb-6">
                <p className="text-light-title dark:text-white mb-6">
                  Notifications:
                </p>
                <SettingsDropdown
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </div>
              <div className="flex items-center">
                <CheckBox
                  title="via emails"
                  isChecked={isViaEmailChecked}
                  setCheckedHandler={setIsViaEmailChecked}
                />
                <CheckBox
                  title="via webhooks"
                  isChecked={isViaWebhookChecked}
                  setCheckedHandler={setIsViaWebhookChecked}
                />
              </div>
              <div className="mb-6 w-full inline-block">
                <Link to="https://slack.com/oauth/v2/authorize?client_id=27468531776.4439229078307&scope=incoming-webhook&user_scope=&redirect_uri=https://www.groupstracker.com/api/slack/callback&state=LqSIBPeJHn91jwTs">
                  <img
                    alt="Add to Slack"
                    height={40}
                    width={139}
                    src="https://platform.slack-edge.com/img/add_to_slack.png"
                    srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                  />
                </Link>
              </div>
              <div className="mb-6 w-full inline-block border-b border-gray-300 dark:border-gray-800">
                <CheckBox
                  title="via text message (SMS)"
                  isChecked={isViaTextMsgChecked}
                  setCheckedHandler={setIsViaTextMsgChecked}
                />
                {isViaTextMsgChecked && (
                  <div className="mb-6">
                    <label
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-dark-paragraph"
                      htmlFor
                    >
                      Webhook URL:{" "}
                      <Link
                        className="text-primary"
                        to="/api-for-facebook-groups"
                      >
                        (more info)
                      </Link>
                    </label>
                    <input
                      className="block w-full px-4 py-3 text-sm placeholder-gray-500 bg-light-tertiary dark:bg-dark-tertiary rounded outline-none mb-6"
                      type="text"
                      placeholder="phone number, ex. +39 500 111 222"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <button
                      className="px-4 py-2 mb-2 hover:bg-primary hover:text-white border rounded border-gray-300 dark:border-gray-800 text-gray-700 dark:text-dark-paragraph"
                      onclick="return testWebhook();"
                    >
                      Test webhook
                    </button>
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-dark-paragraph"
                  htmlFor
                >
                  Email
                </label>
                <input
                  className="block w-full px-4 py-3 text-sm placeholder-gray-500 bg-light-tertiary dark:bg-dark-tertiary rounded outline-none mb-6"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="mb-6 w-full inline-block">
                  <input
                    type="checkbox"
                    name="notifyEmails"
                    checked={isOwnServer}
                    onChange={(e) => setIsOwnServer(e.target.checked)}
                  />
                  <span className="ml-2 text-sm font-medium mb-2 text-light-title dark:text-white ">
                    White label (send emails from own server)
                  </span>
                </label>
              </div>
            </div>
            {isOwnServer && <OwnServer />}
          </div>
          <div className="w-3/4 flex justify-end items-center">
          <button className="inline-block py-2 px-6 rounded bg-primary text-white font-bold leading-loose transition duration-200">Save settings</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
