import React, { useState } from "react";
import profile from "../assets/profile.gif";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const [data, setData] = useState({
    email: "",
    password: ""
   
  });

  const navigate=useNavigate()
  const userData = useSelector((state) => state)
 

const dispatch=useDispatch()
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email, password } = data
    if (email && password) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });
      const dataRes = await fetchData.json();
      console.log(dataRes);
    
      toast(dataRes.message)
      if(dataRes.alert){
        dispatch(loginRedux(dataRes))
         console.log(userData)
        setTimeout(() => {
          navigate("/")
        }, 1000);  
      }
     
    } else {
      alert("Enter required Details");
    }
  }

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded">
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className="w-16 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={profile} alt="" className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200  border-none outline-none"
              n
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiSolidShow /> : <BiSolidHide />}
            </span>
          </div>
          
          <button
            type="submit"
            className="w-full max-w-[120px] m-auto text-white text-center font-medium bg-orange-500 rounded-full hover:bg-green-500 cursor-pointer py-1 mt-4 "
          >
            Login
          </button>
        </form>
        <p className="text-sm">
          Don't have any account ?{" "}
          <Link to={"/signup"} className="text-red-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
