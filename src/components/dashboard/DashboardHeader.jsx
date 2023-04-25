import React from "react";
import logo from "../../assets/images/logo.png";
import NavButton from "./NavButton";
import { message, notification } from "./dasboardIcons";

export default function DashboardHeader() {
  return (
    <div className="mx-auto lg:ml-80">
      <section className="p-7 bg-light-secondary dark:bg-dark-secondary shadow-xl">
        <nav>
          <div className="relative flex items-center gap-4">
            <div className="flex items-center mr-auto">
              <button className="flex items-center">
                <span className="flex justify-center items-center mr-3 w-6 h-6 rounded-full">
                  <img src={logo} alt="logo" />
                </span>
                <p className="text-gray-700 dark:text-dark-paragraph text-sm font-medium mr-2">
                  Dashboard
                </p>
              </button>
            </div>
            <ul className="flex lg:justify-end gap-4">
              <NavButton
                title="Number of text messages left"
                to="/panel/buysms"
                icon="0"
              />
              <NavButton
                title="Buy more text messages"
                to="/panel/buysms"
                icon={message}
              />
              <NavButton
                title="Notification settings"
                to="/panel/settings"
                icon={notification}
              />
            </ul>
            <div className="hidden lg:block">
              <button className="flex items-center text-gray-700 dark:text-dark-paragraph">
                <p className="text-sm mr-3">example@example.com</p>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
