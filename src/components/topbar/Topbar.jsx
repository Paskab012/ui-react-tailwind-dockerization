/* eslint-disable eqeqeq */
import React from "react";
import Profile from '../../assets/img/team-4-470x470.png'

function TopBar() {

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="py-5 bg-white rounded shadow px-7">
                <nav className="flex justify-around">
                    <div className="flex space-x-3 lg:pr-16">
                        <h2 className="text-xl font-bold leading-6 text-black ">AWASOMITY LAB</h2>
                    </div>
                    <ul>
                        <li className="text-white">helloworld</li>
                    </ul>
                    <ul>
                        <li className="text-white">helloworld</li>
                    </ul>
                    <ul>
                        <li className="text-white">helloworld</li>

                    </ul>
                    <ul>
                        <li className="text-white">helloworld</li>

                    </ul>
                    <div className="flex items-center justify-center pl-2 space-x-5 ">
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <div className="flex">
                                <img src={Profile} alt="" className="object-cover w-10 h-10 rounded-full" />
                                <p className="justify-center mt-2 ml-2 bold">Ida Paulsen</p>
                            </div>
                        </div>
                        
                    </div>
                </nav>
            </div>
        </div>

    );
}
export default TopBar
