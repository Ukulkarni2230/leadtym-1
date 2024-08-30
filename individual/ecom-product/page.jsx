"use client"

import Layout from "@/src/components/Layouts/Layout";
import ProductDetail from "@/src/components/pages/ecommerce-single-product/productDetail";
import { setTitle } from '@/src/Redux/title-management/titleSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("E-Commerce Store"));
  }, [dispatch]);
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  );
};

export default page;
