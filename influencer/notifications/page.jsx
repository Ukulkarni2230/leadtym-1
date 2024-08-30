"use client"

import Layout from '@/src/components/Layouts/Layout'
import AllNotifications from '@/src/components/pages/all-notifications/all-notification'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Notifications"));
    }, [dispatch]);
    return (
        <Layout><AllNotifications /></Layout>
    )
}

export default page