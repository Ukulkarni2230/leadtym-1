"use client"

import Layout from '@/src/components/Layouts/Layout'
import TicketLayout from '@/src/components/pages/Tickets/create-ticket/Ticket-layout'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Create New Ticket"));
    }, [dispatch]);
    return (
        <Layout>
            <TicketLayout />
        </Layout>
    )
}

export default page