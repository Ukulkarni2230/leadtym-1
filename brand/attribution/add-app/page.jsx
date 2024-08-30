"use client"
import Layout from '@/src/components/Layouts/Layout'
import AddApp from '@/src/components/pages/attribution-Report/add-app/add-app'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Attribution Analysis"));
    }, [dispatch]);
    return (
        <Layout>
            <AddApp />
        </Layout>
    )
}

export default page