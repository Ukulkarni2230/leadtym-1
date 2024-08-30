"use client"

import Layout from '@/src/components/Layouts/Layout'
import RequestsTable from '@/src/components/pages/All-Influencers/influencers-requests/RequestsTable'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Requests"));
  }, [dispatch]);
  return (
    <Layout>
      <RequestsTable />
    </Layout>
  )
}

export default page