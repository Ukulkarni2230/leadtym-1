"use client"
import Layout from '@/src/components/Layouts/Layout'
import ManageCampaignTable from '@/src/components/pages/campaign/manage-campaign/manage-campaign-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Campaign Management"));
    }, [dispatch]);
    return (
        <Layout><ManageCampaignTable /></Layout>
    )
}

export default page