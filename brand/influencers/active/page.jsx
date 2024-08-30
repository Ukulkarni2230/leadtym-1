"use client"

import Layout from '@/src/components/Layouts/Layout'
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
            this is active page
        </Layout>
    )
}

export default page