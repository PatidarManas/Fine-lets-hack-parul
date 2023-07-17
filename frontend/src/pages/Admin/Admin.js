import { useScrollTrigger } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../Group 1.png"
const Admin = () => {
    const URL="https://fine-backend.onrender.com"
    // const URL="http://localhost:4000"
    const [auths, setauths] = useState()
    const [length, setlength] = useState(0)
    const [total, settotal] = useState(0)
    const [totalusers, settotalusers] = useState(0)
    // admin();
    async function admin() {
        try {
            await axios.post(`${URL}/admin/allauthreq`)
            .then((res) => {
                console.log("rind")
                setauths(res.data)
                setlength(auths.authreqs.length )
                settotal(auths.total)
                settotalusers(auths.totalusers)
                console.log(total)
            }).catch((error) => {
                toast.error(error)
            })
        } catch (error) {
            toast.error(error)

        }
    }

    admin();
    useEffect(() => {
        
        
    }, [setauths])
    console.log(totalusers)

    async function accepthandler(id, of) {
        try {
            await axios.post(`${URL}/admin/authreqaccept`, {
                of, id
            }).then((res) => {
                toast.success("success")
                admin();
            }).catch((error) => {
                toast.error(error)
            })
        } catch (error) {
            toast.error(error)
        }
    }
    async function rejecthandler(id) {
        try {
            await axios.post(`${URL}/admin/authreqreject`, {
                id
            }).then((res) => {
                toast.success("success")
                admin();
            }).catch((error) => {
                toast.error(error)
            })
        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <div>
            <div class="antialiased  bg-gray-900">
                <nav
                    class=" border-b px-4 py-2.5 bg-gray-800 border-gray-700 fixed left-0 right-0 top-0 z-50">
                    <div class="flex flex-wrap justify-between items-center">
                        <div class="flex justify-start items-center">
                            <button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation"
                                aria-controls="drawer-navigation"
                                class="p-2 mr-2  rounded-lg cursor-pointer md:hidden    focus:bg-gray-700   focus:ring-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <svg aria-hidden="true" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Toggle sidebar</span>
                            </button>
                            <a href="https://flowbite.com" class="flex items-center justify-between mr-4">
                                <img src={logo} class="mr-3 h-11" alt="Flowbite Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
                            </a>

                        </div>
                        <div class="flex items-center lg:order-2">
                            <button type="button" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation"
                                class="p-2 mr-1  rounded-lg md:hidden   text-gray-400 hover:text-white hover:bg-gray-700   focus:ring-gray-600">
                                <span class="sr-only">Toggle search</span>
                                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg" >
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                                    </path>
                                </svg>
                            </button>
                            <button type="button" data-dropdown-toggle="notification-dropdown"
                                class="p-2 mr-1  rounded-lg   text-gray-400 hover:text-white hover:bg-gray-700   focus:ring-gray-600">

                                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                                    </path>
                                </svg>
                            </button>

                            <button type="button" data-dropdown-toggle="apps-dropdown"
                                class="p-2  rounded-lg   text-gray-400 hover:text-white hover:bg-gray-700   focus:ring-gray-600">

                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                    </path>
                                </svg>
                            </button>

                            <button type="button"
                                class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0   focus:ring-gray-600"
                                id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">

                                <img class="w-8 h-8 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                                    alt="user photo" />
                            </button>


                        </div>
                    </div>
                </nav>


                <aside
                    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full border-r border-gray-200 md:translate-x-0 bg-gray-800 border-gray-700"
                    aria-label="Sidenav" id="drawer-navigation">
                    <div class="overflow-y-auto py-5 px-3 h-full bg-gray-800">
                        <form action="#" method="GET" class="md:hidden mb-2">
                            <label for="sidebar-search" class="sr-only">Search</label>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5  text-gray-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                                        </path>
                                    </svg>
                                </div>
                                <input type="text" name="search" id="sidebar-search"
                                    class=" border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Search" />
                            </div>
                        </form>
                        <ul class="space-y-2">
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 text-base font-medium  rounded-lg text-white  hover:bg-gray-700 group">
                                    <svg aria-hidden="true"
                                        class="w-6 h-6  transition duration-75 text-gray-400 group- group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span class="ml-3">Overview</span>
                                </a>
                            </li>
                            <li>
                                <button type="button"
                                    class="flex items-center p-2 w-full text-base font-medium  rounded-lg transition duration-75 group  text-white hover:bg-gray-700"
                                    aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6  transition duration-75 group- text-gray-400 group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>

                                </button>

                            </li>
                            <li>
                                <button type="button"
                                    class="flex items-center p-2 w-full text-base font-medium  rounded-lg transition duration-75 group  text-white hover:bg-gray-700"
                                    aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6  transition duration-75 group- text-gray-400 group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>

                                </button>

                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 text-base font-medium  rounded-lg text-white  hover:bg-gray-700 group">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group- group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                        </path>
                                        <path
                                            d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                                    <span
                                        class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 bg-primary-200 text-primary-800">
                                        4
                                    </span>
                                </a>
                            </li>
                            <li>
                                <button type="button"
                                    class="flex items-center p-2 w-full text-base font-medium  rounded-lg transition duration-75 group  text-white hover:bg-gray-700"
                                    aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6  transition duration-75 group- text-gray-400 group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>

                                </button>

                            </li>
                        </ul>
                        <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 border-gray-700">
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 text-base font-medium  rounded-lg transition duration-75  hover:bg-gray-700 text-white group">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group- group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                        <path fill-rule="evenodd"
                                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="ml-3">Docs</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 text-base font-medium  rounded-lg transition duration-75  hover:bg-gray-700 text-white group">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group- group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                                        </path>
                                    </svg>
                                    <span class="ml-3">Components</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 text-base font-medium  rounded-lg transition duration-75  hover:bg-gray-700 text-white group">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group- group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="ml-3">Help</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-gray-800 z-20">
                        <a href="#"
                            class="inline-flex justify-center p-2  rounded cursor-pointer text-gray-400  hover:text-white  hover:bg-gray-600">
                            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z">
                                </path>
                            </svg>
                        </a>
                        <a href="#" data-tooltip-target="tooltip-settings"
                            class="inline-flex justify-center p-2  rounded cursor-pointer text-gray-400 hover:text-white   hover:bg-gray-600">
                            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <div id="tooltip-settings" role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                            Settings page
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>


                    </div>
                </aside>

                <main class="p-4 md:ml-64  pt-20 min-h-screen">
                    {/* <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div class="border-2 border-dashed  rounded-lg border-gray-600 h-32 md:h-64"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-32 md:h-64"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-32 md:h-64"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-32 md:h-64"></div>
            </div> --> */}

                    <div class="grid gap-6 mb-2 md:grid-cols-2 xl:grid-cols-4">
                        <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-800">
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full  text-orange-100  bg-orange-500 mr-4">
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium  text-gray-400">
                                        Total Users
                                    </p>
                                    <p class="text-lg font-semibold  text-gray-200">
                                        {totalusers}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-800">
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full  text-green-100 bg-green-100 bg-green-500 mr-4">
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium  text-gray-400">
                                        Earnings
                                    </p>
                                    <p class="text-lg font-semibold  text-gray-200">
                                        ₹ {total * 500}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-800">
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full  text-blue-100 bg-blue-100 bg-blue-500 mr-4">
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path
                                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium  text-gray-400">
                                        New sales
                                    </p>
                                    <p class="text-lg font-semibold  text-gray-200">
                                        376
                                    </p>
                                </div>
                            </div> 
                        </div>*/}
                        <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-800">
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full  text-teal-100 bg-teal-100 bg-teal-500 mr-4">
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium  text-gray-400">
                                        Pending Requests
                                    </p>
                                    <p class="text-lg font-semibold  text-gray-200">{length}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class=" bg-gray-900 p-3 sm:p-5">
                        <div class="mx-auto max-w-screen-xl">
                            <div class=" bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                <div className='text-white p-2 px-4 font-medium text-xl'>Requests for Verification</div>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm text-left  text-gray-400">
                                        <thead
                                            class="text-xs  uppercase  bg-gray-700 text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-4 py-3">S.no:</th>

                                                <th scope="col" class="px-4 py-3">Name</th>
                                                <th scope="col" class="px-4 py-3">File</th>
                                                <th scope="col" class="px-4 py-3">Date</th>
                                                <th scope="col" class="px-4 py-3">Payment</th>
                                                <th scope="col" class="px-4 py-3">Accept</th>
                                                <th scope="col" class="px-4 py-3">Reject</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {auths ? auths.authreqs.map((authreq, index) => {
                                                return (




                                                    <tr class="border-b border-gray-700">
                                                        <td class="w-4 px-4 py-3">
                                                            <div class="flex items-center">
                                                                {index + 1}
                                                            </div>
                                                        </td>
                                                        <th scope="row"
                                                            class="px-4 py-3 font-medium  whitespace-nowrap text-white">
                                                            {authreq.name}</th>
                                                        <td class="px-4 py-3"><a href={authreq.file} target="_blank">Click</a></td>
                                                        <td class="px-4 py-3">{authreq.createdAt}</td>
                                                        <td class="px-4 py-3">{authreq.payment ? <>Done</> : <>Pending</>}</td>
                                                        <td class="px-4 py-3"><button className='bg-blue-400 rounded-lg p-2 text-black' onClick={() => { accepthandler(authreq._id, authreq.from) }}>Accept</button></td>
                                                        <td class="px-4 py-3 "><button className='bg-red-400 rounded-lg p-2 text-black' onClick={() => { rejecthandler(authreq._id) }}>Reject</button></td>
                                                    </tr>
                                                )
                                            }) : ""}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* <!-- <div class="border-2 border-dashed rounded-lg  border-gray-600 h-96 mb-4"></div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
            </div>
            <div class="border-2 border-dashed rounded-lg  border-gray-600 h-96 mb-4"></div>
            <div class="grid grid-cols-2 gap-4">
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
                <div class="border-2 border-dashed rounded-lg  border-gray-600 h-48 md:h-72"></div>
            </div>
             --> */}
                </main>
            </div>
             <ToastContainer/>
            </div>
    )
}

export default Admin