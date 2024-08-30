import Layout from '@/src/components/Layouts/Layout'
import AllInboxMessages from '@/src/components/pages/header/inbox-message/all-inbox-messages'
import React from 'react'

const page = () => {
    return (
        <Layout>
            <AllInboxMessages />
        </Layout>
    )
}

export default page