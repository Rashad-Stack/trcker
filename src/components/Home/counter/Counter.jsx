import React from "react";
import ListItem from "./ListItem";

export default function Counter() {
  return (
    <section className="bg-light-tertiary dark:bg-dark-tertiary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="py-4 flex flex-wrap items-center text-center rounded-lg border border-gray-200 dark:border-gray-700">
          <ListItem title="Groups tracked" count="1820"/>
          <ListItem title="Posts found" count="1532307"/>
          <ListItem title="Comments saved" count="6148458"/>
          <ListItem title="Notifications sent" count="201285" last/>
        </div>
      </div>
    </section>
  );
}
