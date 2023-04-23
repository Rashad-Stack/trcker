import React from "react";
import notify from "../../assets/images/facebook-groups-notifications.svg";

export default function QuicNotification() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="w-full flex flex-col items-center">
          <img
            className="mx-auto object-cover rounded"
            src={notify}
            alt="notify"
          />

          <div className="mt-12 xl:mt-20 max-w-xl mx-auto xl:mx-0 p-6 rounded bg-light-tertiary dark:bg-dark-tertiary border-gray-50 shadow-xl text-center">
            <h2 className="text-light-title dark:text-white text-5xl font-bold font-heading">
              Quick notifications
            </h2>
            <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
              GroupsTracker.com will notify you via: e-mail, mobile app, web
              push.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
