import { useEffect, useState } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useLocationData = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  const { postApiCall } = useApi();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await postApiCall("countries", {});
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        Message.error(error.message);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry.length > 0) {
      const fetchStates = async () => {
        try {
          const response = await postApiCall("states", {
            countryIds: selectedCountry,
          });
          setStates(response.data);
          setCities([]); // Reset cities when country changes
        } catch (error) {
          console.error("Error fetching states:", error);
          Message.error(error.message);
        }
      };
      fetchStates();
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState.length > 0) {
      const fetchCities = async () => {
        try {
          const response = await postApiCall("cities", {
            stateIds: selectedState,
          });
          setCities(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
          Message.error(error.message);
        }
      };
      fetchCities();
    }
  }, [selectedState]);

  return {
    countries,
    states,
    cities,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
  };
};

export default useLocationData;
