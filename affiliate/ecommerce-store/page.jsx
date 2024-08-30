"use client"
import Layout from "@/src/components/Layouts/Layout";
import ProductCard from "@/src/components/pages/ecommerce/productCard";
import ProductCardNavbar from "@/src/components/pages/ecommerce/productCardNavbar";
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
      <ProductCardNavbar />
      <ProductCard />
    </Layout>
  );
};

export default page;
