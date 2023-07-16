import React from 'react'
import img from "../../6048753.jpg"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Landing = () => {
    
    return (
        <div class="h-screen ">


            <div class="relative bg-gray-50 ">
                <nav
                    class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg  fixed top-2/4 -translate-y-2/4 right-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
                    <a href="/login"
                        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        <small class="text-center text-xs font-medium"> Login </small>
                    </a>

                    <a href="#steps"
                        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100  ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>

                        <small class="text-center text-xs font-medium"> Steps </small>
                    </a>

                    <a href="#why"
                        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <small class="text-center text-xs font-medium"> Why us </small>
                    </a>

                    <hr class="" />

                    <a href="/" class="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>

                        <small className="text-xs font-medium">Home</small>
                    </a>
                </nav>
            </div>

            <section class="bg-white ">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                            Solve your finance problem with Fine</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">Finding best loans at minimal interst rates and get funded just in few steps. For growing your finance always choose Fine. </p>
                        <a href="#box"
                            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 ">
                            Get started
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="/login"
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100    ">
                            Login
                        </a>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={img} alt="mockup" />
                    </div>
                </div>
            </section>


            <div className=' '>

            
            <div id='box' class="flex justify-evenly my-32 mx-32">



                <div
                    class="max-w-lg bg-white border border-gray-200 rounded-lg shadow  hover:scale-105 duration-500 ease-in-out">

                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Loan Connection</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">Either you are sort of money or have ample of it. Its always something like that, Balanced Fund is a myth, In both the cases Fine is for you. You are sort of money and need for personal stuf or anything you can find the perfect loan provider for you on Fine. Or you got some ample of money and you want to invest it at right place, Dont worry we got your back, Fine will find you people who need your money and will payback you a good interest rates</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            How to apply
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div
                    class="max-w-lg bg-white border border-gray-200 rounded-lg shadow  hover:scale-105 duration-500 ease-in-out">

                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Startup Connection</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">Your buisness needs money or you are interested to invest in the best minds and best ideas, yes we do that to, get connected to the right people, a two way relationship that benifits both the sides, You either get best partner or you got into best connections, its a win win situation</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>


            </div>
</div>

            <section id='steps' class="  bg-gray-100 font-poppins ">
                <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div class="max-w-xl mx-auto">
                        <div class="text-center ">
                            <div class="relative flex flex-col items-center">
                                <h1 class="text-4xl font-bold leading-tight mb-4 "> Steps to
                                </h1>

                            </div>


                            <div class="mb-10 border border-gray-200 rounded-lg shadow py-2">
                                <button type="button" id='bal' onClick={()=>{document.getElementById("al").style.display="block";
                                document.getElementById("pl").style.display="none";
                                document.getElementById("af").style.display="none";
                                document.getElementById("pf").style.display="none";
                                document.getElementById("bal").classList.add("bg-blue-100")
                                document.getElementById("bpl").classList.remove("bg-blue-100")
                                document.getElementById("baf").classList.remove("bg-blue-100")
                                document.getElementById("bpf").classList.remove("bg-blue-100")
                                }}
                                    class="py-1 px-3 inline-flex justify-center bg-blue-100 items-center gap-2 rounded-md border border-transparent font-semibold text-gray-600  hover:bg-blue-100 focus:bg-blue-100   transition-all text-lg ">
                                    Get loan
                                </button>
                                <button type="button" id='bpl' onClick={()=>{document.getElementById("al").style.display="none";
                                document.getElementById("pl").style.display="block";
                                document.getElementById("af").style.display="none";
                                document.getElementById("pf").style.display="none";
                                document.getElementById("bal").classList.remove("bg-blue-100")
                                document.getElementById("bpl").classList.add("bg-blue-100")
                                document.getElementById("baf").classList.remove("bg-blue-100")
                                document.getElementById("bpf").classList.remove("bg-blue-100")
                                }}
                                    class="py-1 px-3 inline-flex justify-center  items-center gap-2 rounded-md border border-transparent font-semibold text-gray-600  hover:bg-blue-100 focus:bg-blue-100 transition-all text-lg ">
                                    Provide loan
                                </button>
                                <button type="button" id='baf' onClick={()=>{document.getElementById("al").style.display="none";
                                document.getElementById("pl").style.display="none";
                                document.getElementById("af").style.display="block";
                                document.getElementById("pf").style.display="none";
                                document.getElementById("bal").classList.remove("bg-blue-100")
                                document.getElementById("bpl").classList.remove("bg-blue-100")
                                document.getElementById("baf").classList.add("bg-blue-100")
                                document.getElementById("bpf").classList.remove("bg-blue-100")
                                }}
                                    class="py-1 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-600  hover:bg-blue-100 focus:bg-blue-100 transition-all text-lg ">
                                    Get fund
                                </button>
                                <button type="button" id='bpf' onClick={()=>{document.getElementById("al").style.display="none";
                                document.getElementById("pl").style.display="none";
                                document.getElementById("af").style.display="none";
                                document.getElementById("pf").style.display="block";
                                document.getElementById("bal").classList.remove("bg-blue-100")
                                document.getElementById("bpl").classList.remove("bg-blue-100")
                                document.getElementById("baf").classList.remove("bg-blue-100")
                                document.getElementById("bpf").classList.add("bg-blue-100")
                                }}
                                    class="py-1 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-600  hover:bg-blue-100 focus:bg-blue-100 transition-all text-lg ">
                                    Provide fund
                                </button>

                            </div>


                        </div>
                    </div>


                </div>

                <div id='al' class="w-full  mx-auto lg:max-w-3xl">
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">1
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Signup
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">2
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Apply
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">3
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Approval
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">4
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Connect
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                <div id="pl" class="w-full hidden mx-auto lg:max-w-3xl">
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">1
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Signup
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">2
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Form creation
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">3
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Time for connection
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">4
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Decision making
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div id='af' class="w-full hidden mx-auto lg:max-w-3xl">
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">1
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Signup
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">2
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Apply details
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">3
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Waiting for connection
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">4
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Get funded
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div id="pf"class="w-full hidden mx-auto lg:max-w-3xl">
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">1
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-40">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Signup
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">2
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-40">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Search for fund seekers
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">3
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-40">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Give funds
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative hidden flex justify-center">
                        <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full ">
                                    <div class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full ">4
                                    </div>
                                </div>
                            </div>
                            <div class="w-px h-full bg-blue-300 "></div>
                        </div>
                        <div class="w-36">
                            <h2
                                class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl ">
                                Connect
                            </h2>
                            <div class="relative flex-1 mb-10 ">
                                <div class="relative z-20 p-6">

                                </div>
                            </div>
                        </div>
                    </div>



                </div>




            </section>




            <div id="why" class="relative flex overflow-x-hidden px-3 bg-white ">
                <div class="py-12 flex  animate-marquee  space-x-3">
                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        150+ fund providers
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/huge-hand-giving-money-tiny-start-up-entrepreneurs-government-providing-financial-help-business-partners-making-grants-subsidies-flat-vector-illustration-assistance-protection-concept_74855-23091.jpg?w=826&t=st=1689320207~exp=1689320807~hmac=467ac210e06c21fb3a72b26bd3dc3e66310f60ff626639b02a7171d07fabe093"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    At our website, we are proud to offer funding opportunities from a diverse network of over 150 providers. With such a wide range of funding sources, we strive to connect individuals and organizations with the resources they need to turn their ideas into reality.
                                </p>
                            </div>


                        </div>
                    </div>

                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        1000+ fund seekers
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/woman-investing-getting-profit_74855-11229.jpg?w=1060&t=st=1689324526~exp=1689325126~hmac=ecfa54e4c30501a1d335e398d0d22abdae031c2132b506b208e8628c48a21a51"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    At our website, we strive to cater to the needs of a wide range of individuals and organizations by connecting them. We understand that securing funding is a critical aspect of turning ideas into reality, and we are dedicated to providing a platform that facilitates this process.                        </p>
                            </div>


                        </div>
                    </div>

                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        15 lakh Rs Sanctioned
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1380&t=st=1689320610~exp=1689321210~hmac=6b3dc3cf52028539c432e4c63250e9cf9a98fa15da5db128796bc8aad6821b9e"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    The sanctioned amount of 15 lakh Rs reflects our dedication to securing substantial funding for our community of fund seekers. We believe in the power of financial support to drive innovation, research, entrepreneurship, and social impact initiatives.          </p>          </div>


                        </div>
                    </div>

                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        Success Rate
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/startup-managers-presenting-analyzing-sales-growth-chart-group-workers-with-heap-cash-rocket-bar-diagrams-with-arrow-heap-money_74855-14166.jpg?w=1060&t=st=1689324461~exp=1689325061~hmac=b30fc075315eb86076ebe1be1987c472883336068bbf257498b0a307806b26bb"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    We are proud to share that our platform boasts an impressive success rate for funded projects and individuals. Through our meticulous selection process and we have consistently supported ventures that have achieved remarkable outcomes.   </p>                 </div>


                        </div>
                    </div>

                </div>

                <div class="absolute top-0 py-12   animate-marquee2  flex space-x-3">

                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        150+ fund providers
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/huge-hand-giving-money-tiny-start-up-entrepreneurs-government-providing-financial-help-business-partners-making-grants-subsidies-flat-vector-illustration-assistance-protection-concept_74855-23091.jpg?w=826&t=st=1689320207~exp=1689320807~hmac=467ac210e06c21fb3a72b26bd3dc3e66310f60ff626639b02a7171d07fabe093"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    At our website, we are proud to offer funding opportunities from a diverse network of over 150 providers. With such a wide range of funding sources, we strive to connect individuals and organizations with the resources they need to turn their ideas into reality.
                                </p>
                            </div>


                        </div>
                    </div>

                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        1000+ fund seekers
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/woman-investing-getting-profit_74855-11229.jpg?w=1060&t=st=1689324526~exp=1689325126~hmac=ecfa54e4c30501a1d335e398d0d22abdae031c2132b506b208e8628c48a21a51"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    At our website, we strive to cater to the needs of a wide range of individuals and organizations by connecting them. We understand that securing funding is a critical aspect of turning ideas into reality, and we are dedicated to providing a platform that facilitates this process.                        </p>
                            </div>


                        </div>
                    </div>

                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        15 lakh Rs Sanctioned
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1380&t=st=1689320610~exp=1689321210~hmac=6b3dc3cf52028539c432e4c63250e9cf9a98fa15da5db128796bc8aad6821b9e"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    The sanctioned amount of 15 lakh Rs reflects our dedication to securing substantial funding for our community of fund seekers. We believe in the power of financial support to drive innovation, research, entrepreneurship, and social impact initiatives.</p>                    </div>


                        </div>
                    </div>

                    <div >

                        <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span
                                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                            <div class="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                        Success Rate
                                    </h3>

                                    <p class="mt-1 text-xs font-medium text-gray-600">Trusted and Verified</p>
                                </div>

                                <div class="hidden sm:block sm:shrink-0">
                                    <img alt="Paul Clapton"
                                        src="https://img.freepik.com/free-vector/startup-managers-presenting-analyzing-sales-growth-chart-group-workers-with-heap-cash-rocket-bar-diagrams-with-arrow-heap-money_74855-14166.jpg?w=1060&t=st=1689324461~exp=1689325061~hmac=b30fc075315eb86076ebe1be1987c472883336068bbf257498b0a307806b26bb"
                                        class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <p class="max-w-[40ch] text-sm text-gray-500">
                                    We are proud to share that our platform boasts an impressive success rate for funded projects and individuals. Through our meticulous selection process and we have consistently supported ventures that have achieved remarkable outcomes.       </p>             </div>


                        </div>
                    </div>
                </div>
            </div>








            <footer class="">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">


                    <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center ">© Team <a href=""
                        class="hover:underline">MMBHK™</a>. Lets Parul Hack.</span>
                </div>
            </footer>




        </div>
    )
}

export default Landing