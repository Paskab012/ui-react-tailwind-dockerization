import React from "react";
import Graph from "./chart";
import NewExpense from "./NewExpense";
import NewIncome from "./NewIncome";
import Chart from "./PieChart";

function CardBody(props) {
    return (
        <>
            <div className="h-screen max-w-sm border-r border-purple-200 ">
            <div className="justify-center">
                    <div className="items-center justify-center px-6 py-12 w-62 dark:bg-gray-900">
                            <div className="flex flex-col justify-between h-40 px-4 py-5 m-auto mb-6 bg-purple-100 rounded-lg align-center dark:bg-gray-800 ">
                            <h3 className="m-8 ml-12 text-3xl font-bold text-purple-700">1,467,845 Rwf
                                <br /><p className="ml-8 text-sm font-normal text-gray-600">02 Feb 2020 - Now</p>

                            </h3>
                            </div>
                       
                        <div className="inline-flex ">
                        <NewExpense/>
                        <NewIncome/>
                        </div>
                        <p className="mt-12 text-sm font-bold">EXPENSE VS INCOME</p>
                        <div className="-ml-5 ">
                          <Graph/>  
                        </div>
                        <div className="">
                            <Chart/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CardBody;