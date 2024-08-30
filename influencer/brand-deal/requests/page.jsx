"use client"
import Layout from '@/src/components/Layouts/Layout'
import RequestTable from '@/src/components/pages/brands-deals/requests/requests-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Requests"));
    }, [dispatch]);
    return (
        <Layout><RequestTable /></Layout>
    )
}

export default page