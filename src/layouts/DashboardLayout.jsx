import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Aside, DashboardHeader } from "../components/dashboard";

export default function DashboardLayout({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <section className="min-h-screen bg-light-secondary dark:bg-dark-secondary">
        <Aside />
        <DashboardHeader />
        {children}
      </section>
    </div>
  );
}
