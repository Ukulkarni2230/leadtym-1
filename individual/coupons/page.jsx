"use client"

import Layout from '@/src/components/Layouts/Layout'
import Coupons from '@/src/components/pages/coupons/coupons'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Coupon Store"));
    }, [dispatch]);
    return (
        <Layout><Coupons /></Layout>
    )
}

export default page