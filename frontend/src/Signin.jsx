const Signin = () => {
    return (
        <div className="flex flex-col items-center h-screen justify-center gap-7 bg-blue-50">
            <div className="flex flex-col border-1 rounded-2xl p-10 w-1/4 shadow-sm hover:shadow-gray-600 bg-white">
                <h1 className="text-center font-bold text-2xl ">Sign In</h1>
                <p className=" text-center text-gray-500">Access your account</p>
                <form className="flex flex-col gap-5">
                    <div>
                        <p className=" font-semibold text-sm text-gray-600 pr-10 py-3">
                            Email Address
                        </p>
                        <input type="text" placeholder="Sample@gmail.com" className="rounded-2xl shadow-sm hover:shadow-gray-400 border-1 border-gray-600 w-full px-7 py-2"></input>
                    </div>
                    <div>
                        <p className=" font-semibold text-sm text-gray-600 pr-40 py-3 ">
                            Password
                        </p>
                        <input type="text" placeholder="Sample123" className="rounded-2xl border-1 shadow-sm hover:shadow-gray-400 border-gray-600 w-full px-3 py-2"></input>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" name="" id="" className="h-5 w-5" />
                            <p className="cursor-pointer">
                                Remember me
                            </p>
                        </div>
                        <div>
                            <button className=" font-semibold text-sm py-3 text-blue-600 hover:underline ">Forgot Password?</button>
                        </div>

                    </div>
                    <div className="flex justify-center items-center border-1 hover:scale-x-110 transition-transform shadow-sm hover:shadow-gray-400 hover:bg-blue-700 bg-blue-600 text-white rounded-2xl px-3 py-4 ">
                        <p>Sign In</p>
                    </div>
                    <div className="flex justify-center pl-10 w-[90%]" >
                        <p className=" font-semibold text-md text-gray-600 " >
                            Don't have an account? 
                        </p>
                        <p className="text-blue-600 cursor-pointer hover:underline">Create one here</p>
                    </div>

                </form>
            </div>

        </div>

    )
}
export default Signin