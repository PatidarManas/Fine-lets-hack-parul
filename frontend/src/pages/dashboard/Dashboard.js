import React, { useEffect, useState } from 'react'
import "./Dashboard.scss"
import axios from "axios"

import img from "../../6567338.jpg"
import { Slider } from '@mui/material';
import ApplyLoan from '../../Components/Applyloan/ApplyLoan';
import Notification from '../../Components/Notification';
import { useNavigate } from 'react-router-dom';
import { MdVerified } from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../LogoSVG (1).svg"
const Dashboard = ({ userdetails }) => {
    const URL="https://fine-backend.onrender.com"
    // const URL="http://localhost:4000"
    console.log(userdetails)
    const history = useNavigate()
    const [transactions, settransactions] = useState([])
    const [user, setuser] = useState()
    useEffect(() => {
        //   console.log(transactions)
    }, [transactions])

    function openbox(value) {
        console.log("c" + value)
        document.getElementById("b" + value).style.display = "flex"
        document.getElementById("p" + value).style.display = "flex"
        document.getElementById("o" + value).style.display = "none"
        document.getElementById("c" + value).style.display = "flex"
    }
    function closebox(value) {
        document.getElementById("b" + value).style.display = "none"
        document.getElementById("p" + value).style.display = "none"
        document.getElementById("o" + value).style.display = "flex"
        document.getElementById("c" + value).style.display = "none"
    }

    const amount = [
        {
            value: 0,
        },

        {
            value: 100,
        },
    ];

    const [amountval, setamountVal] = useState([0, 100]);
    const updateamountRange = (e, data) => {
        setamountVal(data);
    };
    const interest = [
        {
            value: 0,
        },

        {
            value: 100,
        },
    ];

    const [interestval, setinterestVal] = useState([0, 40]);
    const updateinterestRange = (e, data) => {
        setinterestVal(data);
    };
    const time = [
        {
            value: 0,
        },

        {
            value: 100,
        },
    ];
    async function logouthandler() {
        document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        history("../")
    }
    const [timeval, settimeVal] = useState([0, 50]);
    const updatetimeRange = (e, data) => {
        settimeVal(data);
    };
    async function getuser() {
        const token = document.cookie;
        console.log(token)
        try {
            await axios.post(`${URL}/auth/islogin`, {
                token
            }).then((res) => {
                console.log(res.data)
                setuser(res.data.newuser)

            }).catch((error) => {
                alert(error)
            })
        } catch (error) {
            alert(error)
        }
    }
    function notificationshow(index) {
        // console.log(index)
        document.getElementById("N" + index).style.display = "block"
    }
    useEffect(() => {

        getuser();

    }, [])

    return (
        <div className=" bg-blue-100 min-h-screen p-0 m-0" >
            <div className=" bg-blue-100 m-0 p-0  ">
                <nav className="m-5 rounded-lg fixed bg-white border-b border-gray-200 px-4 py-2.5 left-0 right-0 top-0 ">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex justify-start items-center">
                            {/* menu button */}
                            <button className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer  hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100 ">
                                {/* open */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                {/* close */}
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Toggle sidebar</span>
                            </button>
                            {/* Logo */}
                            <a href className="flex items-center justify-between mr-4">
                                <img src={logo} className="mr-3 h-10" alt=" Logo" />
                            </a>
                        </div>
                    </div>
                </nav>
                {/* Sidebar */}
                <aside className="fixed top-0 left-0 z-40 w-64 rounded-lg mt-24 ml-5 mb-5 pt-4 pb-4 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 " id="drawer-navigation">
                    <div className="overflow-y-auto py-2 px-3 bg-white flex flex-col justify-between " style={{ height: "81vh" }} >
                        <div> <div className="flex items-center lg:order-2 mb-8  border-2 rounded bg-gray-200" title={userdetails.isAuthorized ? "Verified Account" : "Unverified Account"}>
                            <span className="flex mx-3 text-sm  rounded-full md:mr-0  " >
                                {userdetails.isAuthorized ? (

                                    <img className="w-8 h-8" src="https://img.icons8.com/cotton/64/check-male--v1.png" alt="check-male--v1" />
                                )
                                    : <img className="w-8 h-8" src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" alt="person-male--v2" />
                                }
                            </span>
                            <p className="pl-1 text-base font-medium text-gray-900" >{userdetails.name}
                            </p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" class="h-8 w-8 fill-green-600">
                                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M45.121,28.121l-13,13 C31.535,41.707,30.768,42,30,42s-1.535-0.293-2.121-0.879l-8-8c-1.172-1.171-1.172-3.071,0-4.242c1.172-1.172,3.07-1.172,4.242,0 L30,34.758l10.879-10.879c1.172-1.172,3.07-1.172,4.242,0C46.293,25.05,46.293,26.95,45.121,28.121z"></path>
                                </svg> */}
                        </div>
                            <hr className="h-px my-8 bg-gray-600 border-0 " />
                            <hr className="invisible    bg-gray-600 border-0 " />
                            <hr className="invisible h-px  bg-gray-600 border-0 " />
                            <ul className="space-y-2">
                                <li className='bg-gray-200 rounded-lg'>
                                    <a href="" className="flex items-center p-2 text-base font-medium text-gray-400 rounded-lg ">
                                        <svg className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                        <span className="ml-3">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../af" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Get funded</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../pf" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Invest In Startups</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../al" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Find a Loan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../pl" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition duration-75 group">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                            </path>
                                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                            </path>
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Provide a loan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../auth" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 ">

                                        <MdVerified className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" size={15} />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Get Verified</span>  </a>
                                </li>
                            </ul>
                        </div>
                        <div className=" ">
                            <hr className="h-px my-8 bg-gray-600 border-0 " />
                            <div className="flex flex-col items-center">
                                <button onClick={() => { logouthandler() }} className=" text-3xl font-bold font-sans text-red-600   px-2 ">
                                    <img className="w-8 h-8 inline" src="https://img.icons8.com/fluency-systems-filled/48/exit.png" alt="exit" />
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
                {/* main */}
                <main className="p-4 md:ml-72 h-auto mt-20 pr-96 bg-blue-100">
                    <div className='bg-white rounded-lg shadow-lg py-2 px-4 md:p-4 mb-6'>
                        <h2 class="font-semibold text-2xl text-gray-600 text-center">Home</h2>
                        <p class="text-gray-500 mb-6 text-center">Find the best Loan Provider for you, Adjust your amount, interest rate and time period in filters</p>
                    </div>
                    {userdetails.isAuthorized ? "" : (


                        <div id='premium' class="w-full  p-2 bg-white border border-gray-200 rounded-lg mx-auto shadow flex flex-col ">
                            <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
                                <div class="flex items-start">
                                    <div>
                                        <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900  ">
                                            Premium subscribers with a <span class="text-green-600 ">verified </span>
                                            account will get a green checkmark once approved...
                                        </h1>
                                        <h2 class="mb-2 text-lg font-semibold text-gray-900 ">
                                            Premium benefits:</h2>

                                        <ul class="max-w-md space-y-1 text-gray-500 list-inside mb-4">
                                            <li class="flex items-center">
                                                <svg class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                Trust and Credibility
                                            </li>
                                            <li class="flex items-center">
                                                <svg class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                Enhanced Security
                                            </li>
                                            <li class="flex items-center">
                                                <svg class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                Reduced Risk
                                            </li>
                                        </ul>





                                        <a href="#" onClick={() => {
                                            document.getElementById("form").style.display = "block"
                                            document.getElementById("premium").style.display = "none"
                                        }}
                                            class="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                            Continue
                                            <svg class="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>

                                    </div>
                                    <div class="">
                                        <img src={img} alt="" class="" style={{ width: " 708px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                    }





                </main>
                {/* filter section */}
                {/* drawer component */}
                <form action="#" method="get" id="drawer-example" style={{ height: '85vh' }} className="fixed top-0 right-0 z-40 mt-24 w-full mr-4  max-w-xs p-4    ">

                    {user ? user.notifications.toReversed().map((notification, index) => {
                        {/* const [isopen,setisopen]=useState(false); */ }
                        console.log(index)
                        return (
                            <div className='relative shadow-xl shadow shadow-red shadow-lg border-2 border-red-400 mb-3  px-2 py-3'>
                                <button className='absolute w-6 h-6 rounded-full top-0 right-0 bg-red-500 text-white  top-0 right-0'>X</button>
                                {notification[1] == "Active" ? <>{notification[0]} <a className='cursor-pointer' onClick={() => { notificationshow(index) }}> Tap to see it</a>
                                    <div id={"N" + index} className='hidden'>

                                        <Notification notification={notification} />
                                    </div>
                                </>
                                    : ""}
                            </div>
                        )
                    }) : ""}
                </form>
                {/* <form action="#" method="get" id="drawer-example" style={{ height: '85vh' }} className="fixed top-0 right-0 z-40 mt-24 w-full mr-4  max-w-xs p-4   border-2 border border-gray-300 rounded-lg bg-white shadow-xl shadow shadow-red shadow-lg  ">
                    <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 uppercase ">
                        Apply filters
                    </h5>

                    <div className="flex flex-col justify-between flex-1">
                        <div className="space-y-6">
                            {/* Prices 
                            <div className="space-y-2">
                                <h6 className="text-base font-medium text-black ">
                                    Amount
                                </h6>
                                <div className="flex items-center justify-between col-span-2 space-x-3">
                                    <div className="w-full">
                                        <label htmlFor="min-experience-input" className="block mb-2 text-sm font-medium text-gray-900 ">
                                            From
                                        </label>
                                        <input type="number" id="price-from" value={amountval[0] * 100000} min={1} max={10000} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " required />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="price-to" className="block mb-2 text-sm font-medium text-gray-900 ">
                                            To
                                        </label>
                                        <input type="number" id="max-experience-input" value={amountval[1] * 100000} min={1} max={10000} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder required />
                                    </div>
                                </div>
                                <Slider value={amountval} onChange={updateamountRange} marks={amount} />
                                <h6 className="text-base font-medium text-black ">
                                    Interest Rate(Yearly)
                                </h6>
                                <div className="flex items-center justify-between col-span-2 space-x-3">
                                    <div className="w-full">
                                        <label htmlFor="min-experience-input" className="block mb-2 text-sm font-medium text-gray-900 ">
                                            From
                                        </label>
                                        <input type="number" id="price-from" value={interestval[0]} min={1} max={10000} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " required />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="price-to" className="block mb-2 text-sm font-medium text-gray-900 ">
                                            To
                                        </label>
                                        <input type="number" id="max-experience-input" value={interestval[1]} min={1} max={10000} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder required />
                                    </div>
                                </div>
                                <Slider value={interestval} onChange={updateinterestRange} marks={interest} />
                                <h6 className="text-base font-medium text-black ">
                                    Time (in Years)
                                </h6>
                                <div className="flex items-center justify-between col-span-2 space-x-3">
                                    <div className="w-full">
                                        <label htmlFor="min-experience-input" className="block mb-2 text-sm font-medium text-gray-900 ">
                                            From
                                        </label>
                                        <input type="number" id="price-from" value={timeval[0]} min={1} max={10000} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " required />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="price-to" className="block mb-2 text-sm font-medium text-gray-900 ">
                                            To
                                        </label>
                                        <input type="number" id="max-experience-input" value={timeval[1]} min={1} max={10000} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder required />
                                    </div>
                                </div>
                                <Slider value={timeval} onChange={updatetimeRange} marks={time} />



                            </div>
                            {/* Rating *
                            <div className="space-y-2">
                                <h6 className="text-base font-medium text-black ">
                                    Only Authorised
                                </h6>
                                <div className>
                                    <input type="radio" id name="isAuth" className="w-4 h-4  " />
                                    <label htmlFor="isAuth" className="pr-4">Yes</label>
                                    <input type="radio" id name="isAuth" className="w-4 h-4" />
                                    <label htmlFor="isAuth" className="pr-4">No</label>
                                    <input type="radio" id name="isAuth" className="w-4 h-4" />
                                    <label htmlFor="isAuth">All</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
        </div>

    )
}

export default Dashboard