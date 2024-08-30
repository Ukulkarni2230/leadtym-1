"use client"

import Layout from '@/src/components/Layouts/Layout'
import Help from '@/src/components/pages/Helps/Help'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Helps Center"));
    }, [dispatch]);
    return (
        <Layout>
            <Help />

        </Layout>
    )
}

export default page