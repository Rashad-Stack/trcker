import React, { useState } from "react";
import { SubmitButton } from "../ui";

export default function Comments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messsage, setMessage] = useState("");

  const HandleSend = (event) => {
    event.preventDefault();

    console.log({ name, email, messsage });
  };

  return (
    <section className="bg-red-500 py-10 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold font-heading lg:text-5xl">
            Comments
          </h2>
          <p className="text-white leading-loose">
            Tell us what do you think about this article?
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full mb-16 lg:w-1/2 lg:mb-0">
            <div className="flex flex-wrap">
              <h3 className="mb-2 text-3xl font-bold lg:text-4xl">
                Write first comment
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="max-w-md lg:mx-auto">
              <form className="text-black" onSubmit={HandleSend}>
                <div className="mb-4 text-sm">
                  <span className="text-white mr-4 font-semibold">
                    Your comment
                  </span>
                  <label className="mr-4" />
                  <label />
                </div>
                <div className="mb-4" />
                <div className="mb-4">
                  <input
                    type="hidden"
                    name="url"
                    defaultValue="https://www.groupstracker.com/how-it-works"
                  />
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                    type="email"
                    placeholder="name@example.com (not visible)"
                    name="email"
                    data-temp-mail-org={0}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none"
                    type="text"
                    placeholder="Comment..."
                    name="opinion"
                    value={messsage}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="mb-4" />
                <div className="flex justify-between items-center">
                  <label />
                  <SubmitButton title="Send" colored />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
