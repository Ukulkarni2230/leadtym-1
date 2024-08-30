"use client"

import Layout from '@/src/components/Layouts/Layout'
import Leaderboard from '@/src/components/pages/leaderboard/leaderboard'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Top Performers"));
    }, [dispatch]);
    return (
        <Layout><Leaderboard /></Layout>
    )
}

export default page