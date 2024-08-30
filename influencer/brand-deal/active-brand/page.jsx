"use client"
import Layout from '@/src/components/Layouts/Layout'
import ActiveDealsTable from '@/src/components/pages/brands-deals/active-deals/active-deals-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Active - Brand"));
    }, [dispatch]);
    return (
        <Layout>active brands</Layout>
    )
}

export default page