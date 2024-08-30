import React, { useState, useEffect } from "react";
import InputField from "@/src/components/reuseable/textField";
import { RiLinksLine } from "react-icons/ri";
import { MdRemoveCircleOutline } from "react-icons/md";
import PlatformPopup from "./PlatformPopup";

const platformPatterns = {
  facebook: /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9._-]+$/,
  instagram: /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9._-]+$/,
  // Add more platform-specific patterns here as needed
};

const validateUrl = (platform, url) => {
  const pattern = platformPatterns[platform.toLowerCase()];
  return pattern ? pattern.test(url) : false;
};

const InfluencerUser = ({ onFormValidation, setAbout }) => {
  const [additionalLinks, setAdditionalLinks] = useState([
    { platform: "Facebook", url: "" },
    { platform: "Instagram", url: "" },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const isValid = additionalLinks.every((link) =>
      validateUrl(link.platform, link.url)
    );
    onFormValidation(isValid);
  }, [additionalLinks, onFormValidation]);

  const handleAddLink = (platform) => {
    if (additionalLinks.some((link) => link.platform === platform)) {
      setError(`${platform} link already exists.`);
      return;
    }
    if (additionalLinks.length < 4) {
      setAdditionalLinks([...additionalLinks, { platform, url: "" }]);
      setError("");
    }
    setShowPopup(false);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...additionalLinks];
    newLinks[index].url = value;
    setAdditionalLinks(newLinks);
  };

  const handleRemoveLink = (index) => {
    if (additionalLinks.length > 1) {
      const newLinks = additionalLinks.filter((_, i) => i !== index);
      setAdditionalLinks(newLinks);
    }
  };

  useEffect(() => {
    const about = additionalLinks.reduce((acc, link) => {
      acc[`${link.platform.toLowerCase()}_url`] = link.url;
      return acc;
    }, {});
    setAbout(about);
  }, [additionalLinks, setAbout]);

  return (
    <>
      {additionalLinks.map((link, index) => (
        <div className="mb-7 flex items-center" key={index}>
          <InputField
            label={`${link.platform} URL`}
            placeholder={`https://${link.platform.toLowerCase()}.com/`}
            required={index < 2}
            errorText="Invalid URL."
            inputProps={{
              inputMode: "url",
              maxLength: 50,
              className:
                "border-b focus:outline-none focus:border-b-2 focus:border-black",
            }}
            value={link.url}
            onChange={(e) => handleLinkChange(index, e.target.value)}
            validationFunc={(value) => validateUrl(link.platform, value)}
          />
          <button
            type="button"
            className={`ml-2 text-red-500 ${
              additionalLinks.length === 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => handleRemoveLink(index)}
            disabled={additionalLinks.length === 1}
          >
            <MdRemoveCircleOutline size={24} />
          </button>
        </div>
      ))}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <p
          className={`text-[#0D41C9] text-[11px] flex my-5 gap-[2px] items-center sm:text-[12px] 2xl:text-[14px] font-normal cursor-pointer ${
            additionalLinks.length >= 4 ? "opacity-50" : ""
          }`}
          onClick={() => setShowPopup(true)}
          style={{
            pointerEvents: additionalLinks.length >= 4 ? "none" : "auto",
          }}
        >
          <RiLinksLine /> Add another link
        </p>
      </div>
      {showPopup && (
        <PlatformPopup
          onAddLink={handleAddLink}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default InfluencerUser;
