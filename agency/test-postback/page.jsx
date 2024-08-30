"use client"

import Layout from '@/src/components/Layouts/Layout'
import TestPostback from '@/src/components/pages/postback/test-postback'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Test Postback"));
    }, [dispatch]);
    return (
        <Layout>

            <TestPostback />
        </Layout>
    )
}

export default page