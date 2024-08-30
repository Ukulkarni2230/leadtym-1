"use client"

import Layout from '@/src/components/Layouts/Layout'
import CashbackStoreDetails from '@/src/components/pages/coupons/cashback-store-details/cashback-store-details'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Coupon - Cashback"));
    }, [dispatch]);
    return (
        <Layout><CashbackStoreDetails /></Layout>
    )
}

export default page