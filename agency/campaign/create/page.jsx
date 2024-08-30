"use client"

import Layout from '@/src/components/Layouts/Layout'
import CreateCampaignHome from '@/src/components/pages/campaign/create/CreateCampaignHome'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Campaign Create"));
    }, [dispatch]);
    return (
        <Layout>
            <CreateCampaignHome />
        </Layout>
    )
}

export default page