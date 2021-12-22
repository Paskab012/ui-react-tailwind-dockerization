import React from "react";


export default function NewAccount() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 cursor-pointer bg-amber-300" viewBox="0 0 20 20" fill="text-purple-600" onClick={() => setShowModal(true)}>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
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
                                        New Account
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-8">
                                    <p className="my-4 -mt-8 text-sm leading-relaxed text-gray-600">
                                        Create an icome/expense account to start recording. <br />
                                        You can create up to 5 accounts
                                        <br /><br /><br /><br /><br />
                                        <p className="mb-2 text-sm text-gray-600">Name</p>
                                        <div class="mb-3 pt-0">
                                            <input type="text" placeholder="Account name" class="px-3 py-3 placeholder-blueGray-300 text-gray-800 relative  bg-purple-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                        </div>
                                        <p className="mb-2 text-sm text-gray-600">Currency</p>
                                        <div class="mb-3 pt-0">
                                            <input type="text" placeholder="Enter your currency" class="px-3 py-3 placeholder-blueGray-300 text-gray-800 relative  bg-purple-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
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
                                        className="px-6 py-3 mb-1 mr-1 text-sm text-white uppercase transition-all duration-150 ease-linear bg-red-700 rounded shaddow utline-none font-bolder active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        ADD ACCOUNT
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
