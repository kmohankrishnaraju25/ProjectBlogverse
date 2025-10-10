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
    const [isLoading, setIsLoading] = useState(false)
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
    const [isModalOpen, setIsmodalOpen] = useState(false)
    const [success, SetSuccess] = useState('')
    const [error, SetError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        let NewErrors = {}


        if (!FormData.FullName) {
            NewErrors.FullName = "Please enter your full name"
        }
        if (!FormData.Email) {
            NewErrors.Email = "Please enter your Email"
        }
        if (!FormData.Password) {
            NewErrors.Password = "Please enter your password"
        }
        if (!FormData.confirm_password) {
            NewErrors.confirm_password = "Please enter your confirm password"
        } else if (FormData.Password !== FormData.confirm_password) {
            NewErrors.confirm_password = "Password and confirm password does not match"
        }
        if (Object.keys(NewErrors).length > 0) {
            SetErrors(NewErrors)
            setIsLoading(false)
        } else {
            setTimeout(() => {
                SetSuccess("Your account is successfully created")
                SetFormdata(
                    {
                        FullName: "",
                        Email: "",
                        Password: "",
                        confirm_password: ""

                    })
                setIsmodalOpen(true)
                setIsLoading(false)
            },3000)

        }

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
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-[80%] md:w-1/3 py-7 justify-center items-center gap-5 rounded-2xl transition-transform duration-300 hover:scale-102 ">
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
                <button type="submit" className="w-[90%] bg-purple-500 text-white px-3 py-2 rounded-2xl font-semibold cursor-pointer flex gap-5"> <CircleUser /><p>{isLoading ? "creating....":"create account"}</p></button>
                <p className=" text-gray-700 font-semibold">Already have an account?<Link to="/signin" className="text-purple-500 cursor-pointer hover:underline  ">Signin</Link></p>
                <button className="w-[90%]  text-gray-700  font-semibold rounded-2xl hover:bg-gray-200 cursor-pointer py-2 px-3 ">Back to home</button>
            </form>
            {isModalOpen &&
                <div className="fixed border-red-400 h-dvh w-dvw border-2 flex justify-center items-center ">
                    <div className=" absolute h-dvh w-dvw bg-black opacity-50"></div>
                    <div className="border-1 border-gray-500 px-5 py-5 bg-white rounded-2xl z-10">
                        <p className="font-bold">Hello!! Mohan krishna </p>
                        <p>Your account is created successfully ✅Thank you </p>
                        <div className="flex gap-50">
                            <Link to="/Signin" className="px-4 py-2 bg-blue-400 rounded-2xl">login</Link>
                            <button onClick={() => setIsmodalOpen(false)} className="px-4 py-2 rounded-2xl bg-gray-400">close</button>
                        </div>
                    </div>
                </div>}


        </div>
    )
}
export default SignUp