import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios"
import img from "../../CRY_p.17_illo.svg"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import logo from "../../LogoSVG (1).svg"
import {
    Input,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Input, Ripple });
// import "./Login.scss"
const Login = () => {
    const URL="https://fine-backend.onrender.com"
    // const URL="http://localhost:4000"
    const history = useNavigate()
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [mobile, setmobile] = useState("")
    const [newemail, setnewemail] = useState("")
    const [password, setpassword] = useState("")
    const [newpass, setnewpass] = useState("")
    const [newcpass, setnewcpass] = useState("")
    
    useEffect(()=>{
        if(email!==""){
            document.getElementById("label1").classList.add("-translate-y-[1.15rem]")
            document.getElementById("label1").classList.add("scale-[0.8]")
        }
        if(password!==""){
            document.getElementById("label2").classList.add("-translate-y-[1.15rem]")
            document.getElementById("label2").classList.add("scale-[0.8]")
        }
        // document.getElementById("t1").style.display="flex"
        // document.getElementById("b1").style.display="flex"
    },[email,password])
    function gototsignin(){
        document.getElementById("signup").style.display="none"
        document.getElementById("signin").style.display="flex"
    }
    function gototsignup(){
        document.getElementById("signin").style.display="none"
        document.getElementById("signup").style.display="flex"
    }
    async function newsubmithandler(){
        if(newcpass===newpass){
            try {
                await axios.post(`${URL}/auth/register`,{
                    email:newemail,mobile:mobile,password:newcpass,name:name
                }).then((res)=>{
                    toast.success('created successfully please login now!');
                    history("../dashboard")
                }).catch((error)=>{
                    toast.error(error, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                })
            } catch (error) {
                toast.error(error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }else{
            toast.error('password does not match', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            document.getElementById("ii4").focus()
        }
    }
    async function submithandler() {
        if(email == "admin" && password=="admin@123"){
            history("../admin" , {isadmin: true})
        }else{

        
        if (String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) && password.length > "7") {

            await axios.post(`${URL}/auth/login`, {
                email: email, password: password
            }).then((res) => {

                document.cookie =`token=${res.data}`
                // console.log(res.data)
                // const {token} = res.data
                history("../dashboard")
                toast.success('Login Successful', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }).catch((error) => {
                toast.error(error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
        } else {
            toast.error('Invalid Auth Details', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    }

    async function continue3handler() {

        if (String(newemail)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            await axios.post(`${URL}/auth/isvalidemail`, {
                email: newemail
            }).then((res) => {
                console.log(res.status)
                if (res.status == "200") {
                    document.getElementById("i3").style.display='none'
                    document.getElementById("i4").style.display='flex'
                    document.getElementById("i5").style.display='flex'
                    document.getElementById("b3").style.display='none'
                    document.getElementById("b4").style.display='flex'
                    document.getElementById("r3").style.display='flex'
                }
                else if (res.status == "202") {
                    toast.error("Email already exists", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    document.getElementById("ii3").focus();
                }
            }).catch((error) => {
                toast.error(error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
        } else {
            toast.error("Enter Valid email", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            document.getElementById("i1").focus();
        }
    }
    async function continue1handler() {
        if(name!==""){
            document.getElementById("i1").style.display='none'
            document.getElementById("i2").style.display='flex'
            document.getElementById("b1").style.display='none'
            document.getElementById("b2").style.display='flex'
            document.getElementById("r1").style.display='flex'
        }else{
            toast.error("Enter Name", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            document.getElementById("ii1").focus()
        }
     }
    async function continue2handler() {
        if(name!==""){
            document.getElementById("i2").style.display='none'
            document.getElementById("i3").style.display='flex'
            document.getElementById("b2").style.display='none'
            document.getElementById("b3").style.display='flex'
            document.getElementById("r2").style.display='flex'
        }else{
            toast.error("Enter Name", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            document.getElementById("ii2").focus()
        }
     }

    return (
        <><section className="h-screen">
            <div className="container h-full px-4 py-4">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-around">

                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img src={img} class="w-full" alt="Phone image" />
                    </div>

                    <section>
                        <div id='signin' className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                                <img class="w-48 mr-2" src={logo} alt="logo" />
                                
                            </a>

                            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                        Sign in to your account
                                    </h1>
                                    <form class="space-y-4 md:space-y-6" action="#">
        
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="email"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-gray-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInput2" placeholder="Email address" onChange={(e) => setemail(e.target.value)} />
                                            <label id='label1' for="exampleFormControlInput2"
                                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Email
                                                address
                                            </label>
                                        </div>


                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="password"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-gray-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInput22" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                                            <label id='label2' for="exampleFormControlInput22"
                                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Password
                                            </label>
                                        </div>





                                        <button type="submit" onClick={submithandler}
                                            class="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
                                        <p class="text-sm font-light text-gray-500 ">
                                            
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div class="pt-0 ml-48 space-x-0 ">
                                <button type="button" onClick={gototsignin}
                                    class=" bg-gray-300 rounded-bl-lg cursor-not-allowed font-medium  text-sm px-5 py-2.5 text-center"
                                    disabled>Sign In</button>
                                <button type="button" onClick={gototsignup}
                                    class="text-white  rounded-br-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-0 mb-2  focus:outline-none " >Sign
                                    Up</button>

                            </div>
                        </div>





                        <div id='signup' class="hidden flex flex-col items-center justify-center  py-8 mx-auto md:h-screen lg:py-0  ">

                            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                                <img class="w-48 mr-2" src={logo} alt="logo" />
                                
                            </a>


                            <div class="w-96 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                        Sign-Up for New account
                                    </h1>
                                    <form class="flex flex-col space-y-4 md:space-y-6" action="#">

                                        <div id='i1'>
                                            <label for="first_name"
                                                class="w-1/6 mb-2 text-sm font-medium text-gray-900 ">Name : </label>
                                            <input type="text" id="ii1" onChange={(e) => setname(e.target.value)}
                                                class="w-5/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 "
                                                placeholder="John" required />
                                        </div>
                                        <button id='b1' type="button" onClick={continue1handler}
                                            class="w-24  self-end rounded-lg text-blue-900 border-2 border-blue-900  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Continue</button>


                                        <div id='r1' className='hidden flex justify-between'>
                                            <div class="flex items-center space-x-3">

                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-semibold text-gray-900 truncate ">
                                                        Name : <span class="text-sm text-gray-500 truncate ">{name}</span>
                                                    </p>

                                                </div>
                                                <span
                                                    class=" inline-flex items-center self-end bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                                                    <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                                                    Done
                                                </span>
                                            </div>

                                            <div class="hidden flex items-center space-x-3">

                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-semibold text-gray-900 truncate ">
                                                        Name : <span class="text-sm text-gray-500 truncate ">manas</span>
                                                    </p>
                                                </div>
                                                <span
                                                    class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                                                    <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                                                    Incorrect
                                                </span>
                                            </div>

                                        </div>



                                        <div id='i2' className='hidden flex items-center' >
                                            <label for="phone" class="w-1/3 mb-2 text-sm font-medium text-gray-900 ">Phone
                                                Number : </label>
                                            <input type="tel" id="ii2" onChange={(e)=>{setmobile(e.target.value)}}
                                                class="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 "
                                                placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required />
                                        </div>
                                        <button id='b2' type="button" onClick={continue2handler}
                                            class="w-24 hidden self-end rounded-lg text-blue-900 border-2 border-blue-900  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Continue</button>

                                        <div id='r2' className='hidden'>
                                            <div class="flex items-center space-x-3">

                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-semibold text-gray-900 truncate ">
                                                        Phone Number : <span class="text-sm text-gray-500 truncate ">{mobile}</span>
                                                    </p>

                                                </div>
                                                <span
                                                    class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                                                    <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                                                    Done
                                                </span>
                                            </div>

                                            <div class="hidden flex items-center space-x-3">

                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-semibold text-gray-900 truncate ">
                                                        Phone Number : <span class="text-sm text-gray-500 truncate ">1315346</span>
                                                    </p>
                                                </div>
                                                <span
                                                    class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                                                    <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                                                    Incorrect
                                                </span>
                                            </div>

                                        </div>






                                        <div id='i3' class="mb-6 hidden flex items-center">
                                            <label for="email" class=" mb-2 text-sm font-medium text-gray-900 ">Email
                                                address : </label>
                                            <input type="email" id="ii3" onChange={(e)=>{setnewemail(e.target.value)}}
                                                class="w-56 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                                                placeholder="john.doe@company.com" required />
                                        </div>
                                        <button id='b3' type="button" onClick={continue3handler}
                                            class="w-24 hidden self-end rounded-lg text-blue-900 border-2 border-blue-900  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Continue</button>

                                        <div id='r3' className='hidden'>
                                            <div class="flex items-center space-x-3">
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-semibold text-gray-900 truncate ">
                                                        Email : <span class="text-sm text-gray-500 truncate ">{newemail}</span>
                                                    </p>
                                                </div>
                                                <span
                                                    class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                                                    <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                                                    Available
                                                </span>
                                            </div>
                                            <div class="hidden flex items-center space-x-3">

                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-semibold text-gray-900 truncate ">
                                                        Email : <span class="text-sm text-gray-500 truncate "></span>
                                                    </p>
                                                </div>
                                                <span
                                                    class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                                                    <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                                                    Unavailable
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mb-6 hidden flex items-center" id='i4'>
                                            <label for="password" class=" mb-2 text-sm font-medium text-gray-900 ">Password
                                                : </label>
                                            <input type="password" id="ii4" onChange={(e)=>{setnewpass(e.target.value)}}
                                                class="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                                                placeholder="•••••••••" required />
                                        </div>
                                        <div class="mb-6 hidden flex items-center" id='i5'>
                                            <label for="confirm_password"
                                                class=" mb-2 text-sm font-medium text-gray-900 ">Confirm password : </label>
                                            <input type="password" id="confirm_password" onChange={(e)=>{setnewcpass(e.target.value)}}
                                                class="w-38 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                                                placeholder="•••••••••" required />
                                        </div> 
                                        <button type="submit" id='b4'    onClick={newsubmithandler}
                                            class="hidden bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-36 py-2.5 text-center">Submit</button>
                                        
                                        </form>
                                </div>
                            </div>
                            <div class="pt-0 ml-48 space-x-0 ">
                                <button type="button" onClick={gototsignin}
                                    class="text-white rounded-bl-lg  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-0 mb-2  focus:outline-none " >Sign
                                    In</button>
                                <button type="button" onClick={gototsignup}
                                    class=" bg-gray-300 rounded-br-lg cursor-not-allowed font-medium  text-sm px-5 py-2.5 text-center"
                                    disabled>Sign Up</button>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <ToastContainer/>
        </>
    )
}

export default Login

