"use client"
import Layout from '@/src/components/Layouts/Layout'
import AllDealsTable from '@/src/components/pages/brands-deals/all-deals/all-deals-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("All - Deals"));
    }, [dispatch]);
    return (
        <Layout><AllDealsTable /></Layout>
    )
}

export default page