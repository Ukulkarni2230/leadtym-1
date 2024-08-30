import React, { useState, useEffect } from "react";
import InputField from "@/src/components/reuseable/textField";
import PrimaryButton from "@/src/components/reuseable/primaryButton";
import { RiLinksLine } from "react-icons/ri";
import { MdRemoveCircleOutline } from "react-icons/md";
import PlatformPopup from "@/src/components/pages/onBoard/userDetails/users/PlatformPopup";

const platformPatterns = {
  twitter: /^(https?:\/\/)?(www\.)?twitter\.com/,
  linkedin: /^(https?:\/\/)?(www\.)?linkedin\.com/,
  youtube: /^(https?:\/\/)?(www\.)?youtube\.com/,
  facebook: /^(https?:\/\/)?(www\.)?facebook\.com/,
  instagram: /^(https?:\/\/)?(www\.)?instagram\.com/,
};

const basicUrlPattern =
  /^(https?:\/\/)?(www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(:\d+)?(\/.*)?$/;

const validateUrl = (platform, url) => {
  if (platformPatterns[platform.toLowerCase()]) {
    return platformPatterns[platform.toLowerCase()].test(url);
  }
  return basicUrlPattern.test(url);
};

const InfluencerStep = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  load,
}) => {
  const [additionalLinks, setAdditionalLinks] = useState([
    { platform: "Instagram", url: "" },
    { platform: "Facebook", url: "" },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      additionalLinks.every((link) => validateUrl(link.platform, link.url)) &&
      additionalLinks.every((link) => link.url.trim() !== "");
    setIsFormValid(isValid);
  }, [additionalLinks]);

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
      acc[`${link.platform.toLowerCase()}URL`] = link.url;
      return acc;
    }, {});
    handleChange("about")({ target: { value: JSON.stringify(about) } });
  }, [additionalLinks]);

  return (
    <>
      {additionalLinks.map((link, index) => (
        <div className="mb-7 space-y-8 flex items-center" key={index}>
          <InputField
            label={`${link.platform} URL`}
            placeholder={`https://${link.platform.toLowerCase()}.com/`}
            required={index < 2}
            errorText="Invalid URL."
            inputProps={{
              inputMode: "url",
              maxLength: 100,
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
      <PrimaryButton
        type="submit"
        isLoading={load}
        py="2.5"
        className="w-full py-2 text-white font-bold rounded-full text-sm sm:text-base 2xl:text-lg transition duration-300"
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        Submit
      </PrimaryButton>
    </>
  );
};

export default InfluencerStep;
