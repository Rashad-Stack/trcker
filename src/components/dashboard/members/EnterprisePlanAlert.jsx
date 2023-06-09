import React from "react";
import { Link } from "react-router-dom";

export default function EnterprisePlanAlert() {
  return (
    <div className="py-8 px-6">
      <div className="p-6 border-l-4 border-primary bg-primary rounded-r-lg">
        <div className="flex">
          <div className="w-auto">
            <span className="w-auto inline-block mr-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 15C9.4 15 9 14.6 9 14C9 13.4 9.4 13 10 13C10.6 13 11 13.4 11 14C11 14.6 10.6 15 10 15ZM11 10C11 10.6 10.6 11 10 11C9.4 11 9 10.6 9 10V6C9 5.4 9.4 5 10 5C10.6 5 11 5.4 11 6V10Z"
                  fill="#FADDDA"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div className="flex mb-2">
              <h3 className="text-white font-medium">
                Enterprise plan required
              </h3>
              <button className="ml-auto text-white" >
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.93341 6.00008L11.1334 1.80008C11.4001 1.53341 11.4001 1.13341 11.1334 0.866748C10.8667 0.600081 10.4667 0.600081 10.2001 0.866748L6.00008 5.06675L1.80008 0.866748C1.53341 0.600081 1.13341 0.600081 0.866748 0.866748C0.600082 1.13341 0.600082 1.53341 0.866748 1.80008L5.06675 6.00008L0.866748 10.2001C0.733415 10.3334 0.666748 10.4667 0.666748 10.6667C0.666748 11.0667 0.933415 11.3334 1.33341 11.3334C1.53341 11.3334 1.66675 11.2667 1.80008 11.1334L6.00008 6.93341L10.2001 11.1334C10.3334 11.2667 10.4667 11.3334 10.6667 11.3334C10.8667 11.3334 11.0001 11.2667 11.1334 11.1334C11.4001 10.8667 11.4001 10.4667 11.1334 10.2001L6.93341 6.00008Z"
                  fill="currentColor"
                />
              </svg>
              </button>
           
            </div>
            <div className="pr-6" />
            <p className="text-sm text-white">
              <button className="font-bold inline-block text-center m-1 p-2 text-xs text-primary bg-white border rounded">
                Activate
              </button>
              the Enterprise plan to download group members and analyze their
              activity, send messages and likes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
