import Layout from '@/src/components/Layouts/Layout'
import AllInboxMessages from '@/src/components/pages/header/inbox-message/all-inbox-messages'
import MessageOverview from '@/src/components/pages/header/inbox-message/message-overview/message-overview'
import React from 'react'

const page = () => {
    return (
        <Layout>
            <MessageOverview />
        </Layout>
    )
}

export default page