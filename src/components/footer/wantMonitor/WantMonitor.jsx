import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui";

export default function WantMonitor() {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
        Want to monitor facebook groups?
      </h2>
      <Button colored title="Get started" to="/register" />
    </div>
  );
}
