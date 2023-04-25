import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import DashBoardLink from "./DashBoardLink";
import {
  affiliate,
  dashboard,
  groups,
  help,
  hits,
  keywords,
  logout,
  members,
  payments,
  settings
} from "./dasboardIcons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { ThemeToggle } from "../ui";

export default function DesktopAside() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="hidden lg:block navbar-menu relative z-50">
      <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10" />
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-light-secondary dark:bg-dark-secondary border-r border-gray-300 dark:border-gray-800  overflow-y-auto scrollbar-none">
        <div className="flex justify-between w-full items-center px-6 pb-6 mb-6 lg:border-b border-gray-300 dark:border-gray-800">
          <Link className="text-xl font-semibold" href="/panel">
            <img className="h-8" src={logo} alt="logo" width="auto" />
          </Link>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        </div>
        <div className="px-4 pb-6">
          <h3 className="mb-2 text-xs uppercase text-light-title dark:text-white font-medium">
            Main
          </h3>
          <ul className="mb-8 text-sm font-medium">
            <li>
              <DashBoardLink title="Dashboard" to="/panel" icon={dashboard} />
            </li>
            <li>
              <DashBoardLink title="Groups" to="/panel/groups" icon={groups} />
            </li>
            <li>
              <DashBoardLink
                title="Keywords"
                to="/panel/keywords"
                icon={keywords}
              />
            </li>
            <li>
              <DashBoardLink
                title="Found posts &amp; comments"
                to="/panel/hits"
                icon={hits}
              />
            </li>
            <li>
              <DashBoardLink
                title="Members"
                to="/panel/members"
                icon={members}
              />
            </li>
          </ul>
          <h3 className="mb-2 text-xs uppercase text-light-title dark:text-white font-medium">
            Secondary
          </h3>
          <ul className="text-sm font-medium">
            <li>
              <DashBoardLink
                title="Payments"
                to="/panel/payments"
                icon={payments}
              />
            </li>
            <li>
              <DashBoardLink
                title="Affiliate"
                to="/panel/affiliate"
                icon={affiliate}
              />
            </li>
            <li>
              <DashBoardLink
                title="Settings"
                to="/panel/settings"
                icon={settings}
              />
            </li>
          </ul>
          <div className="pt-8 text-sm font-medium">
            <DashBoardLink title="Help" to="/help" icon={help} />
            <DashBoardLink title="Log Out" to="/logout" icon={logout} />
          </div>
        </div>
      </nav>
    </div>
  );
}
