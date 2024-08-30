import { useState, useEffect } from "react";
import useLocationData from "@/src/hooks/user-service/useLocationData";
import { useDispatch, useSelector } from "react-redux";
import { updateCampaignCreateFormData } from "@/src/Redux/actions/campaignCreateFormActions";

const useTargetingForm = () => {
  const dispatch = useDispatch();
  const { targeting } = useSelector((state) => state.campaignCreateForm);

  const {
    countries,
    states,
    cities,
    setSelectedCountry: fetchStatesForCountries,
    setSelectedState: fetchCitiesForStates,
  } = useLocationData();

  const [selectedCountry, setSelectedCountry] = useState(
    targeting?.selectedCountry || []
  );
  const [selectedState, setSelectedState] = useState(
    targeting?.selectedState || []
  );
  const [selectedCity, setSelectedCity] = useState(
    targeting?.selectedCity || []
  );
  const [selectedDeviceTargeting, setSelectedDeviceTargeting] = useState(
    targeting?.selectedDeviceTargeting || []
  );
  const [selectedGenderTargeting, setSelectedGenderTargeting] = useState(
    targeting?.selectedGenderTargeting || []
  );
  const [selectedAgeTargeting, setSelectedAgeTargeting] = useState(
    targeting?.selectedAgeTargeting || []
  );

  const deviceOptions = [
    { id: "mobile", title: "Mobile" },
    { id: "tablet", title: "Tablet" },
    { id: "desktop", title: "Desktop" },
  ];

  const genderOptions = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];

  const ageOptions = [
    { id: "16-20", title: "16-20" },
    { id: "21-25", title: "21-25" },
    { id: "26-30", title: "26-30" },
    { id: "31-35", title: "31-35" },
    { id: "36-40", title: "36-40" },
    { id: "41-45", title: "41-45" },
    { id: "46-50", title: "46-50" },
  ];

  // Update Redux store when any selected values change
  useEffect(() => {
    dispatch(
      updateCampaignCreateFormData("targeting", {
        selectedCountry,
        selectedState,
        selectedCity,
        selectedDeviceTargeting,
        selectedGenderTargeting,
        selectedAgeTargeting,
      })
    );
  }, [
    selectedCountry,
    selectedState,
    selectedCity,
    selectedDeviceTargeting,
    selectedGenderTargeting,
    selectedAgeTargeting,
    dispatch,
  ]);

  useEffect(() => {
    if (selectedCountry.length > 0) {
      fetchStatesForCountries(selectedCountry);
    } else {
      setSelectedState([]);
    }
  }, [selectedCountry, fetchStatesForCountries]);

  useEffect(() => {
    if (selectedState.length > 0) {
      fetchCitiesForStates(selectedState);
    } else {
      setSelectedCity([]);
    }
  }, [selectedState, fetchCitiesForStates]);

  const formatOptions = (options) => {
    if (!options || !Array.isArray(options)) {
      return [];
    }
    return options.map((option) => ({
      id: option._id,
      title: option.name,
      stateId: option.stateId,
    }));
  };

  const getStateLabels = (states) => {
    const stateLabels = {};
    states.forEach((state) => {
      stateLabels[state._id] = state.name;
    });
    return stateLabels;
  };

  const stateLabels = getStateLabels(states);

  return {
    countries: formatOptions(countries),
    states: formatOptions(states),
    cities: formatOptions(cities),
    stateLabels,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    deviceOptions,
    selectedDeviceTargeting,
    setSelectedDeviceTargeting,
    genderOptions,
    selectedGenderTargeting,
    setSelectedGenderTargeting,
    ageOptions,
    selectedAgeTargeting,
    setSelectedAgeTargeting,
    handleSaveAndNext: () => {
      dispatch(
        updateCampaignCreateFormData("targeting", {
          selectedCountry,
          selectedState,
          selectedCity,
          selectedDeviceTargeting,
          selectedGenderTargeting,
          selectedAgeTargeting,
        })
      );
    },
  };
};

export default useTargetingForm;
