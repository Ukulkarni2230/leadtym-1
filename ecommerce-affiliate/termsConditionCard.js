import React from 'react'
// import { RxCross2 } from 'react-icons/rx'

function TermsConditionCard({ handleTncClose }) {
     return (
          <div className='sm:w-auto md:w-[436px] lg:[436px] h-max bg-white p-6'>
               <div className='flex items-center justify-between'>
                    <h1 className='text-primary font-bold text-lg'>Terms & Conditions
                    </h1>
                    <span className='cursor-pointer' onClick={handleTncClose}>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_3702_78886" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                   <rect width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_3702_78886)">
                                   <path d="M12.0005 13.0543L6.92737 18.1274C6.78892 18.2658 6.61489 18.3367 6.40527 18.3399C6.19567 18.3431 6.01844 18.2723 5.87357 18.1274C5.72869 17.9825 5.65625 17.8069 5.65625 17.6005C5.65625 17.3941 5.72869 17.2184 5.87357 17.0736L10.9466 12.0005L5.87357 6.92737C5.73511 6.78892 5.66427 6.61489 5.66107 6.40527C5.65786 6.19568 5.72869 6.01844 5.87357 5.87357C6.01844 5.72869 6.19407 5.65625 6.40047 5.65625C6.60687 5.65625 6.78251 5.72869 6.92737 5.87357L12.0005 10.9466L17.0736 5.87357C17.212 5.73511 17.3861 5.66427 17.5957 5.66107C17.8053 5.65786 17.9825 5.72869 18.1274 5.87357C18.2723 6.01844 18.3447 6.19407 18.3447 6.40047C18.3447 6.60687 18.2723 6.78251 18.1274 6.92737L13.0543 12.0005L18.1274 17.0736C18.2658 17.212 18.3367 17.3861 18.3399 17.5957C18.3431 17.8053 18.2723 17.9825 18.1274 18.1274C17.9825 18.2723 17.8069 18.3447 17.6005 18.3447C17.3941 18.3447 17.2184 18.2723 17.0736 18.1274L12.0005 13.0543Z" fill="#9E9EA2" stroke="#9B959F" stroke-width="1.5" />
                              </g>
                         </svg>
                    </span>
                    {/* <RxCross2 onClick={handleTncClose} className='cursor-pointer' size={24} color='gray' fontWeight={900} /> */}
               </div>
               <p className="text-primary font-normal leading-5 mt-4 pr-6">
                    This brand doesn't have any special terms and
                    <span className="block">conditions for their affiliate program at</span>
                    <span>this moment.</span>
                    <span className="block">Please note that this can change in the future.</span>
                    <span className="block">We recommend affiliates to review the program TnC periodically.</span>
               </p>

          </div>
     )
}

export default TermsConditionCard