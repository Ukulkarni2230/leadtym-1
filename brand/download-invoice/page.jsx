"use client"


import Layout from "@/src/components/Layouts/Layout";
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Billing Statements"));
  }, [dispatch]);
  return (
    <Layout>
      <div>This is Invoice page</div>
    </Layout>
  );
};

export default page;
