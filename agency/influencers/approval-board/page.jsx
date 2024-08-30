"use client"

import Layout from '@/src/components/Layouts/Layout'
import ApprovalBorad from '@/src/components/pages/All-Influencers/Approval-board/ApprovalBorad'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Approval Board"));
    }, [dispatch]);
    return (
        <Layout>
            <ApprovalBorad />
        </Layout>
    )
}

export default page