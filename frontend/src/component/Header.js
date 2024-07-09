import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";

const Header = () => {
    const [showMenu,setShowMenu]=useState(false)
    const userData=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const handleShowMenu=()=>{
        setShowMenu(prev=>!prev)
    }
    const handleLogout=()=>{
     dispatch(logoutRedux())
     toast("Logout Successfully")
    }
    const cartItemNumber=useSelector((state)=>state.product.cartItem)
  
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex items-center justify-between h-full">
        <Link to={""}>
          <div className="h-14">
            <img src={logo} alt="" width={60} className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
            <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
               <Link to={""}>Home</Link> 
               <Link to={"menu/668589b2f388b6e7ea270021"}>Menu</Link> 
               <Link to={"about"}>About</Link> 
               <Link to={"contact"}>Contact</Link> 

            </nav> 
            <div className="text-2xl text-slate-700 relative">
                <Link to={"cart"}><FaShoppingCart/>
                <div className="absolute -top-2 -right-2 text-white bg-red-600 h-5 text-base text-center m-0 p-0 w-4 rounded-full">{cartItemNumber.length}</div>
                </Link>
            </div>
            <div className=" text-slate-700">
                <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden" onClick={handleShowMenu}>
                  {
                    userData.image? <img src={userData.image} alt="" className="w-full h-full"/>:
             <FaRegUserCircle/>
                  }
                </div>
                {
                    showMenu && (
                        <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                        {
                          userData.email===process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">New Product</Link>
                        }                          
                        
                        {
                          userData.email?<p className="cursor-pointer px-2" onClick={handleLogout}>Logout({userData.firstName})</p>: <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
                        }
                         <nav className=" text-base md:text-lg flex flex-col md:hidden">
               <Link to={""}className="px-2 py-1">Home</Link> 
               <Link to={"menu"} className="px-2 py-1">Menu</Link> 
               <Link to={"about"} className="px-2 py-1">About</Link> 
               <Link to={"contact"} className="px-2 py-1">Contact</Link> 

            </nav> 
                        
                    </div>
                    )
                }
               
            </div>
           
        </div>
      </div>
    </header>
  );
};

export default Header;
