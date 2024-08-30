"use client"
import Layout from '@/src/components/Layouts/Layout'
import OfferOnDemandOverview from '@/src/components/pages/campaign/offer-on-demand/offer-demand-overview-page/offer-demand-overview'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Campaign - Overview"));
    }, [dispatch]);
    return (
        <Layout><OfferOnDemandOverview /></Layout>
    )
}

export default page