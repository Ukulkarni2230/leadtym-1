"use client"

import Layout from '@/src/components/Layouts/Layout'
import DealsHome from '@/src/components/pages/All-Influencers/Deals/DealsHome'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Deals"));
    }, [dispatch]);
    return (
        <Layout>
            <DealsHome />
        </Layout>
    )
}

export default page