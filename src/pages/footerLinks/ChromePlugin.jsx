import React from "react";
import { Main } from "../../layouts";
import { Comments } from "../../components/HowItWorks";
import ChromePluginImg from "../../assets/images/chrome-plugin-for-monitoring-facebook-groups.png";
import ChoromePluginList from "../../components/footer/choromePlugin/choromePluginList";
import HowToUse from "../../components/footer/HowToUse/HowToUse";
import HowToWork from "../../components/footer/howToWork/HowToWork";
import WantMonitor from "../../components/footer/wantMonitor/WantMonitor";


export default function ChromePlugin() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <div className="mb-10 max-w-2xl mx-auto text-center">
            <div className="mt-2">
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
                Chrome plugin for Facebook Groups
              </h2>
            </div>
          </div>

          <div className="mb-10">
            <img
              className="w-full h-80 object-cover rounded-lg"
              style={{ height: "24rem" }}
              src={ChromePluginImg}
              alt="chrome plugin to monitor facebook groups"
            />
          </div>

          <div className="w-full ml-2 lg:ml-8 lg:py-32 py-12 ">
            <br />
            <h3 className="my-2 text-3xl lg:text-4xl font-bold mb-4 text-light-title dark:text-white">
              What plugin can do?
              <br />
            </h3>
            <p className="  text-gray-700 dark:text-dark-paragraph">
              GroupsTracker.com plugin for Chrome allowes you to:
              <br />
              <br />
            </p>
            <ul>
              {" "}
              <ChoromePluginList title="monitor any facebook group (public or private)"/>
              <ChoromePluginList title="follow a group, even if you are not the group's admin, but only
                a member"/>
              <ChoromePluginList title="follow posts and comments by keywords"/>
              <ChoromePluginList title="et notified whenever a new post with your keyword is published"/>
              <ChoromePluginList title="turn off your computer as all work is done on the server"/>
              
            </ul>
            <p />
          </div>
          <HowToUse />
          <HowToWork />
          <WantMonitor />
        </div>
        <Comments />
      </section>
    </Main>
  );
}
