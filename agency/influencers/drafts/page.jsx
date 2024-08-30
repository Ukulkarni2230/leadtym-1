"use client"

import Layout from '@/src/components/Layouts/Layout'
import DraftsTable from '@/src/components/pages/All-Influencers/Deals/DraftsTable'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Deals Drafts"));
  }, [dispatch]);
  return (
    <Layout>
      <DraftsTable />
    </Layout>
  )
}

export default page