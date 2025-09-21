import React from 'react';
import NavBar from './NavBar';
import { Link } from "react-router-dom"
const SignUp = () => {
    return (
        <div className='flex flex-col min-h-screen items-center 2'>
            <NavBar />
            <form className=" flex flex-col mt-20 border-1 border-gray-400 w-[90%] md:w-1/3 items-center gap-5  mb-7 rounded-2xl ">
                <div className=" flex flex-col justify-center items-center gap-3 mt-8">
                    <h1 className="text-4xl font-bold ">Sign In</h1>
                    <p className="">Access your account</p>
                </div>
                <div className="w-[90%] flex flex-col gp-2">
                    <p className="font-semibold py-1 ">Email address</p>
                    <input type="email" placeholder='enter your email' className="border-1  border-gray-700 w-full py-3 px-3 rounded-xl focus:outline-none " />
                </div>
                <div className="w-[90%] flex flex-col gp-2">
                    <p className="font-semibold py-1 ">Password</p>
                    <input type="password" placeholder='enter your password' className="border-1 text-gray-600 border-gray-700 w-full py-3 px-3 rounded-xl focus:outline-none " />
                </div>
                <div className="flex justify-center items-center w-[90%]  ">
                    <div className="flex gap-2 justify-items-start w-[70%] px-3 py-1 items-center ">
                        <input type="checkbox" className="h-5 w-5 " />
                        <p className="font-semibold">remember me</p>
                    </div>
                    <button className="text-gray-700 font-semibold cursor-pointer ">forgot password?</button>
                </div>
                <button className="w-[90%] py-3 bg-blue-800 text-white rounded-xl font-semibold cursor-pointer">Sign In</button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-1"></div>
                <p className="text-gray-700 font-semibold mb-8 ">Don't have an Account? <Link to="/SignUp" className="text-blue-500 hover:underline">create one here</Link></p>


            </form>
        </div>
    )

}
export default SignUp