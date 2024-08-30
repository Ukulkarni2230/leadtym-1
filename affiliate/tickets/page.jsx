"use client"

import Layout from '@/src/components/Layouts/Layout'
import TicketTable from '@/src/components/pages/Tickets/TicketTable'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Support Tickets"));
    }, [dispatch]);
    return (
        <Layout>
            <TicketTable />
        </Layout>
    )
}

export default page