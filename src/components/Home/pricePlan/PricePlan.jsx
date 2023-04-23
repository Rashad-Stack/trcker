import React from "react";

import Button from "./Button";
import ListItem from "./ListItem";

export default function PricePlan() {
  return (
    <section className="py-20 bg-light-secondary dark:bg-dark-secondary">
      <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold text-primary">Simple plans</span>
          <h2 className="mb-2 text-4xl font-bold text-black dark:text-white lg:text-5xl font-heading">
            Choose your best plan
          </h2>
          <p className="mb-6 text-gray-700 dark:text-dark-paragraph">
            You can change plan anytime. Includes taxes.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="p-8 rounded shadow-xl bg-light-tertiary dark:bg-dark-tertiary">
              <h4 className="mb-2 text-2xl font-bold text-light-title dark:text-white font-heading">
                Private
              </h4>
              <span className="text-6xl font-bold text-light-title dark:text-white">
                Free
              </span>
              <p className="mt-3 mb-6 leading-loose text-gray-700 dark:text-dark-paragraph">
                Best for individuals to test system
              </p>
              <ul className="mb-6 text-gray-700 dark:text-dark-paragraph">
                <ListItem title="1 public group" />
                <ListItem title="checking new posts: 1/day" />
                <ListItem title="1 keyword" />
              </ul>
              <Button title="Get Started" to="/plan/0" big />
            </div>
          </div>
          <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="p-8 rounded shadow-xl bg-primary">
              <h4 className="mb-2 text-2xl font-bold text-white">Business</h4>
              <span className="text-6xl font-bold text-white ">
                <span className="text-3xl line-through">$10</span>$5
              </span>
              <span className="text-xs text-gray-50">/group/month</span>
              <p className="mt-3 mb-6 leading-loose text-gray-50">
                Best for monitoring public Facebook Groups
              </p>{" "}
              <ul className="mb-6 text-gray-50">
                <ListItem title="any public groups" />
                <ListItem title="checking new posts: 6/day" />
                <ListItem title="unlimited keywords" />
                <ListItem title="unlimited posts &amp; comments" />
              </ul>
              <Button active title="Get Started" to="/plan/0" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div className="relative p-8 rounded shadow-xl bg-light-tertiary dark:bg-dark-tertiary">
              <h4 className="mb-2 text-2xl font-bold text-light-title dark:text-white font-heading">
                Enterprise
              </h4>
              <span className="text-6xl font-bold text-light-title dark:text-white">
                <span className="text-3xl line-through">$20</span>$10
              </span>
              <span className="text-xs text-gray-700 dark:text-dark-paragraph">
                /group/month
              </span>
              <p className="mt-3 mb-6 leading-loose text-gray-700 dark:text-dark-paragraph">
                Best for monitoring public &amp; private Facebook groups
              </p>
              <ul className="mb-6 text-gray-700 dark:text-dark-paragraph">
                <ListItem title="any public &amp; private groups" />
                <ListItem title="checking new posts: 1/hour" />
                <ListItem title="unlimited keywords &amp; posts" />
                <ListItem title="instant notifications" />
                <ListItem title="group members downloading" />
                <ListItem
                  link
                  title="API, Webhooks"
                  to="/api-for-facebook-groups"
                />
                <ListItem
                  link
                  title="Slack integration"
                  to="/slack-integration-for-facebook-groups"
                />
              </ul>
              <Button title="Get Started" to="/plan/0" />
            </div>
          </div>
          <div className="w-full px-4 mt-8 text-center">
            <div
              className="w-full p-8 rounded shadow-xl bg-light-tertiary dark:bg-dark-tertiary lg:w-1/2"
              style={{ margin: "auto" }}
            >
              <h4 className="mb-2 text-2xl font-bold text-light-title dark:text-white font-heading">
                Custom
              </h4>
              <p className="mt-3 mb-6 leading-loose text-gray-700 dark:text-dark-paragraph">
                If you need custom functions
              </p>
              <ul className="mb-6 text-gray-700 dark:text-dark-paragraph">
                <ListItem title="checking new posts: 1/min" />
                <ListItem title="downloading all posts/comments" />
                <ListItem title="other functions you need" />
              </ul>
              <Button title="Contact us" to="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
