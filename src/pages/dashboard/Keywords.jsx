import React, { useState } from "react";
import { DashboardLayout } from "../../layouts";

export default function Keywords() {
  const [keywords, setKeywords] = useState("");
  const [group, setGroup] = useState("");
  const [excludeKeyword, setExcludeKeyword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ keywords, group, excludeKeyword });
  };
  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80">
        <div className="container mx-auto">
          <div>
            <div className="container mx-auto">
              <section className="py-8">
                <div className="container mx-auto" />
                <form onSubmit={handleSubmit}>
                  <div className="p-6 bg-light-tertiary dark:bg-dark-tertiary rounded shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                      <span className="inline-block py-1 px-2 bg-red-50 text-xs text-primary rounded-full">
                        Tracking
                      </span>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-light-title dark:text-white mb-2 text-xl font-bold">
                        Add keywords
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-dark-paragraph">
                        Each keyword (separated with coma) will be checked in
                        every group you are tracking. Regular expressions are
                        allowed. <br />
                        Ex.: \\b<span>word</span>\\b - exact match, \((
                        <span>sell</span>)|(<span>buy</span>))\.*((
                        <span>car</span>)|(<span>bike</span>)|(<span>boat</span>
                        )) - sentences like: I want to buy a car, How needs to
                        sell an old boat?
                      </p>
                    </div>
                    <div className=" overflow-hidden">
                      <input type="hidden" name="id" />
                      <input
                        className="bg-light-secondary dark:bg-dark-secondary form-input leading-relaxed text-light-title dark:text-white border-none w-full  px-3 py-2 text-base rounded-md outline-none"
                        type="text"
                        placeholder="ex. barber, hairstylist, hairdresser"
                        name="keywords"
                        id="keywords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                      />
                      <div className="flex flex-wrap justify-between items-center mt-8">
                        <div className="w-full">
                          <div className="relative w-full lg:w-1/2 xl:w-1/2 ">
                            <select
                              className="appearance-none block w-full mb-2 text-sm bg-light-secondary dark:bg-dark-secondary form-input leading-relaxed text-light-title dark:text-white border-none  px-3 py-2 outline-none border rounded"
                              value={group}
                              onChange={(e) => setGroup(e.target.value)}
                            >
                              <option value="To All Groups">
                                To All Groups
                              </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-dark-paragraph">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 xl:w-1/2 ">
                          <input
                            className="border rounded"
                            type="checkbox"
                            name="exclude"
                            id="exclude"
                            checked={excludeKeyword}
                            onChange={(e) =>
                              setExcludeKeyword(e.target.checked)
                            }
                          />
                          <label
                            className="text-gray-700 dark:text-dark-paragraph p-2 text-sm "
                            htmlFor="exclude"
                          >
                            Exclude these keywords
                          </label>
                        </div>
                        <button
                          className="mt-2 inline-block w-full md:w-auto px-6 py-2 font-bold text-sm text-white bg-primary rounded duration-200 float-right transition cursor-pointer"
                          type="submit"
                          defaultValue="Add keywords"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <div className="container mx-auto">
              <h2 className="text-light-title dark:text-white fmb-4 text-2xl font-bold">
                Your keywords
              </h2>
            </div>
            <section>
              <div className="container mx-auto">
                <div className="text-gray-700 dark:text-dark-paragraph w-full py-8 font-bold">
                  All Groups{" "}
                </div>
                <div className="w-full flex flex-wrap -m-4" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
