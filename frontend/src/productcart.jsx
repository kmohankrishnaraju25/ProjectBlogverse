const ProductCart = () => {
    return (

        <div className="border-5 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-2xl shadow-lg shadow-cyan-900 ">
            <img src="vite.svg" alt="" className="w-[150px] border-2 rounded-full border-black hover:w-[155px]" />
            <div className="flex flex-col gap-4 items-center">
                <h2 className="font-bold text-4xl text-blue-600">product_1</h2>
                <p className=" text-gray-600  text-center">This is simple product from the best company</p>
                <p className="font-bold text-green-500 text-2xl">price:$99.9-only</p>
            </div>
            <button className="bg-blue-600 text-white w-[90%] py-1 rounded-2xl cursor-pointer hover:bg-blue-900">
                Add to cart
            </button>
        </div>
    )

}
export default ProductCart