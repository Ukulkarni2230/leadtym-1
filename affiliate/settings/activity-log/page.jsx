"use client"

import Layout from '@/src/components/Layouts/Layout'
import ActivityLog from '@/src/components/pages/settings/ActivityLog'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Activities"));
    }, [dispatch]);
    return (
        <Layout>
            <ActivityLog />
        </Layout>

    )
}

export default page