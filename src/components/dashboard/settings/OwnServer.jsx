import React, { useState } from "react";
import SettingInputBox from "./SettingInputBox";

export default function OwnServer() {
  const [host, setHost] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [port, setPort] = useState(465);
  const [senderName, setSenderName] = useState(465);
  const [file, setFile] = useState();

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/3">
      <div className="mb-6">
        <div>
          <SettingInputBox
            title="Host (SMTP):"
            value={host}
            setValue={setHost}
            placeholder="ex: smtp.google.com"
          />
          <SettingInputBox
            title="Login"
            value={email}
            setValue={setEmail}
            placeholder="ex: example@example.com"
          />
          <SettingInputBox
            title="Password"
            value={password}
            setValue={setPassword}
          />
          <SettingInputBox
            title="Port"
            value={port}
            setValue={setPort}
            placeholder="usually: 465 or 587"
          />
          <SettingInputBox
            title="Sender name"
            value={senderName}
            setValue={setSenderName}
            placeholder="ex.: <john@domain.com> John Smith"
          />

          <div className="mb-6">
            <label
              className="cursor-pointer px-4 py-2 mb-2 hover:bg-primary hover:text-white text-gray-700 dark:text-dark-paragraph border border-gray-300 dark:border-gray-800 rounded"
              htmlFor="fileUpload"
            >
              Upload logo (jpg, png, 186x52px) ...
            </label>
            <p className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-700 dark:placeholder:text-dark-paragraph rounded"></p>
            <input
              type="file"
              className="hidden"
              id="fileUpload"
              onChange={handleFileUpload}
            />
          </div>
          <div className="mb-6 w-32">
            <img src={file} />
          </div>
          <div className="mb-6">
            <button className="px-4 py-2 mb-2 hover:bg-primary hover:text-white text-gray-700 dark:text-dark-paragraph border border-gray-300 dark:border-gray-800 rounded">
              Send test email
            </button>
          </div>
          <div className="mb-6">
            <p className="p-4 text-sm text-white hidden rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
