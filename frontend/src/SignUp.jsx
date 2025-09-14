const SignUp = () => {
    return (
        <div className="flex flex-col items-center mt-10 gap-5">
            <h1 className="font-bold text-2xl text-blue-400">
                Join BlogVerser
            </h1>
            <p className="text-gray-500 text-xl text-center font-semibold ">
                Create your account and start your Journey
            </p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 justify-center items-center gap-5 rounded-2xl shadow-lg shadow-gray-300 hover:shadow-black ">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Full_Name</p>
                    <input type="text" placeholder="Enter your full Name:" className=" border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none  "></input>
                     
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Email</p>
                    <input type="text" placeholder="Enter your Email:" className=" border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none  "></input>
                     
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Password</p>
                    <input type="text" placeholder="Enter your Password:" className=" border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none  "></input>
                     
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className=" font-semibold text-md text-gray-700">Conform_Password</p>
                    <input type="text" placeholder="Conform_Password:" className=" border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none  "></input>
                     
                </div>
                <div className="flex gap-2 border-1 border-gray-700 w-[90%] py-2 px-3 rounded-2xl justify-center items-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the terms and conditions </p>
                    
                </div>
                <button className="w-[90%] bg-purple-500 text-white px-3 py-2 rounded-2xl font-semibold cursor-pointer">Create Account</button>
                <p className=" text-gray-700 font-semibold">Already have an account?<span className="text-purple-500 cursor-pointer  ">Signin</span></p>
                <button className="w-[90%]  text-gray-700  font-semibold rounded-2xl hover:bg-gray-200 cursor-pointer py-2 px-3 ">Back to home</button>
            </form>


        </div>
    )
}
export default SignUp