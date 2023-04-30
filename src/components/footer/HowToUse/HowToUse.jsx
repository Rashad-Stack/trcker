import React from "react";
import { Button, SubmitButton } from "../../ui";
import { Link } from "react-router-dom";
import howToImg from "../../../assets/images/chrome-plugin-for-facebook-groups.png";
import ChoromePluginList from "../choromePlugin/choromePluginList";

export default function HowToUse() {
  return (
    <div className="w-full ml-2 lg:ml-8">
      <div className="flex flex-wrap -mx-6">
        <div className="mb-6 w-full lg:w-1/2 px-6">
          <h2 className="my-2 text-3xl lg:text-4xl font-bold mb-4 text-light-title dark:text-white">
            How to use it?
          </h2>
          <ol>
            <ChoromePluginList
              title={
                <>
                  <Link
                    className="text-primary font-bold"
                    to="https://www.groupstracker.com/register"
                  >
                    Register{" "}
                  </Link>
                  your GroupsTracker.com account
                </>
              }
            >
              <span className="font-bold text-sm">1</span>
            </ChoromePluginList>
            <ChoromePluginList
              title={
                <>
                  <Link
                    className="text-primary font-bold"
                    to="https://www.groupstracker.com/panel/keywords"
                  >
                    Add{" "}
                  </Link>
                  keywords
                </>
              }
            >
              <span className="font-bold text-sm">2</span>
            </ChoromePluginList>

            <ChoromePluginList
              title={
                <>
                  <Link
                    className="text-primary font-bold"
                    to="https://chrome.google.com/webstore/detail/groupstrackercom/jgbdphmoclnmdghecindoaiecjaljjkp"
                  >
                    Chrome Web Store
                  </Link>
                  <span>Install Chrome plugin from </span>
                </>
              }
            >
              <span className="font-bold text-sm">3</span>
            </ChoromePluginList>

            <li className="text-gray-700 dark:text-dark-paragraph">
              <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto text-center">
                  <br />
                  <Button
                    colored
                    title="Install plugin"
                    to="https://chrome.google.com/webstore/detail/groupstrackercom/jgbdphmoclnmdghecindoaiecjaljjkp"
                  />
                </div>
              </div>
              <br />
            </li>
            <ChoromePluginList
              title={
                <>
                  Go to the Facebook Group you want to track and click button
                  <b>"Monitor group"</b>
                </>
              }
            >
              <span className="font-bold text-sm">4</span>
            </ChoromePluginList>

            <ChoromePluginList
              title={
                <>
                  Wait a few minutes for group approval and that's it. You will
                  receive notifications <br /> (email, Slack, webhooks) about
                  new posts and comments with your keywords.
                </>
              }
            >
              <span className="font-bold text-sm">5</span>
            </ChoromePluginList>
          </ol>
        </div>
        <div className="w-full lg:w-1/2 px-6 h-80">
          <img
            className="h-full mx-auto object-cover rounded-lg"
            src={howToImg}
            alt="how to use image"
          />
        </div>
      </div>
    </div>
  );
}
