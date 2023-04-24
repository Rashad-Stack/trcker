import React, { useState } from "react";
import { SubmitButton } from "../ui";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSend = (event) => {
    event.preventDefault();
    console.log({ name, message });
  };
  return (
    <div className="inset-0 flex justify-center items-center ml-auto w-full lg:w-3/5">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto py-10">
          <h3 className="text-light-title dark:text-white mb-2 text-4xl lg:text-5xl font-bold font-heading !leading-relaxed">
            Got questions? Let&apos;s talk about it.
          </h3>
          <form onSubmit={handleSend}>
            <div className="mb-4">
              <input
                className="border w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                data-temp-mail-org={0}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="border w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none"
                name="message"
                type="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
              />
            </div>
            <div className="mb-4"> </div>{" "}
            <div className="flex justify-between items-center">
              <SubmitButton title="Send" colored />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
