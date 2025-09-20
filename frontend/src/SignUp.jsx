import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";
import { Mail } from 'lucide-react';
import { User } from 'lucide-react';

const SignUp = () => {
    const [FormData, SetFormdata] = useState(
        {
            FullName: "",
            Email: "",
            Password: "",
            confirm_password: ""

        }
    )
    const [errors, SetErrors] = useState({
        FullName: "",
        Email: "",
        Password: "",
        confirm_password: ""

    })
    const [showPassword, setshowpassword] = useState(false)
    const [showconfirmpassword, setconfirmpassword] = useState(false)
    const handlepassword = () => {
        setshowpassword((password) => !password)
    }
    const handleconfirmpassword = () => {
        setconfirmpassword((password) => !password)
    }
    const handlechange = (event) => {
        SetError("")
        SetSuccess("")
        SetFormdata((FormData) => ({
            ...FormData, [event.target.name]: event.target.value
        }))
        SetErrors((errors) => ({
            ...errors, [event.target.name]: ""
        }))

    }
    const [success, SetSuccess] = useState('')
    const [error, SetError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        let NewErrors = {}


        if (!FormData.FullName) {
            NewErrors.FullName = "Please enter your full name"
        }
        if (!FormData.Email) {
            NewErrors.Email = "Please enter your Email"
        }
        if (!FormData.Password) {
            NewErrors.password = "Please enter your password"
        }
        if (!FormData.confirm_password) {
            NewErrors.confirm_password = "Please enter your confirm password"
        } else if (FormData.Password !== FormData.confirm_password) {
            NewErrors.confirm_password = "Password and confirm password does not match"
        }
        if (Object.keys(NewErrors).length > 0) {
            SetErrors(NewErrors)
        } else {
            SetSuccess("Your account is successfully created")
            SetFormdata(
                {
                    FullName: "",
                    Email: "",
                    Password: "",
                    confirm_password: ""

                })
        }
        // if (!FormData.FullName || !FormData.Email || !FormData.confirm_password || !FormData.Password) {
        //     SetError("Please fill all the fields")
        // } else if (FormData.Password !== FormData.confirm_password) {
        //     SetError("Password does not match")
        // }
        // else {
        //     SetSuccess("Your account is successfully created")
        //     SetError("")
        //     SetFormdata(
        //         {
        //             FullName: "",
        //             Email: "",
        //             Password: "",
        //             confirm_password: ""

        //         }
        //     )
        // }
    }




    return (
        <div className="flex flex-col items-center gap-5">
            <NavBar />
            <h1 className="font-bold text-2xl text-blue-400">
                Join BlogVerser
            </h1>
            <p className="text-gray-500 text-xl text-center font-semibold ">
                Create your account and start your Journey
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-1/3 py-7 justify-center items-center gap-5 rounded-2xl shadow-lg shadow-gray-300 hover:shadow-black ">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Full_Name</p>
                    <div className="relative">


                        <input value={FormData.FullName} onChange={handlechange} name="FullName" type="text" placeholder="Enter your full Name:" className=" border-1 border-gray-700 w-full py-2 px-9 rounded-2xl focus:outline-none  "></input>

                        <User className="absolute top-2 left-2 text-gray-400" />
                        {errors.FullName && <p className="text-red-500">{errors.FullName}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Email</p>
                    <div className="relative">
                        <input value={FormData.Email} onChange={handlechange} name="Email" type="email" placeholder="Enter your Email:" className=" border-1 border-gray-700 w-full py-2 px-9 rounded-2xl focus:outline-none  "></input>
                        < Mail className="absolute top-2 left-2 text-gray-400" />
                        {errors.Email && <p className="text-red-500" >{errors.Email}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Password</p>
                    <div className="relative">
                        <input value={FormData.Password} onChange={handlechange} name="Password" type={showPassword ? "text" : "password"} placeholder="Enter your Password:" className="  border-1 border-gray-700 w-full py-2 px-9 rounded-2xl focus:outline-none  "></input>
                        <KeyRound className="absolute top-2 left-2 text-gray-400" />
                        <p onClick={handlepassword}>{showPassword ? <EyeOff className="absolute top-2 right-5 text-gray-400" /> : <Eye className="absolute top-2 right-5 text-gray-400" />}</p>
                        
                    </div>
                    {errors.Password && <p className="text-red-500">{errors.Password}</p>}

                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Conform_Password</p>
                    <div className="relative">


                        <input value={FormData.confirm_password} onChange={handlechange} name="confirm_password" type={showconfirmpassword ? "text" : "password"} placeholder="Conform_Password:" className=" border-1 border-gray-700 w-full py-2 px-9 rounded-2xl focus:outline-none  "></input>
                        <KeyRound className="absolute top-2 left-2 text-gray-400" />
                        <p onClick={handleconfirmpassword}>{showconfirmpassword ? <EyeOff className="absolute top-2 right-5 text-gray-400" /> : <Eye className="absolute top-2 right-5 text-gray-400" />}</p>
                        {errors.confirm_password && <p className="text-red-500" >{errors.confirm_password}</p>}
                    </div>
                </div>
                <div className="flex gap-2 border-1 border-gray-700 w-[90%] py-2 px-3 rounded-2xl justify-center items-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the terms and conditions </p>

                </div>
                {error && <p className="text-red-500 ">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="w-[90%] bg-purple-500 text-white px-3 py-2 rounded-2xl font-semibold cursor-pointer flex gap-5"> <CircleUser />Create Account</button>
                <p className=" text-gray-700 font-semibold">Already have an account?<Link to="/signin" className="text-purple-500 cursor-pointer  ">Signin</Link></p>
                <button className="w-[90%]  text-gray-700  font-semibold rounded-2xl hover:bg-gray-200 cursor-pointer py-2 px-3 ">Back to home</button>
            </form>


        </div>
    )
}
export default SignUp