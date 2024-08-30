"use client"

import Layout from '@/src/components/Layouts/Layout'
import Influencer from '@/src/components/pages/All-Influencers/Influencer'
import InfluencerDetails from '@/src/components/pages/All-Influencers/Single-Influencer-Profile/InfluencerDetails'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Influencers Hub"));
    }, [dispatch]);
    return (
        <Layout>
            <InfluencerDetails />
        </Layout>
    )
}

export default page