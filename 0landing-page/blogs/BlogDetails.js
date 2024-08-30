// File: pages/blog/[id].js
import React from "react";
import { IoSendSharp, IoShareOutline } from "react-icons/io5";
import {
  FaRegCalendarAlt,
  FaRegComment,
  FaEye,
  FaShareAlt,
  FaHeart,
  FaTwitter,
  FaPinterest,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaFacebook,
  FaRegUser,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { BsClock } from "react-icons/bs";
import useNewsletterForm from "@/src/hooks/contact-us/useNewsletterForm";
import { usePathname } from "next/navigation";
import blogsDetailsData from "@/src/exportData/staticData";
import SharePopover from "./SharePopover";

const BlogDetails = () => {
  const {
    email,
    agreed,
    errors,
    handleEmailChange,
    handleCheckboxChange,
    handleSubmit,
    isFormValid,
  } = useNewsletterForm();

  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const blog = blogsDetailsData[id];

  if (!blog) {
    return <p>Loading...</p>;
  }

  const comments = [
    {
      date: "Aug 1, 2024",
      name: "Ravi K.",
      content:
        "Great insights on influencer marketing. The tools mentioned seem very useful.",
    },
    {
      date: "Jul 30, 2024",
      name: "Anjali S.",
      content:
        "The analytics section really helped me understand how to track my campaigns better.",
    },
  ];

  const relatedArticles = [
    {
      date: "June 21, 2023",
      title: "Boost Your Brand with the Latest Marketing Trends",
      readTime: "3 minutes read",
    },
    {
      date: "July 15, 2023",
      title: "Effective Strategies for Social Media Marketing",
      readTime: "5 minutes read",
    },
    {
      date: "August 5, 2023",
      title: "How to Leverage Influencers for Your Brand",
      readTime: "4 minutes read",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full pt-2 sm:pt-10 flex items-center justify-center">
        <div className="w-full">
          <img
            src={blog.img}
            alt="Blog Hero"
            className="w-full h-full object-contain bg-gray-100 dark:bg-[#101010]  rounded-xl max-h-[70vh]"
          />
          <div className="w-full flex flex-col md:flex-row justify-end items-center mt-5">
            {/* <div className="flex justify-between sm:justify-start gap-1 items-center text-xs text-black dark:text-[#FFFFFF] space-x-4 md:space-x-6">
              <span className="flex items-center space-x-1.5">
                <FaRegCalendarAlt />
                <span>{blog.date}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <FaRegComment />
                <span>{blog.commentsCount} Comments</span>
              </span>
              <span className="hidden md:flex items-center space-x-1.5">
                <IoIosStats />
                <span>views {blog.views}</span>
              </span>
              <span className="hidden md:flex items-center space-x-1.5">
                <FaShareAlt />
                <span>shares {blog.shares}</span>
              </span>
              <span className="hidden md:flex items-center space-x-1.5">
                <FaFacebook />
                <span>{blog.facebookShares}</span>
              </span>
              <span className="hidden lg:flex items-center space-x-1.5">
                <FaTwitter />
                <span>{blog.twitterShares}</span>
              </span>
              <span className="hidden lg:flex items-center space-x-1.5">
                <FaPinterest />
                <span>{blog.pinterestShares}</span>
              </span>
            </div> */}
            <div className="mt-4 md:mt-0">
              <SharePopover blogId={id} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-8">
        <div className="flex flex-col md:justify-between md:flex-row md:space-x-8">
          {/* Main Content */}
          <div className="md:w-3/4 dark:text-[#FFFFFF] text-black mb-4">
            <div>
              <h4 className="text-xl sm:text-3xl font-semibold dark:text-[#FFFFFF] max-w-xl">
                {blog.title}
              </h4>
              <p className="text-sm sm:text-base font-normal mt-2 md:mt-4 md:mb-12">
                {blog.description}
              </p>
            </div>
            {blog.content.map((section, index) => (
              <div key={index} className="my-6 md:my-12">
                <h4 className="text-xl sm:text-3xl mb-4 font-semibold dark:text-[#FFFFFF] max-w-xl">
                  {section.title}
                </h4>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm sm:text-base mb-0 font-extralight"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div>
              {/* <h4 className="text-xl border-t pt-5 dark:border-[#F1F1F16B] sm:text-3xl font-semibold dark:text-white mb-6">
                Comment Your Thoughts
              </h4>

             
              <div className="mb-6 p-4 border border-[#CECECE] rounded-2xl dark:bg-[#FBFBFB1A] dark:border-[#F1F1F133] dark:border">
                <textarea
                  className="w-full h-24 p-2 mb-2 bg-transparent border-none focus:ring-0 focus:outline-none resize-none dark:text-white bg-transparent"
                  placeholder="Share your thoughts here..."
                />
                <div className="flex flex-wrap items-center sm:gap-5 gap-5">
                  <input
                    type="text"
                    className="flex-1 w-auto p-2 bg-transparent border-b border-gray-300 dark:border-[#F1F1F1] focus:outline-none bg-transparent dark:text-white"
                    placeholder="Enter your name here"
                  />
                  <button className="gradient-bg w-full sm:w-auto justify-center text-white md:px-8 sm:px-5 px-2 py-2 rounded-full flex items-center">
                    <IoShareOutline className="-mt-[3px]" />
                    <span className="ml-1">Send</span>
                  </button>
                </div>
              </div> */}

              {/* Comments List */}
              <div className="mb-6">
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="mb-4 border-t border-black border-opacity-20 dark:border-white dark:border-opacity-20 pt-4"
                  >
                    <div className="flex gap-2 md:gap-6 items-center mb-2 text-[#1C1C1C] dark:text-white">
                      <div className="flex items-center">
                        <FaRegCalendarAlt className="mr-2 text-sm" />
                        <span className="text-xs mr-0">{comment.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FaRegUser className="mr-2 text-sm" />
                        <span className="text-xs font-semibold">
                          {comment.name}
                        </span>
                      </div>
                    </div>
                    <p className="text-[#1C1C1C] dark:text-white text-sm sm:text-base font-normal ">
                      {comment.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:w-1/5 mt-8 md:mt-0 text-black dark:text-white">
            {/* Follow Us Section */}
            <div className="mb-6 w-full">
              <h3 className="text-sm sm:text-base font-normal mb-4 sm:mb-8">
                Follow Us
              </h3>
              <div className="flex justify-between text-black dark:text-white">
                <div className="text-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=61556210603802"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-base" />
                  </a>
                  {/* <p className="mt-1.5 text-[10px]">10</p> */}
                </div>
                <div className="text-center">
                  <a
                    href="https://x.com/Leadtym?t=9pOf-BHXAbH6MKvgm10DUg&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-base" />
                  </a>
                  {/* <p className="mt-1.5 text-[10px]">69k</p> */}
                </div>
                <div className="text-center">
                  <a
                    href="https://www.instagram.com/leadtym/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <RiInstagramFill className="text-base" />
                  </a>
                  {/* <p className="mt-1.5 text-[10px]">45</p> */}
                </div>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/company/leadtymofficial/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-base" />
                  </a>
                  {/* <p className="mt-1.5 text-[10px]">69k</p> */}
                </div>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="mb-6">
              <p className="text-xs md:max-w-56 mb-4">
                Subscribe to our newsletter and receive a selection of cool
                articles every week.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="w-full p-2 px-5 text-black bg-transparent dark:text-white border rounded-full mb-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
                <div className="mt-2 flex items-start">
                  <input
                    type="checkbox"
                    className="mt-0.5"
                    checked={agreed}
                    onChange={handleCheckboxChange}
                  />
                  <p className="text-[10px] text-[#A9A9A9] ml-1 mb-4">
                    By checking this box, you confirm that you have read and are
                    agreeing to our terms of use regarding the storage of the
                    data submitted through this form.
                  </p>
                </div>
                <button
                  type="submit"
                  className={`w-full ${
                    isFormValid
                      ? "gradient-bg"
                      : "bg-gray-600 cursor-not-allowed"
                  } text-sm sm:text-base font-bold text-white p-2 rounded-full`}
                  disabled={!isFormValid}
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Related Articles Section */}
            <div>
              <h3 className="text-sm sm:text-base font-normal mb-4">
                The Latest
              </h3>
              <ul>
                {relatedArticles.map((article, index) => (
                  <li
                    key={index}
                    className="mb-4 border border-[#D4D0D080] p-3 rounded-lg bg-white"
                  >
                    <a
                      href="#"
                      className="block text-xs font-normal text-[#1C1C1C] hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      {article.title}
                    </a>
                    <div className="mt-4 text-xs flex items-center justify-between text-[#121416CF]">
                      <p>{article.date}</p>
                      <p className="w-5 bg-[#121416CF] h-[1px] rounded-full text-[#121416CF]"></p>
                      <p className="flex items-center gap-1">
                        <BsClock /> {article.readTime}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
