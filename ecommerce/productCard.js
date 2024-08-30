"use client";

import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/ecom/images/ecom-image-1.png";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";

const productsData = [
  {
    img: "/assets/ecom/images/ecom-image-1.png",
    logo: "/assets/ecom/logos/logo-1.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-2.png",
    logo: "/assets/ecom/logos/logo-2.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-3.png",
    logo: "/assets/ecom/logos/logo-3.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-4.png",
    logo: "/assets/ecom/logos/logo-4.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-5.png",
    logo: "/assets/ecom/logos/logo-5.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-6.png",
    logo: "/assets/ecom/logos/logo-1.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-1.png",
    logo: "/assets/ecom/logos/logo-5.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-2.png",
    logo: "/assets/ecom/logos/logo-4.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-3.png",
    logo: "/assets/ecom/logos/logo-3.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-4.png",
    logo: "/assets/ecom/logos/logo-1.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-5.png",
    logo: "/assets/ecom/logos/logo-2.png",
  },
  {
    img: "/assets/ecom/images/ecom-image-6.png",
    logo: "/assets/ecom/logos/logo-3.png",
  },
];

const ProductCard = () => {
  const navigate = useDynamicNavigate();
  const handleNavigate = () => {
    const allowedUserTypes = ["individual", "affiliate", "influencer"];

    navigate("/ecom-product", allowedUserTypes);
  };

  return (
    <>
      <div className="m-4 p-4 gap-4 justify-stretch grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-[2px] ">
        {productsData.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 w-full border rounded-lg shadow-md shadow-[#5E17EB26] border-gray-200"
          >
            <div className="flex flex-row border-2 border-gray-400 bg-slate-200 p-2 rounded-lg">
              <div className="basis-1/4">
                <Image
                  src={product.logo}
                  width={54}
                  height={54}
                  alt="product-logo"
                />
              </div>
              <div className="basis-1/4 justify-start items-center ml-2">
                <h2 className="text-lg font-normal">Hemptyful</h2>
                <p className="text-gray-500 mt-2">Store Wide</p>
              </div>
              <div className="basis-1/2"></div>
            </div>
            <div
              onClick={handleNavigate}
              className="relative cursor-pointer w-full mb-4 mt-4"
            >
              <Image
                height={188}
                width={320}
                src={image1}
                alt="product-image"
                className="rounded-md w-full"
              />
            </div>
            <div className="flex justify-around items-center mt-4 gap-1">
              <div className="flex justify-center items-center">
                <button className="link-default bg-gray-400/15 border rounded-md p-2 border-r[6px] border-gray-400 font-bold">
                  11.25% of sale
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-primary border rounded-md p-2 border-gray-400 font-bold">
                  Paid Monthly
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button className="warning-main border rounded-md p-2 border-gray-400 font-bold">
                  T&C
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
