"use client"
import Layout from '@/src/components/Layouts/Layout'
import DealDetails from '@/src/components/pages/brands-deals/brand-deal-details/brand-deal-details'
import { setTitle } from '@/src/Redux/title-management/titleSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Deal - Overview"));
    }, [dispatch]);
    return (
        <Layout><DealDetails /></Layout>
    )
}

export default page