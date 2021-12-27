import React from "react";
import CardBody from "../body/CardBody";
import AllAccount from "../allAcounts/AllAccount";
import Sidebar from "../sidebar/Sidebar";



function Home() {
    return (
        <div className="flex flex-no-wrap">
           <Sidebar/>
            <div className="container h-64 px-6 py-10 mx-auto md:w-4/5">
                <AllAccount/>
                <div className="w-full h-full ">
                    
                    <CardBody/> </div>
            </div>
        </div>
    );
}

export default Home;
