"use client";
import Layout from "@/src/components/Layouts/Layout";
import AutomationOverview from "@/src/components/pages/msg-automations/automation-overview/AutomationOverview";
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Automation - Overview"));
  }, [dispatch]);
  return (
    <Layout>
      <AutomationOverview />
    </Layout>
  );
};

export default page;
