const NavBar = () => {
    return (
        <div className="  cursor-pointer flex justify-around items-center h-16 border-b-gray-300 border-b-1">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <button className="text-gray-700 hover:bg-gray-200 rounded-lg px-5">Home</button>
            <div className=" flex gap-5">
                <button className=" cursor-pointer font-semibold">SignIn</button>
                <button className="hover:bg-blue-700 bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer">SignUp</button>
            </div>
        </div>
    )
}
export default NavBar