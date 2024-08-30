"use client"

import Layout from '@/src/components/Layouts/Layout'
import GlobalPostback from '@/src/components/pages/postback/global-postback'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Global Postback"));
    }, [dispatch]);
    return (
        <Layout>

            <GlobalPostback />
        </Layout>
    )
}

export default page