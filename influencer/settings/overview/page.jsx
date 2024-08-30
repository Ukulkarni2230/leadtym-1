"use client"

import Layout from '@/src/components/Layouts/Layout'
import Overview from '@/src/components/pages/settings/overview/Overview'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Account Info"));
    }, [dispatch]);
    return (
        <Layout>
            <Overview />
        </Layout>

    )
}

export default page