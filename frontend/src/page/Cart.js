import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCardItem from "../assets/Animation3.gif"

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>
        {
          productCartItem[0] ?
          <div className="my-4 flex gap-3">
            <div className="w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>
            <div className="w-full h-full max-w-md mx-auto mt-5 bg-white rounded-lg shadow-lg">
      <h2 className="bg-blue-600 text-white p-3 text-xl font-semibold rounded-t-lg text-center">Summary</h2>
      <div className="flex justify-between w-full py-4 px-5 text-lg border-b">
        <p>Total Qty:</p>
        <p className="font-bold">{totalQty}</p>
      </div>
      <div className="flex justify-between w-full py-4 px-5 text-lg border-b">
        <p>Total Price:</p>
        <p className="font-bold">
          <span className="text-red-500">₹</span>
          {totalPrice}
        </p>
      </div>
      <button className="bg-red-500 w-full text-lg font-bold py-3 text-white rounded-b-lg hover:bg-red-600 transition duration-200">
        Payment
      </button>
      <p className="p-2 text-center ">Payment is not currently integrated with Product</p>
    </div>

          </div>
          :
          <>
          <div className="flex justify-center items-center w-full">
            <img src={emptyCardItem} alt=""  className="w-full max-w-[200px] text-slate-300"/>
            <p className="text-slate-400 text-3xl font-bold">Empty Cart</p>
           
          </div>
          </>
        }
      </div>
    </>
  );
};

export default Cart;
