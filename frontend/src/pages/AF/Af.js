import React, { useEffect, useState } from 'react'
import "./Af.scss"
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { MdDelete } from "react-icons/md"
import axios from 'axios';
import {AiFillQuestionCircle} from "react-icons/ai"
import {MdVerified} from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import logo from "../../LogoSVG (1).svg"
const Af = ({user}) => {
    const [question, setquestion] = useState("");
    const [questions, setquestions] = useState([]);
    const [fund, setfund] = useState("")
    const [category, setcategory] = useState("")
    const [details, setdetails] = useState("")
    const [file, setfile] = useState("")
    const [location, setlocation] = useState("")
    const [name, setname] = useState("")
    const [percentage, setpercentage] = useState("")
    const [profit, setprofit] = useState("")
    const [why, setwhy] = useState("")
    const uploader = Uploader({ apiKey: "public_12a1yRKF31EEVAGBwEr4qUJbuSbH" });
    const history = useNavigate()

    async function submithandler() {
        const URL="https://fine-backend.onrender.com"
        // const URL="http://localhost:4000"
        if (fund == "") {
            alert("fill out Fund Needed")

            document.getElementById("fund").focus();
            document.getElementById("fund").classList.add("outline-red-500")
        }
        else if (category == "") {
            alert("fill out Category")
            document.getElementById("category").focus();
            document.getElementById("category").classList.add("outline-red-500")
        }
        else if (name == "") {
            alert("fill out Company Name")
            document.getElementById("name").focus();
            document.getElementById("name").classList.add("outline-red-500")
        }
        else if (percentage == "") {
            alert("fill out Offered Percentage")
            document.getElementById("percentage").focus();
            document.getElementById("percentage").classList.add("outline-red-500")
        }
        else if (details.length < "100") {
            alert("Fill atleast 100 letters")
            document.getElementById("details").focus();
            document.getElementById("details").classList.add("outline-red-500")
        }
        else if (profit.length < "100") {
            alert("Fill atleast 100 letters")
            document.getElementById("profit").focus();
            document.getElementById("profit").classList.add("outline-red-500")
        }
        else if (why.length < "100") {
            alert("Fill atleast 100 letters")
            document.getElementById("why").focus();
            document.getElementById("why").classList.add("outline-red-500")
        }
        else {
            const token = document.cookie;
            try {
                await axios.post(`${URL}/transaction/af`, {
                   token, file, fund, percentage, why, details, questions, profit, category, name, location
                }).then((res) => {
                    document.getElementById("success").style.display = "block"
                    document.getElementById("form").style.display = "none"
                }).catch((error) => {
                    alert(error)
                })
            } catch (error) {
                alert(error);
            }
        }
    }
    function addhandler() {
        setquestions([...questions, question]);
        setquestion("")
        document.getElementById('question').value = ''
        console.log(questions)
    }
    function clearhandler() {
        setquestion("");
        document.getElementById('question').value = ''
    }
    function allclearhandler() {
        setquestions([]);
        document.getElementById("sqc1").checked=false
        document.getElementById("sqc2").checked=false
        document.getElementById("sqc3").checked=false
        document.getElementById("sq1").style.display="block";
        document.getElementById("sq2").style.display="block";
        document.getElementById("sq3").style.display="block";
    }
    async function logouthandler(){
        document.cookie =  "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        history("../")
    }
    return (
        <div className=" bg-blue-100 min-h-screen p-0 m-0" >
            <div className=" bg-blue-100 m-0 p-0  ">
                <nav className="m-5 rounded-lg fixed bg-white border-b border-gray-200 px-4 py-2.5 left-0 right-0 top-0 z-50">
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
                        <div> <div className="flex items-center lg:order-2 mb-8  border-2 rounded bg-gray-200" title={user.isAuthorized ? "Verified Account" : "Unverified Account"}>
                        <span>{user.isAuthorized ? (
                            
                                <img className="w-8 h-8" src="https://img.icons8.com/cotton/64/check-male--v1.png" alt="check-male--v1" /> 
                        )
                               : <img className="w-8 h-8" src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" alt="person-male--v2" />
                            }
                            </span>
                            <p className="pl-1 text-base font-medium text-gray-900">{user.name}
                            </p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" class="h-8 w-8 fill-green-600">
                        <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M45.121,28.121l-13,13 C31.535,41.707,30.768,42,30,42s-1.535-0.293-2.121-0.879l-8-8c-1.172-1.171-1.172-3.071,0-4.242c1.172-1.172,3.07-1.172,4.242,0 L30,34.758l10.879-10.879c1.172-1.172,3.07-1.172,4.242,0C46.293,25.05,46.293,26.95,45.121,28.121z"></path>
                        </svg> */}
                        </div>
                            <hr className="h-px my-8 bg-gray-600 border-0 " />
                            <hr className="invisible    bg-gray-600 border-0 " />
                            <hr className="invisible h-px  bg-gray-600 border-0 " />
                            <ul className="space-y-2">
                                <li>
                                    <a href="../dashboard" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg  hover:bg-gray-100 transition duration-75 group">
                                        <svg className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                        <span className="ml-3">Home</span>
                                    </a>
                                </li>
                                <li className='bg-gray-200 rounded-lg'>
                                    <a href="" className="flex items-center p-2 w-full text-base font-medium text-gray-400 rounded-lg">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Get funded</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../pf" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Invest in Startups</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../al" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Find a loan</span>
                                    </a>
                                </li>
                                <li >
                                    <a href="../pl" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg  transition duration-75 group hover:bg-gray-100  ">
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
                                        {/* <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                        </svg> */}
                                        <MdVerified className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor"  size={15} />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Get Verified</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className=" ">
                            <hr className="h-px my-8 bg-gray-600 border-0 " />
                            <div className="flex flex-col items-center">
                                <button onClick={logouthandler} className=" text-3xl font-bold font-sans text-red-600   px-2 ">
                                    <img className="w-8 h-8 inline" src="https://img.icons8.com/fluency-systems-filled/48/exit.png" alt="exit" />
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
                {/* main */}
                <main className="p-4 md:ml-72 h-auto mt-20 pr-96 bg-blue-100">
                    <div>

                        <div class="container  max-w-screen-lg mx-auto">
                            <div>
                                <div className='bg-white rounded-lg shadow-lg py-2 px-4 md:p-4 mb-6'>
                                    <h2 class="font-semibold text-2xl text-gray-600 text-center">Get Funded</h2>
                                    <p class="text-gray-500 mb-6 text-center">Fill out the below form to get connected to the right Investors and dont let finance a break in your journey</p>
                                </div>
                                <div id='success' className='hidden bg-white rounded-lg shadow-lg py-2 px-4 md:p-4 mb-6'>
                                    <h2 class="font-semibold text-3xl text-green-600 text-center">Success !! </h2>
                                    <p class="text-gray-500 text-center">Now wait till someone shows interest on your Request</p>
                                    <p class="text-gray-500 mb-6 text-center">We will notify through mail and can also check on Home page of your account</p>
                                </div>
                                <div id='form' class="bg-white rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6 ">
                                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                        <div class="text-gray-600">
                                            <p class="font-medium text-lg">Personal Details</p>
                                            <p>Please fill out all the fields.</p>
                                            <p className='text-green-400 text-semibold	'>All your personal information are safe with us and wont be shared with anyone untill you accept there request</p>
                                        </div>

                                        <div class="lg:col-span-2">
                                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                <div class="md:col-span-3">
                                                    <label for="category" className='font-medium text-lg'>Startup / Buisness Category</label>
                                                    <select id="category" onChange={(e)=>setcategory(e.target.value)} class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        {/* <option selected>Choose a country</option> */}
                                                        <option value="ed" selected>Ed-tech</option>
                                                        <option value="Finance">Finance</option>
                                                        <option value="local">Local Buissness</option>
                                                        <option value="food">Food</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <label for="name" className='font-medium text-lg'>Company Name</label>
                                                    <input type="text" onChange={(e) => setname(e.target.value)} name="name" id="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                                </div>

                                                <div class="md:col-span-5">

                                                    <label for="message" class="block mb-1  text-gray-900 font-medium text-lg">Discription </label>
                                                    <label for="message" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">Explain what you do in detail</label>
                                                    <textarea id="details" rows="4" onChange={(e) => setdetails(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <label for="fund" className='font-medium text-lg'>Fund amount required</label>
                                                    <input type="number" onChange={(e) => setfund(e.target.value)} name="fund" id="fund" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                                </div>
                                                <div class="md:col-span-3">
                                                    <label for="percentage" className='font-medium text-lg w-full'>Percentage offered in exchange</label>
                                                    <input type="number" onChange={(e) => setpercentage(e.target.value)} name="percentage" id="percentage" class="h-10 border mt-1 rounded px-4 w-2/5 bg-gray-50" placeholder="" />
                                                </div>
                                                <div class="md:col-span-3 flex flex-col">
                                                    <label for="location" className='font-medium text-lg w-full'>Location of Buisness</label>
                                                    <input type="text" onChange={(e) => setlocation(e.target.value)} name="location" id="location" class="h-10 w-full border mt-1 rounded px-4 w-2/5 bg-gray-50" placeholder="" />
                                                </div>
                                                <div class="md:col-span-5">

                                                    <label for="why" class="block mb-1  text-gray-900 font-medium text-lg">Why ? and History </label>
                                                    <label for="why" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">Explain why you need funding and your previous funding details</label>
                                                    <textarea id="why" rows="2" onChange={(e) => setwhy(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                                                </div>
                                                <div class="md:col-span-5">

                                                    <label for="profit" class="block mb-1  text-gray-900 font-medium text-lg">Profits and Losses and Revenue Model</label>
                                                    <label for="profit" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">Give a brief of details of Finances of past years/months and how u earn</label>
                                                    <textarea id="profit" rows="2" onChange={(e) => setprofit(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                                                </div>
                                                <div class="flex flex-col justify-center md:col-span-5">
                                                    <label for="file" class="block mb-1  text-gray-900 font-medium text-lg">Video (optional)</label>
                                                    <label for="file" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">Upload a video having all the information of the company </label>
                                                    <div class="flex felx-col bg-gray-400 rounded-lg px-4 py-2">
                                                <UploadButton  uploader={uploader}
                                                    options={{ multi: true }}
                                                    onComplete={ files => setfile(files[0] ? files[0].fileUrl : "") }>
                                                    {({ onClick }) =>
                                                        <button onClick={onClick}>
                                                            Upload a file...
                                                        </button>
                                                    }
                                                </UploadButton>
                                            </div>
                                                    {/* <input class="block w-full text-sm text-gray-900 cursor-pointer focus:outline-none " id="file" type="file" onChange={(e) => setfile(e.target.value)} /> */}
                                                </div>
                                                <div className='md:col-span-5 bg-gray-100  p-3 rounded-md '>
                                                    <div className='flex justify-between align-center'>
                                                        <div>

                                                            <label for="message" class=" flex justify-between block mb-0 mt-3  text-gray-900 w-4/5 text-gray-900 font-medium text-lg ">Add Questions
                                                            </label>
                                                            <label for="message" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">Add Questions you want to ask out to People interested as investors</label>
                                                        </div>
                                                        {questions.length > "0" ? <button className='self-center bg-red-500 h-10 hover:bg-red-700 text-white text-lg font-normal py-1 px-1 rounded-lg' onClick={allclearhandler}>Clear All</button>
                                                            : ""}
                                                    </div>
                                                    <div className='flex mb-3 flex-col'>

                                                        {questions.map((value) => {
                                                            return <div className=' flex text-lg align-center  px-2 py-0  w-full gap-2'><AiFillQuestionCircle className='self-center'/> {value} </div>
                                                        })}
                                                    </div>
                                                    <div className='flex flex-col gap-2 '>
                                                    <div className='text-lg font-medium'>Suggested questions</div>
                                                            <div className='flex gap-2' id='sq1'><input type='checkbox' id='sqc1' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>{
                                                                document.getElementById("sq1").style.display="none";
                                                                setquestions([...questions, "Did you have prior experience as a Equity holder in any startup"]);
                                                            }} ></input>Did you have prior experience as a Equity holder in any startup</div>
                                                            <div className='flex gap-2' id='sq2'><input id='sqc2' type='checkbox' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>{
                                                                document.getElementById("sq2").style.display="none";
                                                                setquestions([...questions, "Will you be able to give time on weekends"]);
                                                            }} ></input>Will you be able to give time on weekends</div>
                                                            <div className='flex gap-2 ' id='sq3'><input id='sqc3' type='checkbox' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>{
                                                                document.getElementById("sq3").style.display="none";
                                                                setquestions([...questions, "What percentage of Growth you expect in an year"]);
                                                            }} ></input>What percentage of Growth you expect in an year</div>
                                                    </div>
                                                    <div className='flex '>
                                                        <input type="text" onChange={(e) => { setquestion(e.target.value) }} name="questions" id="question" placeholder="i.e. What is Monthly savings" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                        <button className='bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-2 px-4 rounded-l-lg ml-2' onClick={addhandler}>Add</button>
                                                        <button className='bg-yellow-600 hover:bg-yellow-700 text-white text-xl font-semibold py-2 px-4 rounded-r-lg' onClick={clearhandler}>Clear</button>

                                                    </div>


                                                </div>

                                                <div class="md:col-span-5 text-right">
                                                    <div class="inline-flex items-end">

                                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={submithandler}>Submit</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </main>
     
            </div>
        </div>

    )
}

export default Af