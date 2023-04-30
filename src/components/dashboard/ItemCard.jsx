import React from "react";
import { facebook } from "./dasboardIcons";

export default function ItemCard() {
  return (
    <div className="w-full lg:w-1/2 bg-light-tertiary dark:bg-dark-tertiary rounded">
      <div className="flex flex-wrap gap-4">
        <div className="w-32">
          <img
            src="https://randomuser.me/api/portraits/women/60.jpg"
            alt="user"
          />
        </div>
        <div>
          <h2 className="text-light-title dark:text-white text-lg font-bold">
            John Landing
          </h2>
          <p className="text-sm text-gray-700 dark:text-dark-paragraph">
            Berkshire Hathaway HomeService Woodmont reality
          </p>
        </div>
        <div>
          <span>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M430.91 32H81.09C55.38 32 35 52.38 35 78.09v355.82c0 25.71 20.38 46.09 46.09 46.09h349.82c25.71 0 46.09-20.38 46.09-46.09V78.09C477 52.38 456.62 32 430.91 32zM370 204h-55.72c-13.38 0-14.22 5.09-14.22 14.47v52.36h69.34l-9.13 69.33h-60.21v177.84h-73.45V339.16H166v-69.33h62.66v-52.36c0-60.88 37.29-94.14 91.39-94.14 26.93 0 56.29 5.06 56.29 5.06l7.68-52.52s-33.84-9.15-64.53-9.15c-83.55 0-137.14 50.79-137.14 142.48v60.03H142v69.33h52.66v177.84h73.45V339.16h55.71L370 204z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
