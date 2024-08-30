"use client"

import Layout from '@/src/components/Layouts/Layout'
import DealOverview from '@/src/components/pages/All-Influencers/Deals/DealDetails/DealOverview'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Deals - Overview"));
    }, [dispatch]);
    return (
        <Layout>
            <DealOverview />
        </Layout>
    )
}

export default page