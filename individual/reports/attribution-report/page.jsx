"use client"

import Layout from '@/src/components/Layouts/Layout'
import AttributionReportTable from '@/src/components/pages/reports/attribution-report/attribution-report-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Reports Statistics"));
  }, [dispatch]);
  return (
    <Layout><AttributionReportTable /></Layout>
  )
}

export default page