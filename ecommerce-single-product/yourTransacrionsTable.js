import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoIosArrowDown } from "react-icons/io";

function createData(name, date_and_time, amount) {
     return { name, date_and_time, amount };
}

const rows = [
     createData('Taxi Trips', '03 Aug 2022, 15: 43', '$56.50'),
     createData('Public Transport', '04 Aug 2022, 15: 43', '$15.65'),
     createData('Plane Tickets', '05 Aug 2022, 15: 43', '$6'),
     createData('Taxi Trips', '06 Aug 2022, 15: 43', '$50'),
     createData('Gas Stations', '07 Aug 2022, 15: 43', '$56'),
];

export default function BasicTable() {
     return (
          <TableContainer component={Paper}>
               <div className='flex justify-between'>
                    <div
                         className='font-bold text-xl leading-5 text-[#2E335B] ml-3 mt-4'
                    >
                         Recent transactions
                    </div>
                    <button className='flex items-center mr-4 mt-2 border border-[#2E335B] rounded-lg p-2'>
                         <span className='font-extrabold leading-4 text-[#2E335B]'>Sort by</span>
                         <IoIosArrowDown className='ml-1' />
                    </button>
               </div>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                              <TableCell style={{ fontWeight: 'bold', color: '#0E0E0E', lineHeight: '14px' }}>Name</TableCell>
                              <TableCell style={{ fontWeight: 'bold', color: '#0E0E0E', lineHeight: '14px' }}>Date and Time</TableCell>
                              <TableCell style={{ fontWeight: 'bold', color: '#0E0E0E', lineHeight: '14px' }}>Amount</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {rows.map((row) => (
                              <TableRow
                                   key={row.name}
                                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                   <TableCell component="th" scope="row">
                                        {row.name}
                                   </TableCell>
                                   <TableCell align="left">{row.date_and_time}</TableCell>
                                   <TableCell align="left">{row.amount}</TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
}