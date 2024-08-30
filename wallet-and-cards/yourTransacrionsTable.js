import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import spinner icon
import Skeleton from "@mui/material/Skeleton"; // Import MUI Skeleton
import { useRecentTransactions } from "@/src/hooks/wallet/useRecentTransactions";

export default function RecentTransactionsTable() {
  const { transactions, loading, error } =
    useRecentTransactions(); // Use the custom hook
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // Default sort order

  // Handle sorting by date
  const handleSort = (order) => {
    const sortedData = [...transactions].sort((a, b) => {
      return order === "asc"
        ? a.created_at - b.created_at
        : b.created_at - a.created_at;
    });
    setSortedTransactions(sortedData);
    setSortOrder(order);
  };

  // Initialize sorted transactions when transactions are loaded
  React.useEffect(() => {
    setSortedTransactions(transactions);
  }, [transactions]);

  return (
    <div className="w-full bg-white border-[1px] border-[#D9D9D9] rounded-md p-4 sm:p-4">
      <div className="flex basis-6/12 items-center mb-5 justify-between">
        <div className="font-bold text-lg 2xl:text-[22px] sm:text-xl leading-5 text-[#2E335B]">
          Recent transactions
        </div>
        <div>
          <select
            className="border text-[#2E335B] font-[900] text-[10px] sm:text-[12px] 2xl:text-sm sm:w-[118px] bg-transparent justify-center text-center border-[#2E335B] rounded-xl h-[30px] items-center flex px-2 focus:ring-2 focus:ring-[5e17eb] focus:outline-none"
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
          >
            <option value="desc">Sort by Desc</option>
            <option value="asc">Sort by Asc</option>
          </select>
        </div>
      </div>

      {/* Loader while fetching data */}
      {loading && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="loading skeleton table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Skeleton variant="text" width="60%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="60%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="40%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="20%" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton variant="text" width="80%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="70%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="50%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="circular" width={24} height={24} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Error message */}
      {error && (
        <div className="text-center text-red-500 font-semibold">
          Error: {error}
        </div>
      )}

      {/* No transactions message */}
      {!loading && !error && sortedTransactions.length === 0 && (
        <div className="text-center text-gray-500 font-semibold">
          No transactions found.
        </div>
      )}

      {/* Transactions Table */}
      {!loading && sortedTransactions.length > 0 && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="recent transactions table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#0E0E0E",
                    lineHeight: "14px",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#0E0E0E",
                    lineHeight: "14px",
                  }}
                >
                  Date and Time
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#0E0E0E",
                    lineHeight: "14px",
                  }}
                >
                  Amount
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#0E0E0E",
                    lineHeight: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedTransactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ lineHeight: "12px", fontWeight: "bold" }}
                  >
                    {transaction.description ||
                      transaction.notes?.description ||
                      "N/A"}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#324054",
                      lineHeight: "12px",
                      fontWeight: "bold",
                      opacity: 0.5,
                    }}
                    align="left"
                  >
                    {new Date(transaction.created_at * 1000).toLocaleString()}
                  </TableCell>
                  <TableCell
                    style={{ lineHeight: "14px", fontWeight: "bold" }}
                    align="left"
                  >
                    ₹{(transaction.amount / 100).toFixed(2)}
                  </TableCell>
                  <TableCell
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <FiMoreHorizontal />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
