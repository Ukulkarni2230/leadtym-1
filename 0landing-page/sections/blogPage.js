// File: BlogPage.js
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const blogsData = [
  {
    id: 1, // Add an ID to each blog entry
    category: "Brands",
    bg: "#8CCECF",
    title:
      "Leveraging LeadTym to Maximize Your Brand's Influencer Marketing ROI",
    description:
      "Brief overview of the changing landscape of digital marketing and the rising importance of influencer marketing. Introduction to LeadTym and its AI-driven platform designed to optimize influencer campaign",
    img: "/assets/landing/brandblog.jpg",
  },
  {
    id: 2, // Add an ID to each blog entry
    category: "Influencers and Affiliates",
    bg: "#E8CC69",
    title:
      "How LeadTym Empowers Influencers and Affiliates to Thrive in a Competitive Market",
    description:
      "Discuss the evolution of content creation and affiliate marketing. Introduce LeadTym as a tool designed to support influencers and affiliates in maximizing their earnings",
    img: "/assets/landing/influencerblog.jpg",
  },
  // Add more blog entries here...
];

const tabData = [
  { name: "Latest", count: 2 },
  { name: "Inspiration", count: 0 },
  // { name: "Content Creation", count: 0 },
  // { name: "Grow Your Brand", count: 0 },
  // { name: "Social Media Resources", count: 0 },
  // { name: "Social Media Strategy", count: 0 },
  // { name: "Social Media Updates", count: 0 },
];

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const navigate = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <section className="py-12 bg-white dark:bg-black flex justify-center">
      <div className="">
        <h2 className="text-lg text-center md:text-xl 2xl:text-2xl font-bold text-black dark:text-white mb-2">
          Blogs
        </h2>
        <h3 className="text-2xl text-center md:text-[46px] moreextrabold leading-tight md:leading-none text-black dark:text-white mb-8">
          Valuable Resources For Lifelong Learners
        </h3>
        <div className="flex mb-6 flex-wrap max-w-screen-lg mx-auto justify-center  gap-x-4 gap-y-3">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`px-4 h-[42px] border border-[#17171729] dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 items-center font-medium text-sm sm:text-base 2xl:text-lg rounded-full ${
                activeTab === index
                  ? "gradient-bg text-white"
                  : "dark:text-[#757575]"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="">{tab.name} </span>
              <span className="bg-[#F5F5F5] dark:bg-white text-black font-normal text-xs rounded-full px-1 -mt-[3px] p-[2px] h-[27px] border border-[#17171729] dark:border-gray-700">
                ({tab.count})
              </span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:p-6 xl:p-8 dark:bg-[#121212] p-4 max-w-screen-lg rounded-xl bg-[#E3DEFF] border border-[#000000] sm:grid-cols-2 gap-6">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              onClick={() => navigate(blog.id)}
              className=" sm:p-5 p-3 cursor-pointer border border-[#171717] bg-white rounded-xl shadow-lg"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <p
                style={{ backgroundColor: blog.bg }}
                className="font-medium text-white py-1.5 px-3 w-fit  rounded-full text-sm sm:text-base mb-4 mt-6 block"
              >
                {blog.category}
              </p>
              <h4 className="text-base sm:text-lg font-medium text-black  mb-2">
                {blog.title}
              </h4>
              <p className="text-[#757575] text-xs sm:text-sm">
                {blog.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
