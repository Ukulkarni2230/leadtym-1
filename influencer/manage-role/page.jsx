"use client"
import Layout from '@/src/components/Layouts/Layout'
import ManageRoleTable from '@/src/components/pages/user-role/manage-role/manage-role-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("User Roles & Permissions"));
    }, [dispatch]);
    return (
        <Layout>
            <ManageRoleTable />
        </Layout>
    )
}

export default page