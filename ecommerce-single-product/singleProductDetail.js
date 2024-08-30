"use-client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import productDetailHero1 from "@/public/assets/ecom/images/product-detail-hero-1.png";
import preductDetailSubHero1 from "@/public/assets/ecom/images/product-details-subhero-1.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import BecomeAffilliateCard from "../ecommerce-affiliate/becomeAffilliateCard";
import AffiliateStepsPage from "../ecommerce-affiliate/affiliateStepsPage";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import TermsConditionCard from "../ecommerce-affiliate/termsConditionCard";
import { FiSend } from "react-icons/fi";
import ShareLinkPage from "../ecommerce-affiliate/shareLinkPage";
import LinkConvertedCard from "../ecommerce-affiliate/linkConvertedCard";
import useDynamicNavigate from "@/src/hooks/navigate/useDynamicNavigate";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SingleProductDetail = () => {
  const [open, setOpen] = useState(false);
  const [openAffiliate, setOpenAffiliate] = useState(false);
  const [openTnC, setOpenTnc] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  const [openConverted, setOpenConverted] = useState(false);
  const [showLinkConvertedCard, setShowLinkConvertedCard] = useState(false);

  const navigate = useDynamicNavigate();
  const handleNavigate = () => {
    const allowedUserTypes = ["individual", "affiliate", "influencer"];

    navigate("/ecommerce-store", allowedUserTypes);
  };

  useEffect(() => {
    setOpenAffiliate(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAffiliateOpen = () => {
    setOpenAffiliate(true);
  };
  const handleAffiliateClose = () => {
    setOpenAffiliate(false);
  };
  const handleTncOpen = () => {
    setOpenTnc(true);
  };
  const handleTncClose = () => {
    setOpenTnc(false);
  };
  const handleClickOpenSocial = () => {
    setOpenSocial(true);
  };
  const handleCloseSocial = () => {
    setOpenSocial(false);
  };

  const handleClickOpenConverted = () => {
    setOpenConverted(true);
  };
  const handleCloseConverted = () => {
    setOpenConverted(false);
  };

  const linkConvertedCardClose = () => {
    setShowLinkConvertedCard(false);
  };

  return (
    <div className="">
      <div className="relative">
        <Image
          src={productDetailHero1}
          width={515}
          height={320}
          alt="product-hero-image"
          className="w-full h-auto"
        />
        <button
          type="submit"
          className="absolute top-4 left-4 flex items-center bg-[#F4F4F4] text-[#666666] p-2 border rounded-full border-gray-400 text-sm w-auto py-3 px-6"
        >
          <MdKeyboardArrowLeft size={24} />
          <span onClick={handleNavigate}>Back</span>
        </button>
        <div className="flex justify-start items-end -mt-5 ml-5 gap-6">
          <div>
            <Image
              src={preductDetailSubHero1}
              width={94}
              height={94}
              alt="product-hero-image"
            />
          </div>
          <div className="mt-1">
            <h2 className="text-lg font-semibold">Hemptyful</h2>
            <p className="text-gray-500">Store Wide</p>
            <button
              className="link-default font-bold leading-5"
              href="#text-buttons"
            >
              View Website
            </button>
          </div>
        </div>
        <div className="flex items-center justify-start mt-4 font-semibold gap-4">
          <button className="flex-1 border rounded-md p-1 border-r[6px] border-gray-400 text-[#5E17EB] bg-[#5E17EB1A]/10 py-3">
            7.25% of sale
          </button>
          <button className="flex-1 border rounded-md p-1 border-gray-400 text-primary py-3 font-bold">
            Paid Monthly
          </button>
          {/* terms and condition pop-up  */}
          <button
            className="flex-1 border rounded-md p-1 border-gray-400 warning-main py-3"
            onClick={handleTncOpen}
          >
            Terms & Conditions
          </button>
          <BootstrapDialog
            onClose={handleTncClose}
            aria-labelledby="customized-dialog-title"
            open={openTnC}
          >
            <DialogContent>
              <TermsConditionCard handleTncClose={handleTncClose} />
            </DialogContent>
          </BootstrapDialog>
        </div>
        <div className="flex items-center justify-start mt-4 gap-4">
          {/* become affilliate pop-up */}
          <>
            <button
              className="flex-1 gradient-bg border rounded-full border-none text-white leading-5 p-2 px-6 py-3"
              onClick={handleClickOpen}
            >
              Become Affiliate
            </button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogContent>
                <BecomeAffilliateCard
                  handleClose={handleClose}
                  setOpen={setOpen}
                />
              </DialogContent>
            </BootstrapDialog>
          </>
          {/* affiliate-steps pop-up */}
          <>
            <button
              className="flex-1 bg-[#D9D9D9] border rounded-full border-none text-primary font-bold leading-5 p-2 px-6 py-3"
              onClick={handleAffiliateOpen}
            >
              How to Start Earning
            </button>
            <BootstrapDialog
              onClose={handleAffiliateClose}
              aria-labelledby="customized-dialog-title"
              open={openAffiliate}
            >
              <DialogContent>
                <AffiliateStepsPage
                  handleAffiliateClose={handleAffiliateClose}
                />
              </DialogContent>
            </BootstrapDialog>
          </>
        </div>

        <div className="flex items-center justify-start mt-4 gap-4">
          {/* store links pop-up */}
          <>
            <button
              className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3"
              onClick={handleClickOpenSocial}
            >
              <span className="mr-2 leading-5 font-bold">
                Share Store Links
              </span>
              <FiSend size={18} />
            </button>
            <BootstrapDialog
              onClose={handleCloseSocial}
              aria-labelledby="customized-dialog-title"
              open={openSocial}
            >
              <DialogContent>
                <ShareLinkPage handleCloseSocial={handleCloseSocial} />
              </DialogContent>
            </BootstrapDialog>
          </>
          {/* this is same as above */}
          <>
            <button
              className="flex-1 bg-[#D9D9D9] border rounded-full border-none text-primary font-bold leading-5 p-2 px-6 py-3"
              onClick={handleAffiliateOpen}
            >
              How to Start Earning
            </button>
          </>
        </div>

        {/* add following div after interaction */}
        <div className="flex items-center justify-between border rounded-md border-gray-400 pl-3 mt-4 mb-3">
          <p className="text-[#20102B] leading-5 cursor-pointer font-normal">
            https://yourwesite.com
          </p>
          <button
            className="flex items-center border-none p-2 w-[100] pr-4 pl-4"
            onClick={handleClickOpenConverted}
          >
            <div>
              <span className="text-gradient font-normal leading-6">
                Convert
              </span>
            </div>
          </button>
          <BootstrapDialog
            onClose={handleCloseConverted}
            aria-labelledby="customized-dialog-title"
            open={openConverted}
          >
            <DialogContent>
              <LinkConvertedCard handleCloseConverted={handleCloseConverted} />
            </DialogContent>
          </BootstrapDialog>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;

{
  /* <div className='flex items-center justify-start mt-4 gap-4'>
     <>
          <button className="flex items-center justify-center gradient-bg pl-4 pr-4 flex-1 border rounded-full border-none text-white leading-5 p-2 px-6 py-3"
               onClick={handleClickOpenSocial}
          >
               <span className='mr-2 leading-5 font-bold'>Share Store Links</span>
               <FiSend size={18} />
          </button>
     </>
</div> */
}
