"use client";
import React from "react";
import Circlechartcard from "../user-demographics/circlechartcard";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
// import GaugeChart from "./gaugechart";
import CommonCirclechart from "../Userbehavior&journey/commonCirclechart";
import GaugeChart from "./GaugeChart";
function createData(date, requests, unattended, inProcess, solved, avgSolutionTime) {
    return { date, requests, unattended, inProcess, solved, avgSolutionTime };
  }
const rows = [
createData(
  "20 Jun, 2024",
  "100% 2.53M",
  "8% 0.9329K",
  "21% 1.6284K",
  "11% 1.2832K",
  "49% 19.34K"
),
createData(
  "20 Jun, 2024",
  "100% 2.53M",
  "35% 2.9329K",
  "34% 19.34K",
  "15% 1.6284K",
  "17% 12.32K"
),
createData(
  "20 Jun, 2024",
  "100% 2.53M",
  "15% 1.6284K",
  "17% 12.32K",
  "34% 19.34K",
  "12% 1.3292K"
),
createData(
  "20 Jun, 2024",
  "100% 2.53M",
  "15% 1.6284K",
  "12% 1.3292K",
  "17% 12.32K",
  "35% 2.9329K"
),
];

const UserFeedbackLayout = () => {
   

  const data = [
    { name: "Completed", value: 200, fill: "#7661F5" }, // Purple segment
    { name: "Uncompleted", value: 50, fill: "#5CC8BE" }, // Light blue segment
  ];

  const total = data.reduce((sum, current) => sum + current.value, 0);

  return (
    <div className="flex flex-col p-2 gap-y-4 sm:gap-y-6 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-4 sm:gap-x-6">
        <Circlechartcard
          data={data}
          title="Transections"
          user="Total amount"
          amt="250"
          total={total}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-6">
          <div className=" w-full justify-between p-6 shadow-md shadow-purple-200 border-[1px] rounded-md flex flex-col border-[#D8D9D4] bg-white">
            <p className="text-center font-bold text-[#2E2E30] text-xs sm:text-sm 2xl:text-base">
              Net Promoter Score
            </p>
            <div>
              <GaugeChart />
            </div>
            <p className="text-center text-[#2E2E30] font-normal text-[10px] sm:text-xs 2xl:text-sm">
              Here are some tips on how to improve your score
            </p>
          </div>
          <div className=" w-full p-6 justify-between shadow-md shadow-purple-200 border-[1px] rounded-md flex flex-col border-[#D8D9D4] bg-white">
            <p className="text-center font-bold text-[#2E2E30] text-xs sm:text-sm 2xl:text-base">
              User Satisfaction Score
            </p>
            <div>
              <GaugeChart />
            </div>
            <p className="text-center text-[#2E2E30] font-normal text-[10px] sm:text-xs 2xl:text-sm">
              Here are some tips on how to improve your score
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-4 sm:gap-x-6">
        <div className="lg:w-3/4 w-full border-[1px] rounded-md flex flex-col border-[#D8D9D4] bg-white">

          <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow className="font-semibold text-[#101018] text-[10px] sm:text-xs 2xl:text-sm">
            <TableCell padding="checkbox">
              <Checkbox color="primary" />
            </TableCell>
            <TableCell style={{color:'#101018',fontWeight:'600'}}>Request Date</TableCell>
            <TableCell style={{color:'#101018',fontWeight:'600'}} align="right">No of request</TableCell>
            <TableCell style={{color:'#101018',fontWeight:'600'}} align="right">Unattended</TableCell>
            <TableCell style={{color:'#101018',fontWeight:'600'}} align="right">In Process</TableCell>
            <TableCell style={{color:'#101018',fontWeight:'600'}} align="right">Solved</TableCell>
            <TableCell style={{color:'#101018',fontWeight:'600'}} align="right">Avg solution Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell style={{fontWeight:"700",fontSize:'14px'}} component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell style={{fontWeight:"700",fontSize:'14px'}} align="right">{row.requests}</TableCell>
              <TableCell align="right">{row.unattended}</TableCell>
              <TableCell align="right">{row.inProcess}</TableCell>
              <TableCell align="right">{row.solved}</TableCell>
              <TableCell align="right">{row.avgSolutionTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

        <div className="lg:w-1/4 w-full">
        <CommonCirclechart data={data} total={total} title="User Feedback" amt="100%" subtil="User Visitors" />
        </div>
      </div>
    </div>
  );
};

export default UserFeedbackLayout;
