"use client"

import Layout from '@/src/components/Layouts/Layout'
import OptimizationsRulesTable from '@/src/components/pages/campaign/optimization-rules/optimizations-rules-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Optimization Rules"));
    }, [dispatch]);
    return (
        <Layout>
            <OptimizationsRulesTable />
        </Layout>
    )
}

export default page