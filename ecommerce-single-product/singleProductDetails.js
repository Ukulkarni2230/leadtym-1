"use client";

import React from "react";
import BasicTabs from "./productDetailsTab";
import SingleProductDetail from "./singleProductDetail";

const ProductDeatil = () => {
     return (
          <div className="flex items-center">
               <SingleProductDetail />
               <BasicTabs />
          </div>
     )
}

export default ProductDeatil;