/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";

function Table() {
    return (
        <>
            <div>
                <div className="w-full sm:px-6">
                    <div className="px-4 py-4 md:px-10 md:py-7">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center px-4 py-3 text-sm font-medium leading-none text-gray-600 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">
                                <p>Filter by:</p>
                                <select className="ml-1 bg-transparent focus:outline-none">
                                    <option className="text-sm text-indigo-800">Latest</option>
                                    <option className="text-sm text-indigo-800">Oldest</option>
                                    <option className="text-sm text-indigo-800">Latest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 bg-white md:py-7 md:px-8 xl:px-10">
                        <div className="overflow-x-auto mt-7">
                            <table className="w-full whitespace-nowrap">
                                <tbody>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="ml-5">
                                                <div className="relative flex items-center justify-center flex-shrink-0 w-5 h-5">
                                                    <input type="checkbox" className="absolute w-full h-full opacity-0 cursor-pointer checkbox" />
                                                    <div className="text-white bg-red-700 rounded-full check-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="mr-2 text-base font-medium leading-none text-gray-700">600,000rfw</p>
                                            </div>
                                        </td>
                                        
                                        <td className="pl-24">
                                            <div className="items-center ">
                                                <p className="ml-2 text-sm leading-none text-gray-600">27 Dec 2021</p>
                                            </div>
                                        </td>
                                        <td className="pl-5">
                                            <div className="flex items-center">
                                                <p className="ml-2 text-sm font-bold leading-none text-gray-600">FOOD</p>
                                            </div>
                                        </td>
                                        <td className="pl-12" >
                                            <div className="items-center ">
                                                <p className="ml-2 text-sm leading-none text-gray-600">Boy's Night at Mariotte Hotel Kigali</p>
                                            </div>
                                        </td>
                                        <td className="flex justify-center pl-6 align-center">
                                            <div className="m-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sm leading-none text-purple-600 bg-purple-100 rounded hover:bg-gray-200 focus:outline-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                            <div className="m-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sm leading-none text-red-600 bg-red-100 rounded hover:bg-gray-200 focus:outline-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
