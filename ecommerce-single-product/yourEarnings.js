import React from 'react';
import BasicTable from './yourTransacrionsTable';

function YourEarnings() {
     return (
          <>
               <div className='bg-gray-100 border rounded-md p-4'>
                    <p>You haven't made a sale through your affiliate links for this store yet!</p>
                    <p>Note: Make sure you do not modify the affiliate links you copy otherwise your sales may not get tracked.</p>
               </div>
               <BasicTable />
          </>

     )
}

export default YourEarnings