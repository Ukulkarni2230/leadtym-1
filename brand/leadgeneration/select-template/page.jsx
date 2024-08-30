'use client'
import React, { useEffect, useState } from 'react';
import Layout from '@/src/components/Layouts/Layout';
import dynamic from 'next/dynamic';
const DragdropForm = dynamic(() => import('@/src/components/pages/lead-generation/LeadFormTamplet/dragdropForm'), {
  ssr: false,
});

const ClientOnlyDndProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className='dark:text-white text-[#1e1e1e] h-screen items-center justify-center flex'>Loading...</div>; // Or return null or any placeholder during SSR
  }

  // Dynamically import DndProvider and HTML5Backend here within the client-only component
  const { DndProvider } = require('react-dnd');
  const { HTML5Backend } = require('react-dnd-html5-backend');

  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  );
};

const Page = () => {
  return (
    <Layout>
      <ClientOnlyDndProvider>
        <DragdropForm/>
      </ClientOnlyDndProvider>
    </Layout>
  );
};

export default Page;
