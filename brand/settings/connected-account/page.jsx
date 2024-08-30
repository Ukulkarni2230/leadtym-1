"use client"

import Layout from '@/src/components/Layouts/Layout'
import ConnectedAccount from '@/src/components/pages/settings/ConnectedAccount'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Connect Accounts"));
    }, [dispatch]);
    return (
        <Layout>

            <ConnectedAccount />
        </Layout>

    )
}

export default page