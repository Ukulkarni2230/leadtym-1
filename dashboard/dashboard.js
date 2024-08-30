import React, { useState, useEffect } from "react";
import ProfileCompletion from "./ProfileCompletion";
import KycVerification from "./KycVerification";
import StatsCard from "./StatsCard";
import AccountInfo from "../wallet-and-cards/add-funds/AccountInfo";
import DealRevenueChart from "./deals-revenue-chat";
import WalletActivity from "./WalletActivity";
import Cashflow from "./Cashflow";
import RegionTrafficMap from "./RegionTrafficMap";
import CustomerClick from "./CustomerClick";
import ProductFunnelCircular from "./ProductFunnelCircular";
import ProductFunnel from "./ProductFunnel";
import useDocumentUpload from "@/src/hooks/user-service/useDocumentUpload";
import { useUser } from "@/src/hooks/user-service/useUser";
import useVisibility from "@/src/hooks/user-service/useVisibility";
import PublisherAccountInfo from "../wallet-and-cards/add-funds/PublisherAccountInfo";

const data = [
  { title: "Click", value: 21500, performancePercentage: 1.2 },
  { title: "Unique Clicks", value: 5392, performancePercentage: -2.84 },
  { title: "Conversion", value: 5392, performancePercentage: 1.2 },
  { title: "Click Ratio", value: 5392, performancePercentage: -2.84 },
  { title: "ROI", value: 5392, performancePercentage: 1.2 },
];

const dataforcou = [
  { country: "United States", value: 70 },
  { country: "Brazil", value: 50 },
  { country: "India", value: 30 },
  { country: "China", value: 60 },
  { country: "Nigeria", value: 40 },
];

const Dashboard = () => {
  const { fetchDocuments } = useDocumentUpload();
  const { userDetails } = useUser();
  const isAgency = useVisibility(["agency", "affiliate", "brand"]);
  const isIndividual = useVisibility(["individual", "influencer"]);
  const visibleForAdvertiser = useVisibility(["brand", "agency"]);

  const [uploadedDocuments, setUploadedDocuments] = useState({});
  const [existingDocs, setExistingDocs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [missingDocuments, setMissingDocuments] = useState([]);
  const [requiredDocuments, setRequiredDocuments] = useState([]);

  useEffect(() => {
    if (isAgency) {
      setRequiredDocuments([
        { title: "GST Certificate", mandatory: true },
        { title: "Incorporation Certificate", mandatory: true },
        { title: "Company Pan card", mandatory: true },
      ]);
    } else if (isIndividual) {
      setRequiredDocuments([
        { title: "Adhar card", mandatory: true },
        { title: "Pan card", mandatory: true },
        { title: "GST Certificate", mandatory: false },
      ]);
    }
  }, [isAgency, isIndividual]);

  useEffect(() => {
    const fetchUserDocuments = async () => {
      const docs = await fetchDocuments(userDetails.userId);
      setExistingDocs(docs);
      console.log(docs, "fetch");
      const uploaded = {};
      docs.forEach((doc) => {
        uploaded[doc.document_type] = true;
      });
      setUploadedDocuments(uploaded);
    };
    if (userDetails.userId) {
      fetchUserDocuments();
    }
  }, [userDetails.userId]);

  useEffect(() => {
    if (requiredDocuments.length > 0) {
      calculateKycStatus(uploadedDocuments);
    }
  }, [requiredDocuments, uploadedDocuments]);

  const calculateKycStatus = (uploaded) => {
    const mandatoryDocuments = requiredDocuments.filter((doc) => doc.mandatory);
    const totalMandatory = mandatoryDocuments.length;
    const uploadedMandatory = mandatoryDocuments.filter(
      (doc) => uploaded[doc.title]
    ).length;

    const progress = (uploadedMandatory / totalMandatory) * 100;
    setProgress(progress);

    const missing = mandatoryDocuments
      .filter((doc) => !uploaded[doc.title])
      .map((doc) => doc.title);
    setMissingDocuments(missing);
  };

  return (
    <div className="w-full p-2 sm:p-6">
      <div className="lg:flex gap-2 lg:gap-6 space-y-4 lg:space-y-0">
        <div className="lg:w-1/2 w-full">
          <ProfileCompletion />
        </div>
        <div className="lg:w-1/2 w-full">
          <KycVerification
            progress={progress}
            missingDocuments={missingDocuments}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:mt-6 mt-4">
        {data.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            performancePercentage={item.performancePercentage}
          />
        ))}
      </div>
      <div className="lg:flex gap-2 lg:gap-6  sm:mt-6 mt-4 space-y-4 lg:space-y-0  items-start">
        <div className="lg:w-1/2 w-full flex">
          {visibleForAdvertiser ? <AccountInfo /> : <PublisherAccountInfo />}
        </div>
        <div className="lg:w-1/2 w-full flex">
          <DealRevenueChart />
        </div>
      </div>
      <div className="lg:flex gap-2 lg:gap-6 sm:mt-6 mt-4 space-y-4 lg:space-y-0 items-start">
        <div className="lg:w-1/2 w-full flex h-[400px]">
          {" "}
          {/* Set fixed height */}
          <WalletActivity />
        </div>
        <div className="lg:w-1/2 w-full flex h-[400px]">
          {" "}
          {/* Set fixed height */}
          <Cashflow />
        </div>
      </div>
      {/* <div className="lg:flex gap-2 lg:gap-6 sm:mt-6 mt-4 space-y-4 lg:space-y-0 items-start">
        <div className="lg:w-1/2 w-full flex ">
          <RegionTrafficMap data={dataforcou} />
        </div>
        <div className="lg:w-1/2 w-full flex h-[400px]">
          <Cashflow />
        </div>
      </div> */}
      <div className="lg:flex gap-x-2 lg:gap-x-6 sm:mt-6 mt-4 space-y-4 lg:space-y-0 items-start">
        <div className="lg:w-[32%] sm:min-w-[387px] w-full flex h-[390px]">
          <CustomerClick />
        </div>
        {/* <div className="lg:w-[32%] w-full flex h-[390px]">
          <ProductFunnelCircular />
        </div> */}
        <div className=" w-full flex h-[390px]">
          <ProductFunnel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
