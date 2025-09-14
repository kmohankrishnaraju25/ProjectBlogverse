const NavBar = () => {
    return (
        <div className=" flex justify-around items-center h-16 border-b-black border-b-2">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <button className="text-gray-700 hover:bg-blue-600 rounded-lg px-5">Home</button>
            <div className=" flex gap-5">
                <button className="font-semibold">SignIn</button>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer">SignUp</button>
            </div>
        </div>
    )
}
export default NavBar