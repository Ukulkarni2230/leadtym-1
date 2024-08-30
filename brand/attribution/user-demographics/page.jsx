"use client"
import Layout from '@/src/components/Layouts/Layout'
import Userdemographicslayout from '@/src/components/pages/attribution-Report/user-demographics/userdemographicslayout'
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
        <Userdemographicslayout/>
    </Layout>
  )
}

export default page