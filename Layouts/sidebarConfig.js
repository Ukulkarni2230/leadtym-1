import {
  MdOutlineCampaign,
  MdOutlineLeaderboard,
  MdOutlineLiveHelp,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
} from "react-icons/md";
import { IoMagnet } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {
  TbLink,
  TbMessageLanguage,
  TbReportAnalytics,
  TbWallet,
} from "react-icons/tb";
import { LuBadgeDollarSign, LuLayoutDashboard, LuShare2 } from "react-icons/lu";
import { BiStoreAlt } from "react-icons/bi";
import { RiCoupon3Line } from "react-icons/ri";
import { CgUserList } from "react-icons/cg";

export const sidebarConfig = {
  1: {
    menu: [
      {
        icon: <LuLayoutDashboard />,
        text: "Dashboard",
        paths: ["/brand/dashboard"],
      },
      {
        icon: <MdOutlinePeopleAlt />,
        text: "All Influencers",
        paths: [
          "/brand/influencers/all-influencer",
          "/brand/influencers/active",
          "/brand/influencers/manage-deal",
          "/brand/influencers/approval-board",
          "/brand/influencers/requests",
          "/brand/influencers/drafts",
          "/brand/influencers/manage-deals/deal-overview",
        ],
        children: [
          {
            text: "All Influencers",
            path: "/brand/influencers/all-influencer",
          },
          { text: "Active Influencers", path: "/brand/influencers/active" },
          { text: "Manage Deals", path: "/brand/influencers/manage-deals" },
          {
            text: "Approval Board",
            path: "/brand/influencers/approval-board",
          },
          { text: "Requests", path: "/brand/influencers/requests" },
          { text: "Drafts", path: "/brand/influencers/drafts" },
        ],
      },
      {
        icon: <MdOutlineCampaign />,
        text: "Campaign",
        paths: [
          "/brand/campaign/create",
          "/brand/campaign/camp-list",
          "/brand/campaign/optimization-rules",
          "/brand/campaign/premium-campaign",
          "/brand/campaign/normal-campaign",
          "/brand/campaign/offer-demand",
          
        ],
        children: [
          { text: "Create Campaign", path: "/brand/campaign/create" },
          { text: "Manage Campaign", path: "/brand/campaign/camp-list" },
          {
            text: "Optimization Rules",
            path: "/brand/campaign/optimization-rules",
          },
          {
            text: "Premium Campaign",
            path: "/brand/campaign/premium-campaign",
          },
          { text: "Normal Campaign", path: "/brand/campaign/normal-campaign" },
          { text: "Offer on Demand", path: "/brand/campaign/offer-demand" },
        ],
      },
      {
        icon: <MdOutlinePeopleAlt />,
        text: "Attribution Report",
        paths: [
          "/brand/attribution/add-app",
          "/brand/attribution/campaign-details",
          "/brand/attribution/manage-deals",
          "/brand/attribution/performance-matrics",
          "/brand/attribution/user-demographics",
          "/brand/attribution/app-installations",
          "/brand/attribution/e-commerce-matrices",
          "/brand/attribution/user-path",
          "/brand/attribution/ub&jm",
          "/brand/attribution/uf&sm",
          "/brand/attribution/engagement-metrices",
        ],
        children: [
          {
            text: "Add App",
            path: "/brand/attribution/add-app",
          },
          { text: "Campaign Details", path: "/brand/attribution/campaign-details" },
          { text: "Manage Deals", path: "/brand/attribution/manage-deals" },
          {
            text: "Performance Matrics",
            path: "/brand/attribution/performance-matrics",
          },
          {
            text: "User Demographics",
            path: "/brand/attribution/user-demographics"
          }
          ,
          {
            text: "App Installations",
            path: "/brand/attribution/app-installations"
          },
          {
            text: "E-commerce Matrices",
            path: "/brand/attribution/e-commerce-matrices"
          },
          {
            text: "User Path Analysis",
            path: "/brand/attribution/user-path"
          },
          {
            text: "UB & JM",
            path: "/brand/attribution/ub&jm"
          },
          {
            text: "UF & SM",
            path: "/brand/attribution/uf&sm"
          },
          {
            text: "Engagement Metrices",
            path: "/brand/attribution/engagement-metrices"
          },
        ],
      },
      {
        icon: <IoMagnet />,
        text: "Lead Generation Form",
        paths: [
          "/brand/leadgeneration/create",
          
          // "/brand/attribution/engagement-metrices",
        ],
        children: [
          {
            text: "Create form",
            path: "/brand/leadgeneration/create",
          },
          // {
          //   text: "Engagement Metrices",
          //   path: "/brand/attribution/engagement-metrices"
          // },
        ],
      },
      {
        icon: <TbReportAnalytics />,
        text: "Reports",
        paths: [
          "/brand/reports/statistics",
          "/brand/reports/attribution-report",
          "/brand/reports/customize-report",
        ],
        children: [
          { text: "Statistics", path: "/brand/reports/statistics" },
          {
            text: "Attribution Report",
            path: "/brand/reports/attribution-report",
          },
          {
            text: "Customize Report",
            path: "/brand/reports/customize-report",
          },
        ],
      },
      {
        icon: <MdOutlineLeaderboard />,
        text: "Leaderboard",
        paths: ["/brand/leaderboard"],
      },

      {
        icon: <TbLink />,
        text: "Post-back",
        paths: ["/brand/global-postback", "/brand/test-postback"],
        children: [
          { text: "Global Post-back", path: "/brand/global-postback" },
          { text: "Test Post-back", path: "/brand/test-postback" },
        ],
      },

      {
        icon: <RiCoupon3Line />,
        text: "Coupons-store",
        paths: ["/brand/coupons"],
      },
    ],

    master: [
      {
        icon: <TbWallet />,
        text: "Wallet & Card",
        paths: ["/brand/wallet-and-card", "/brand/download-invoice"],
        children: [
          { text: "Wallet & Card", path: "/brand/wallet-and-card" },
          { text: "Download Invoice", path: "/brand/download-invoice" },
        ],
      },
      {
        icon: <CgUserList />,
        text: "User Management",
        paths: ["/brand/user-role", "/brand/manage-role"],
        children: [
          {
            text: "Add Users",
            path: "/brand/user-role",
          },
          {
            text: "Add Role",
            path: "/brand/manage-role",
          },
        ],
      },
      {
        icon: <MdOutlineLiveHelp />,
        text: "Help",
        paths: ["/brand/helps"],
      },
      {
        icon: <TfiHeadphoneAlt />,
        text: "Tickets",
        paths: ["/brand/tickets", "brand/tickets/create-ticket"],
      },
      {
        icon: <LuShare2 />,
        text: "Share & Earn",
        paths: ["/brand/share-earn"],
      },

      {
        icon: <MdOutlineSettings />,
        text: "Settings",
        paths: [
          "/brand/settings/overview",
          "/brand/settings/kyc",
          "/brand/settings/connected-account",
          "/brand/settings/activity-log",
          "/brand/settings/deactivate",
        ],
        children: [
          { text: "Overview", path: "/brand/settings/overview" },
          { text: "KYC", path: "/brand/settings/kyc" },
          {
            text: "Connected account",
            path: "/brand/settings/connected-account",
          },
          { text: "Activity log", path: "/brand/settings/activity-log" },
          { text: "Deactivate", path: "/brand/settings/deactivate" },
        ],
      },

      {
        icon: <TbMessageLanguage />,
        text: "Message Automation",
        paths: ["/brand/msg-automation"],
      },
    ],
  },

  2: {
    menu: [
      {
        icon: <LuLayoutDashboard />,
        text: "Dashboard",
        paths: ["/agency/dashboard"],
      },
      {
        icon: <MdOutlinePeopleAlt />,
        text: "All Influencers",
        paths: [
          "/agency/influencers/all-influencer",
          "/agency/influencers/active",
          "/agency/influencers/manage-deal",
          "/agency/influencers/approval-board",
          "/agency/influencers/requests",
          "/agency/influencers/drafts",
          "/agency/influencers/manage-deals/deal-overview",
        ],
        children: [
          {
            text: "All Influencers",
            path: "/agency/influencers/all-influencer",
          },
          { text: "Active Influencers", path: "/agency/influencers/active" },
          { text: "Manage Deals", path: "/agency/influencers/manage-deals" },
          {
            text: "Approval Board",
            path: "/agency/influencers/approval-board",
          },
          { text: "Requests", path: "/agency/influencers/requests" },
          { text: "Drafts", path: "/agency/influencers/drafts" },
        ],
      },
      {
        icon: <MdOutlineCampaign />,
        text: "Campaign",
        paths: [
          "/agency/campaign/create",
          "/agency/campaign/camp-list",
          "/agency/campaign/optimization-rules",
        ],
        children: [
          { text: "Create Campaign", path: "/agency/campaign/create" },
          { text: "Manage Campaign", path: "/agency/campaign/camp-list" },
          {
            text: "Optimization Rules",
            path: "/agency/campaign/optimization-rules",
          },
        ],
      },
      {
        icon: <TbReportAnalytics />,
        text: "Reports",
        paths: [
          "/agency/reports/statistics",
          "/agency/reports/attribution-report",
          "/agency/reports/customize-report",
        ],
        children: [
          { text: "Statistics", path: "/agency/reports/statistics" },
          {
            text: "Attribution Report",
            path: "/agency/reports/attribution-report",
          },
          {
            text: "Customize Report",
            path: "/agency/reports/customize-report",
          },
        ],
      },
      {
        icon: <MdOutlineLeaderboard />,
        text: "Leaderboard",
        paths: ["/agency/leaderboard"],
      },
      {
        icon: <RiCoupon3Line />,
        text: "Coupons-store",
        paths: ["/agency/coupons"],
      },
      {
        icon: <TbLink />,
        text: "Post-back",
        paths: ["/agency/global-postback", "/agency/test-postback"],
        children: [
          { text: "Global Post-back", path: "/agency/global-postback" },
          { text: "Test Post-back", path: "/agency/test-postback" },
        ],
      },
    ],
    master: [
      {
        icon: <TbWallet />,
        text: "Wallet & Card",
        paths: [
          "/agency/settings/overview",
          "/agency/settings/kyc",
          "/agency/wallet-and-card",
          "/agency/download-invoice",
        ],
        children: [
          { text: "Wallet & Card", path: "/agency/wallet-and-card" },
          { text: "Download Invoice", path: "/agency/download-invoice" },
        ],
      },
      {
        icon: <CgUserList />,
        text: "User Management",
        paths: ["/agency/user-role", "/agency/manage-role"],
        children: [
          { text: "Add Users", path: "/agency/user-role" },
          { text: "Add Role", path: "/agency/manage-role" },
        ],
      },
      {
        icon: <TfiHeadphoneAlt />,
        text: "Tickets",
        paths: ["/agency/tickets", "/agency/tickets/create-ticket"],
      },
      {
        icon: <MdOutlineLiveHelp />,
        text: "Help",
        paths: ["/agency/helps"],
      },
      {
        icon: <LuShare2 />,
        text: "Share & Earn",
        paths: ["/agency/share-earn"],
      },
      {
        icon: <MdOutlineSettings />,
        text: "Settings",
        paths: [
          "/agency/settings/overview",
          "/agency/settings/kyc",
          "/agency/settings/connected-account",
          "/agency/settings/activity-log",
          "/agency/settings/deactivate",
        ],
        children: [
          { text: "Overview", path: "/agency/settings/overview" },
          { text: "KYC", path: "/agency/settings/kyc" },
          {
            text: "Connected Account",
            path: "/agency/settings/connected-account",
          },
          { text: "Activity Log", path: "/agency/settings/activity-log" },
          { text: "Deactivate", path: "/agency/settings/deactivate" },
        ],
      },
    ],
  },

  3: {
    menu: [
      {
        icon: <LuLayoutDashboard />,
        text: "Dashboard",
        paths: ["/affiliate/dashboard"],
      },
      {
        icon: <MdOutlineCampaign />,
        text: "Campaign",
        paths: [
          "/affiliate/campaign/premium-campaign",
          "/affiliate/campaign/normal-campaign",
          "/affiliate/campaign/offer-demand",
        ],
        children: [
          {
            text: "Premium Campaign",
            path: "/affiliate/campaign/premium-campaign",
          },
          {
            text: "Normal Campaign",
            path: "/affiliate/campaign/normal-campaign",
          },
          { text: "Offer on Demand", path: "/affiliate/campaign/offer-demand" },
        ],
      },
      {
        icon: <TbMessageLanguage />,
        text: "Message Automation",
        paths: ["/affiliate/msg-automation"],
      },
      {
        icon: <TbReportAnalytics />,
        text: "Reports",
        paths: [
          "/affiliate/reports/statistics",
          "/affiliate/reports/customize-report",
        ],
        children: [
          { text: "Statistics", path: "/affiliate/reports/statistics" },
          {
            text: "Customize Report",
            path: "/affiliate/reports/customize-report",
          },
        ],
      },
      {
        icon: <MdOutlineLeaderboard />,
        text: "Leaderboard",
        paths: ["/affiliate/leaderboard"],
      },
      {
        icon: <TbLink />,
        text: "Post-back",
        paths: ["/affiliate/global-postback", "/affiliate/test-postback"],
        children: [
          { text: "Global Post-back", path: "/affiliate/global-postback" },
          { text: "Test Post-back", path: "/affiliate/test-postback" },
        ],
      },
      {
        icon: <TbLink />,
        text: "Lead Generation Form",
        paths: ["/affiliate/lead-generation-form"],
      },
      {
        icon: <TbLink />,
        text: "IntiLink",
        paths: ["/affiliate/intilink"],
      },
      {
        icon: <BiStoreAlt />,
        text: "Ecommerce Store",
        paths: ["/affiliate/ecommerce-store", "/affiliate/ecom-product"],
      },
      {
        icon: <RiCoupon3Line />,
        text: "Coupons-store",
        paths: ["/affiliate/coupons"],
      },
    ],
    master: [
      {
        icon: <TbWallet />,
        text: "Wallet & Card",
        paths: ["/affiliate/wallet-and-card"],
        children: [
          { text: "Wallet", path: "/affiliate/wallet-and-card" },
          { text: "Download Invoice", path: "/affiliate/download-invoice" },
        ],
      },
      {
        icon: <CgUserList />,
        text: "User Management",
        paths: ["/affiliate/user-role", "/affiliate/manage-role"],
        children: [
          { text: "Add Users", path: "/affiliate/user-role" },
          { text: "Add Role", path: "/affiliate/manage-role" },
        ],
      },
      {
        icon: <TbLink />,
        text: "Generate Invoice",
        paths: [
          "/affiliate/create-invoice",
          "/affiliate/download-invoice",
          "/affiliate/accounting-segment",
        ],
        children: [
          { text: "Create Invoice", path: "/affiliate/create-invoice" },
          { text: "Download Invoice", path: "/affiliate/download-invoice" },
          { text: "Accounting Segment", path: "/affiliate/accounting-segment" },
        ],
      },
      {
        icon: <TfiHeadphoneAlt />,
        text: "Tickets",
        paths: ["/affiliate/tickets", "/affiliate/tickets/create-ticket"],
      },
      {
        icon: <MdOutlineLiveHelp />,
        text: "Help",
        paths: ["/affiliate/helps"],
      },
      {
        icon: <LuShare2 />,
        text: "Share & Earn",
        paths: ["/affiliate/share-earn"],
      },
      {
        icon: <MdOutlineSettings />,
        text: "Settings",
        paths: [
          "/affiliate/settings/overview",
          "/affiliate/settings/kyc",
          "/affiliate/settings/connected-account",
          "/affiliate/settings/activity-log",
          "/affiliate/settings/deactivate",
        ],
        children: [
          { text: "Overview", path: "/affiliate/settings/overview" },
          { text: "KYC", path: "/affiliate/settings/kyc" },
          {
            text: "Connected account",
            path: "/affiliate/settings/connected-account",
          },
          { text: "Activity log", path: "/affiliate/settings/activity-log" },
          { text: "Deactivate", path: "/affiliate/settings/deactivate" },
        ],
      },
    ],
  },
  4: {
    menu: [
      {
        icon: <LuLayoutDashboard />,
        text: "Dashboard",
        paths: ["/influencer/dashboard"],
      },
      {
        icon: <LuBadgeDollarSign />,
        text: "Brand Deal",
        paths: [
          "/influencer/brand-deal/all-deals",
          "/influencer/brand-deal/active-deals",
          "/influencer/brand-deal/approval-board",
          "/influencer/brand-deal/requests",
          "/influencer/brand-deal/review",
          "/influencer/brand-deal/active-boards",
        ],
        children: [
          { text: "All Deals", path: "/influencer/brand-deal/all-deals" },
          { text: "Active Deals", path: "/influencer/brand-deal/active-deals" },
          {
            text: "Approval Board",
            path: "/influencer/brand-deal/approval-board",
          },
          { text: "Requests", path: "/influencer/brand-deal/requests" },

          {
            text: "Active brand",
            path: "/influencer/brand-deal/active-brand",
          },
        ],
      },
      {
        icon: <MdOutlineCampaign />,
        text: "Campaign",
        paths: [
          "/influencer/campaign/premium-campaign",
          "/influencer/campaign/normal-campaign",
          "/influencer/campaign/offer-demand",
        ],
        children: [
          {
            text: "Premium Campaign",
            path: "/influencer/campaign/premium-campaign",
          },
          {
            text: "Normal Campaign",
            path: "/influencer/campaign/normal-campaign",
          },
          {
            text: "Offer on Demand",
            path: "/influencer/campaign/offer-demand",
          },
        ],
      },
      {
        icon: <TbMessageLanguage />,
        text: "Message Automation",
        paths: ["/influencer/msg-automation"],
      },
      {
        icon: <TbLink />,
        text: "Lead Generation Form",
        paths: ["/influencer/lead-generation-form"],
      },
      {
        icon: <TbReportAnalytics />,
        text: "Reports",
        paths: [
          "/influencer/reports/statistics",
          "/influencer/reports/customize-report",
        ],
        children: [
          { text: "Statistics", path: "/influencer/reports/statistics" },
          {
            text: "Customize Report",
            path: "/influencer/reports/customize-report",
          },
        ],
      },
      {
        icon: <MdOutlineLeaderboard />,
        text: "Leaderboard",
        paths: ["/influencer/leaderboard"],
      },
      {
        icon: <BiStoreAlt />,
        text: "Ecommerce Store",
        paths: ["/influencer/ecommerce-store", "/influencer/ecom-product"],
      },
      {
        icon: <RiCoupon3Line />,
        text: "Coupons-store",
        paths: ["/influencer/coupons"],
      },
      {
        icon: <TbLink />,
        text: "Post-back",
        paths: ["/influencer/global-postback", "/influencer/test-postback"],
        children: [
          { text: "Global Post-back", path: "/influencer/global-postback" },
          { text: "Test Post-back", path: "/influencer/test-postback" },
        ],
      },
    ],
    master: [
      {
        icon: <TbWallet />,
        text: "Wallet & Card",
        paths: ["/influencer/wallet-and-card"],
        children: [
          { text: "Wallet", path: "/influencer/wallet-and-card" },
          { text: "Download Invoice", path: "/influencer/download-invoice" },
        ],
      },
      {
        icon: <CgUserList />,
        text: "User Management",
        paths: ["/influencer/user-role", "/influencer/manage-role"],
        children: [
          { text: "Add Users", path: "/influencer/user-role" },
          { text: "Add Role", path: "/influencer/manage-role" },
        ],
      },
      {
        icon: <TbLink />,
        text: "Generate Invoice",
        paths: [
          "/influencer/create-invoice",
          "/influencer/download-invoice",
          "/influencer/accounting-segment",
        ],
        children: [
          { text: "Create Invoice", path: "/influencer/create-invoice" },
          { text: "Download Invoice", path: "/influencer/download-invoice" },
          {
            text: "Accounting Segment",
            path: "/influencer/accounting-segment",
          },
        ],
      },
      {
        icon: <MdOutlineLiveHelp />,
        text: "Help",
        paths: ["/influencer/helps"],
      },
      {
        icon: <TfiHeadphoneAlt />,
        text: "Tickets",
        paths: ["/influencer/tickets", "/influencer/tickets/create-ticket"],
      },
      {
        icon: <LuShare2 />,
        text: "Share & Earn",
        paths: ["/influencer/share-earn"],
      },
      {
        icon: <MdOutlineSettings />,
        text: "Settings",
        paths: [
          "/influencer/settings/overview",
          "/influencer/settings/kyc",
          "/influencer/settings/connected-account",
          "/influencer/settings/activity-log",
          "/influencer/settings/deactivate",
        ],
        children: [
          { text: "Overview", path: "/influencer/settings/overview" },
          { text: "KYC", path: "/influencer/settings/kyc" },
          {
            text: "Connected account",
            path: "/influencer/settings/connected-account",
          },
          { text: "Activity log", path: "/influencer/settings/activity-log" },
          { text: "Deactivate", path: "/influencer/settings/deactivate" },
        ],
      },
    ],
  },
  5: {
    menu: [
      {
        icon: <LuLayoutDashboard />,
        text: "Dashboard",
        paths: ["/individual/dashboard"],
      },
      {
        icon: <MdOutlineCampaign />,
        text: "Campaign",
        paths: [
          "/individual/campaign/premium-campaign",
          "/individual/campaign/normal-campaign",
          "/individual/campaign/offer-demand",
        ],
        children: [
          {
            text: "Premium Campaign",
            path: "/individual/campaign/premium-campaign",
          },
          {
            text: "Normal Campaign",
            path: "/individual/campaign/normal-campaign",
          },
          {
            text: "Offer on Demand",
            path: "/individual/campaign/offer-demand",
          },
        ],
      },
      {
        icon: <TbLink />,
        text: "Lead Generation Form",
        paths: ["/individual/lead-generation-form"],
      },
      {
        icon: <TbReportAnalytics />,
        text: "Reports",
        paths: [
          "/individual/reports/statistics",
          "/individual/reports/customize-report",
        ],
        children: [
          { text: "Statistics", path: "/individual/reports/statistics" },
          {
            text: "Customize Report",
            path: "/individual/reports/customize-report",
          },
        ],
      },
      {
        icon: <MdOutlineLeaderboard />,
        text: "Leaderboard",
        paths: ["/individual/leaderboard"],
      },
      {
        icon: <BiStoreAlt />,
        text: "Ecommerce Store",
        paths: ["/individual/ecommerce-store", "/individual/ecom-product"],
      },
      {
        icon: <RiCoupon3Line />,
        text: "Coupons-store",
        paths: ["/individual/coupons"],
      },
      {
        icon: <TbLink />,
        text: "Post-back",
        paths: ["/individual/global-postback", "/individual/test-postback"],
        children: [
          { text: "Global Post-back", path: "/individual/global-postback" },
          { text: "Test Post-back", path: "/individual/test-postback" },
        ],
      },
    ],
    master: [
      {
        icon: <TbWallet />,
        text: "Wallet & Card",
        paths: ["/individual/wallet-and-card"],
        children: [
          { text: "Wallet", path: "/individual/wallet-and-card" },
          { text: "Download Invoice", path: "/individual/download-invoice" },
        ],
      },
      {
        icon: <CgUserList />,
        text: "User Management",
        paths: ["/individual/user-role", "/individual/manage-role"],
        children: [
          { text: "Add Users", path: "/individual/user-role" },
          { text: "Add Role", path: "/individual/manage-role" },
        ],
      },
      {
        icon: <TbLink />,
        text: "Generate Invoice",
        paths: [
          "/individual/create-invoice",
          "/individual/download-invoice",
          "/individual/accounting-segment",
        ],
        children: [
          { text: "Create Invoice", path: "/individual/create-invoice" },
          { text: "Download Invoice", path: "/individual/download-invoice" },
          {
            text: "Accounting Segment",
            path: "/individual/accounting-segment",
          },
        ],
      },
      {
        icon: <MdOutlineLiveHelp />,
        text: "Help",
        paths: ["/individual/helps"],
      },
      {
        icon: <TfiHeadphoneAlt />,
        text: "Tickets",
        paths: ["/individual/tickets", "/individual/tickets/create-ticket"],
      },
      {
        icon: <LuShare2 />,
        text: "Share & Earn",
        paths: ["/individual/share-earn"],
      },
      {
        icon: <MdOutlineSettings />,
        text: "Settings",
        paths: [
          "/individual/settings/overview",
          "/individual/settings/kyc",
          "/individual/settings/connected-account",
          "/individual/settings/activity-log",
          "/individual/settings/deactivate",
        ],
        children: [
          { text: "Overview", path: "/individual/settings/overview" },
          { text: "KYC", path: "/individual/settings/kyc" },
          {
            text: "Connected account",
            path: "/individual/settings/connected-account",
          },
          { text: "Activity log", path: "/individual/settings/activity-log" },
          { text: "Deactivate", path: "/individual/settings/deactivate" },
        ],
      },
    ],
  },
};
