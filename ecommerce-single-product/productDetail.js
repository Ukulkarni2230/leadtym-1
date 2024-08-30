"use client";

import React, { useState } from "react";
import SingleProductDetail from "./singleProductDetail";
import SwitchBtn from "../ecommerce-affiliate/SwitchBtn";
import TopProducts from "./topProducts";
import YourEarnings from "./yourEarnings";

const ProductDeatil = () => {
     const [activeTab, setActiveTab] = useState("top_products");
     return (
          <div className="p-2 sm:p-6 lg:h-screen flex">
               <div className="bg-white rounded-md flex flex-col lg:flex-row w-full h-full">
                    <div className="lg:w-1/2 mb-3 m-2 sm:m-4 lg:my-6 lg:pr-4 lg:sticky lg:top-0 lg:h-full lg:overflow-y-auto no-scrollbar">
                         <SingleProductDetail />
                    </div>
                    <div className="lg:w-1/2 px-2 sm:px-4 lg:px-0 lg:pr-4 py-2 sm:py-4 lg:overflow-y-auto lg:overflow-x-hidden no-scrollbar lg:h-full">
                         <div className="flex justify-center mb-3">
                              <SwitchBtn activeTab={activeTab} setActiveTab={setActiveTab} />
                         </div>
                         {activeTab === "top_products" ? <TopProducts /> : <YourEarnings />}
                    </div>
               </div>
          </div>
     )
}

export default ProductDeatil;