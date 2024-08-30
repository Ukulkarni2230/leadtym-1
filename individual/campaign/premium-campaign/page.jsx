"use client"

import Layout from '@/src/components/Layouts/Layout'
import PremiumCampaignTable from '@/src/components/pages/campaign/preminum-campaigns/preminum-campaigns-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Premium Campaign"));
    }, [dispatch]);
    return (
        <Layout>
            <PremiumCampaignTable />
        </Layout>
    )
}

export default page