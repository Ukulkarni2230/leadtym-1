
"use client"

import Layout from '@/src/components/Layouts/Layout'
import TicketStatus from '@/src/components/pages/Tickets/view-ticket/TicketStatus'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Ticket - Status"));
    }, [dispatch]);
    return (
        <Layout>
            <TicketStatus />
        </Layout>
    )
}

export default page