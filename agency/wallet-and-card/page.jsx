"use client"

"use client"

import Layout from "@/src/components/Layouts/Layout";
import WalletsLandingPage from "@/src/components/pages/wallet-and-cards/wallets-landing";
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Wallet Details"));
  }, [dispatch]);
  return (
    <Layout>
      <WalletsLandingPage />
    </Layout>
  );
};

export default page;
