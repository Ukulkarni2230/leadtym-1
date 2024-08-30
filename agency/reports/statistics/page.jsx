"use client"

import Layout from '@/src/components/Layouts/Layout'
import Statistics from '@/src/components/pages/reports/statistics/statisics'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Reports Statistics"));
  }, [dispatch]);
  return (
    <Layout><Statistics /></Layout>
  )
}

export default page