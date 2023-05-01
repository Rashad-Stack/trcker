import React, { useState } from "react";
import { DashboardLayout } from "../../layouts";

export default function Groups() {
  const [groupLink, setGropeLink] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ groupLink });
  };

  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80 px-8">
        <div className="container mx-auto">
          <section className="py-8">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-stretch -m-4">
                <div className="w-full p-4 lg:w-2/3">
                  <form onSubmit={handleSubmit}>
                    <div className="overflow-hidden rounded shadow-xl bg-light-tertiary dark:bg-dark-tertiary">
                      <div className="px-6 pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm text-gray-700 dark:text-dark-paragraph">
                            Start tracking
                          </p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-light-title dark:text-white">
                            Add a new Facebook group
                          </h3>
                          <p className="text-sm text-gray-700 dark:text-dark-paragraph mb-4">
                            Copy and paste link to group you want to track
                          </p>
                        </div>
                        <div>
                          <input
                            className="bg-light-secondary dark:bg-dark-secondary form-input leading-relaxed text-light-title dark:text-white border-none w-full  px-3 py-2 text-base rounded-md outline-none"
                            type="text"
                            name="url"
                            value={groupLink}
                            onChange={(e) => setGropeLink(e.target.value)}
                            required
                            placeholder="ex.: https://www.facebook.com/group..."
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-lightGray-50">
                        <div />
                        <button
                          className="px-3 py-2 text-sm font-bold text-white transition bg-primary rounded cursor-pointer"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container mx-auto">
          <div>
            <div className="px-4">
              <h2 className="text-light-title dark:text-white text-2xl font-bold fmb-4">
                Tracked Facebook groups 0
              </h2>
            </div>
            <section className="py-8">
              <div className="container mx-auto">
                <div className="p-4 mb-6 bg-light-tertiary dark:bg-dark-tertiary rounded shadow-xl">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="text-xs text-left text-gray-500">
                        <th className="text-gray-700 dark:text-dark-paragraph pb-3 font-medium">
                          Group
                        </th>
                        <th className="text-gray-700 dark:text-dark-paragraph pb-3 font-medium">
                          Posts/
                          <br />
                          Comments
                        </th>
                        <th className="text-gray-700 dark:text-dark-paragraph pb-3 font-medium">
                          Members/
                          <br />
                          Fetched
                        </th>
                        <th className="text-gray-700 dark:text-dark-paragraph pb-3 font-medium">
                          Found
                        </th>
                        <th className="text-gray-700 dark:text-dark-paragraph pb-3 font-medium">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody />
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
