"use client"

import Layout from '@/src/components/Layouts/Layout'
import OfferOnDemandTable from '@/src/components/pages/campaign/offer-on-demand/offer-on-demand-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Offer Demand"));
    }, [dispatch]);
    return (
        <Layout>
            <OfferOnDemandTable />
        </Layout>
    )
}

export default page