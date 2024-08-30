"use client"

import Layout from '@/src/components/Layouts/Layout'
import DeactivateAccount from '@/src/components/pages/settings/DeactivateAccount'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Deactivate Account"));
    }, [dispatch]);
    return (
        <Layout>

            <DeactivateAccount />
        </Layout>

    )
}

export default page