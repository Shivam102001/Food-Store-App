import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading,id}) => {
  return (
    <div className="bg-white shadow p-2 rounded min-w-[150px]">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}>
          <div className="w-48 min-h-[150px]">
            <img src={image} alt="" className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-center  text-slate-600 capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-500 font-medium">{category}</p>
          <p className="font-bold text-center">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>
          </Link>
        </>
      ) : (
        <div  className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
