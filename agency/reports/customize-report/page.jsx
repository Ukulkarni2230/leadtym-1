"use client"

import Layout from '@/src/components/Layouts/Layout'
import CustomiseReportTable from '@/src/components/pages/reports/customise-reports/customise-report-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Customize Reports"));
    }, [dispatch]);
    return (
        <Layout><CustomiseReportTable /></Layout>
    )
}

export default page