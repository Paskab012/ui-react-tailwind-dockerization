import React from 'react'

function AllAccount() {
    return (
        <>
        <div className="container flex flex-col items-start justify-between h-10 mb-6 -mt-6 border-purple-200 md:flex-row">
                <div >
                    <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">All Account</h4>
            </div>
            
                <div className="">
                    <button className="px-5 py-2 mb-4 mr-3 text-sm text-indigo-700 transition duration-150 ease-in-out bg-gray-200 rounded dark:bg-gray-700 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-indigo-600">To</button>
                    <button className="px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600">Filter</button>
            </div>
        </div>
        <div className='mb-10 -mt-4 border-b border-purple-200 w-60'>
        
            </div>
            </>
    )
}

export default AllAccount
