import React, { useState } from "react";
import Input from "@/src/components/reuseable/Input";

const ECommerceContent = () => {
  const [appVariation, setAppVariation] = useState("app");
  const [appVersion, setAppVersion] = useState("IOS");
  const [appStatus, setAppStatus] = useState("available");

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2 text-[#666666] text-xs sm:text-sm 2xl:text-base">
          Select your app variation
        </label>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#666666] text-xs sm:text-sm 2xl:text-base mt-3">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="variation"
              value="app"
              checked={appVariation === "app"}
              onChange={() => setAppVariation("app")}
            />
            <span>App</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="variation"
              value="web"
              checked={appVariation === "web"}
              onChange={() => setAppVariation("web")}
            />
            <span>Web</span>
          </label>
        </div>
      </div>

      {appVariation === "app" && (
        <>
          <div className="mb-4">
            <label className="block mb-2 text-[#666666] text-xs sm:text-sm 2xl:text-base">
              Select your app Version
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#666666] text-xs sm:text-sm 2xl:text-base mt-3">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="version"
                  value="Android"
                  checked={appVersion === "Android"}
                  onChange={() => setAppVersion("Android")}
                />
                <span>Android</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="version"
                  value="IOS"
                  checked={appVersion === "IOS"}
                  onChange={() => setAppVersion("IOS")}
                />
                <span>IOS</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-[#666666] text-xs sm:text-sm 2xl:text-base">
              Select your app status on Google Play
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#666666] text-xs sm:text-sm 2xl:text-base mt-3">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="available"
                  checked={appStatus === "available"}
                  onChange={() => setAppStatus("available")}
                />
                <span>Available in Store</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="pending"
                  checked={appStatus === "pending"}
                  onChange={() => setAppStatus("pending")}
                />
                <span>Pending approval/not Published</span>
              </label>
            </div>
          </div>

          <div className="mb-4 w-full">
            <Input
              size="small"
              label="App URL *"
              placeholder="http://example.com/page.php?subid1={traffic_id}&subid2={publisher_id}&cost={cost}"
            />
          </div>
        </>
      )}

      {appVariation === "web" && (
        <>
          <div className="mb-4 w-full">
            <Input
              size="small"
              label="App URL *"
              placeholder="http://example.com/page.php?subid1={traffic_id}&subid2={publisher_id}&cost={cost}"
            />
          </div>
          <div className="mb-4 w-full">
            <Input size="small" label="App name *" placeholder="My app name" />
          </div>
        </>
      )}

      <div className="flex justify-end">
        <button className="gradient-bg border border-transparent text-white px-6 py-[6px] sm:w-[110px] h-[42px] 2xl:w-[120px] sm:items-center sm:flex sm:justify-center whitespace-nowrap sm:px-0 sm:py-0 text-sm sm:text-base 2xl:text-lg rounded-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default ECommerceContent;
