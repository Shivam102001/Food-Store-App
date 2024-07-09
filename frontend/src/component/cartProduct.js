import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import {useDispatch} from "react-redux";
import { deleteCartItem,increaseQty,decreaseQty} from "../redux/productSlide";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
    const dispatch=useDispatch()
  return (
<div className="bg-white p-4 flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg border border-slate-300 shadow-sm">
      <div className="p-3 bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0">
        <img src={image} alt="" className="h-28 w-full md:w-40 object-cover" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-slate-700 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className="cursor-pointer text-slate-700 hover:text-red-500 transition duration-200"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <MdDelete />
          </div>
        </div>
        <p className="text-slate-500 font-medium">{category}</p>
        <p className="font-bold text-lg">
          <span className="text-red-500">₹</span>
          <span>{price}</span>
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center bg-white border border-slate-300 p-2 rounded-lg">
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-yellow-400 p-2 rounded hover:bg-yellow-600 transition duration-200"
            >
              <FiPlus />
            </button>
            <p className="font-semibold mx-4">{qty}</p>
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-yellow-400 p-2 rounded hover:bg-yellow-600 transition duration-200"
            >
              <FiMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total:</p>
            <p>
              <span className="text-red-500">₹</span>{total}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CartProduct;
