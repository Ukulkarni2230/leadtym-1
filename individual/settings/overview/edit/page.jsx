
"use client"
import Layout from '@/src/components/Layouts/Layout'

import EditOverview from '@/src/components/pages/settings/overview/EditOverview/EditOverview'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Edit Details"));
    }, [dispatch]);
    return (
        <Layout>

            <EditOverview />
        </Layout>

    )
}

export default page