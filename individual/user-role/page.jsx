"use client"

import Layout from '@/src/components/Layouts/Layout'
import UserRoleTable from '@/src/components/pages/user-role/manage-users/user-role-table'
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("User Management"));
    }, [dispatch]);
    return (
        <Layout>
            <UserRoleTable />
        </Layout>
    )
}

export default page