import React from "react";


export default function NewExpense() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button className="py-3 text-sm font-bold text-black bg-purple-300 rounded-l hover:bg-gray-400" style={{ width: "168px" }}
            onClick={() => setShowModal(true)}>
            EXPENSE
            </button>
            {showModal ? (
                <>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                    >
                        <div className="relative w-auto max-w-3xl mx-auto ">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white rounded-lg shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 ml-4 border-gray-200 rounded-t">
                                    <h3 className="text-xl font-bold text-purple-900">
                                        New Expense
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-16">
                                    <p className="my-4 -mt-8 text-sm leading-relaxed text-gray-600">
                                        Please provide here your expense details.
                                        <br /><br /><br />
                                        <p className="mb-2 text-sm text-gray-600">Amount</p>
                                        <div class="mb-3 pt-0">
                                            <input type="text" placeholder="Enter the amount" class="px-3 py-3 placeholder-blueGray-300 text-gray-800 relative  bg-purple-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                        </div>
                                        <p className="mb-2 text-sm text-gray-600">Category</p>
                                        <div class="mb-3 pt-0">
                                            <input type="text" placeholder="Choose category" class="px-3 py-3 placeholder-blueGray-300 text-gray-800 relative  bg-purple-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                        </div>
                                        <p className="mb-2 text-sm text-gray-600">Description</p>
                                        <div class="mb-3 pt-0">
                                            <input type="text" placeholder="Enter description" class="px-3 py-3 placeholder-blueGray-300 text-gray-800 relative  bg-purple-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                        </div>
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                                    <button
                                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-800 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-700 rounded shaddow utline-none active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        ADD EXPENSE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-purple-800 opacity-25"></div>
                </>
            ) : null}
        </>
    );
}
