"use client"
import Layout from '@/src/components/Layouts/Layout'
import NewAutomations from '@/src/components/pages/msg-automations/new-automations/new-automations'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Messaging Automation"));
    }, [dispatch]);
    return (
        <Layout>
            <NewAutomations />
        </Layout>
    )
}

export default page