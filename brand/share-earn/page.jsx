"use client"

import Layout from '@/src/components/Layouts/Layout'
import ShareAndEarn from '@/src/components/pages/share-and-earn/share-and-earn'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Referral Program"));
  }, [dispatch]);
  return (
    <Layout><ShareAndEarn />  </Layout>
  )
}

export default page