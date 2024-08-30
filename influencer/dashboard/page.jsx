"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/src/components/Layouts/Layout';
import Dashboard from '@/src/components/pages/dashboard/dashboard';

import { setTitle } from '@/src/Redux/title-management/titleSlice';

const Page = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Overview"));
  }, [dispatch]);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Page;
