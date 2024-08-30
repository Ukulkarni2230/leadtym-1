"use client"
import Layout from '@/src/components/Layouts/Layout'
import ApprovalBoard from '@/src/components/pages/brands-deals/approval-board/approval-board'
// import ApprovalBoard from '@/src/components/pages/brand-deals/approval-board/approval-board'
import { setTitle } from '@/src/Redux/title-management/titleSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Approval Board"));
    }, [dispatch]);
    return (
        <Layout><ApprovalBoard /></Layout>
    )
}

export default page