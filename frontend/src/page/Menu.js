import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../component/AllProduct'
import { addCartItem } from '../redux/productSlide'

const Menu = () => {
  const { filterby }=useParams()
  const dispatch=useDispatch()
  const productData=useSelector(state=>state.product.productList)
  const productDisplay = productData.filter((el)=>el._id === filterby)[0]

  const handleAddCartProduct=(e)=>{
    dispatch(addCartItem(productDisplay))
  }
  
  return (
    <div className='p-2 md:p-4'>
      <div className="w-full max-w-4xl mx-auto md:flex bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="max-w-sm w-full p-5">
    <img
      src={productDisplay.image}n alt=''
      className="hover:scale-105 transition-transform duration-300 ease-in-out h-full w-full object-cover rounded-lg"
    />
  </div>
  <div className="flex flex-col gap-4 p-5 w-full">
    <h3 className="font-semibold text-slate-700 capitalize text-2xl md:text-4xl">
      {productDisplay.name}
    </h3>
    <p className="text-slate-500 font-medium text-xl md:text-2xl">{productDisplay.category}</p>
    <p className="font-bold text-xl md:text-2xl">
      <span className="text-red-500">₹</span>
      <span>{productDisplay.price}</span>
    </p>
    <div className="flex gap-3 mt-4">
      <button className="bg-yellow-500 py-2 rounded hover:bg-yellow-600 px-6 font-semibold transition duration-200 min-w-[100px]">
        Buy
      </button>
      <button
        onClick={handleAddCartProduct}
        className="bg-yellow-500 py-2 rounded hover:bg-yellow-600 px-6 font-semibold transition duration-200 min-w-[100px]"
      >
        Add Cart
      </button>
    </div>
    <div className="mt-4">
      <p className="text-slate-600 font-medium text-lg">Description</p>
      <p className="text-slate-700">{productDisplay.description}</p>
    </div>
  </div>
</div>


      <AllProduct heading={"Related Product"}/>
    </div>
  )
}

export default Menu
