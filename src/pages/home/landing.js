import React from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="bg-secondary h-[100vh] p-16 lg:p-20">
        <div className="bg-primary flex flex-col items-center justify-center h-[80vh] lg:h-[70vh] rounded-[15px] p-10">
          <div>
            <img src={logo} alt="logo" className="m-auto h-[30px] lg:h-[60px]"/>
            <h1 className="text-paragraph100 text-2xl lg:text-4xl font-sans font-bold text-center mt-4 mb-12 lg:mb-8">Web Application Wallet</h1>
            <p className="text-paragraph50 text-center lg:px-20 mb-10">
              Control your budget, track all in and out transactions from each of your accounts,
              generate a report according to the desired time gap, see your transactions summary in a visualized way
            </p>
          </div>
          <Link to="/login" className="px-12 py-4 bg-secondary m-auto rounded-[15px] text-paragraph100 text-lg font-sans font-bold">
              Get started
            </Link>
        </div>
    </div>
  )
}

export default Landing