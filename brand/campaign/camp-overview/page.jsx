"use client"

import Layout from '@/src/components/Layouts/Layout'
import CampaignOverview from '@/src/components/pages/campaign/campaign-overview/campaign-overview'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Campaign - Overview"));
    }, [dispatch]);
    return (
        <Layout><CampaignOverview /></Layout>
    )
}

export default page