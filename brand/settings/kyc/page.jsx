"use client"

import Layout from '@/src/components/Layouts/Layout'

import Kyc from '@/src/components/pages/settings/kyc/Kyc'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("KYC - Overview"));
    }, [dispatch]);
    return (
        <Layout>

            <Kyc />
        </Layout>

    )
}

export default page