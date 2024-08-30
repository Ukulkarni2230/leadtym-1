"use client"
import Layout from '@/src/components/Layouts/Layout'
import UserbehaviourLayout from '@/src/components/pages/attribution-Report/Userbehavior&journey/userbehaviourLayout'
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
   <UserbehaviourLayout/>
    </Layout>
  )
}

export default page