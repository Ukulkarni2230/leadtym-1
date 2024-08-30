"use client"
import Layout from '@/src/components/Layouts/Layout'
import PerformaceMatrices from '@/src/components/pages/attribution-Report/performance-matrices/performaceMatrices'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Attribution Analysis"));
    }, [dispatch]);
  return (
    <Layout>
    <PerformaceMatrices/>
    </Layout>
  )
}

export default page