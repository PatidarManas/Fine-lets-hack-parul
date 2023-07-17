import { useScrollTrigger } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ApplyLoan = ({ transaction }) => {
    const URL="https://fine-backend.onrender.com"
    // const URL="http://localhost:4000"
    console.log(transaction)
    const [user, setuser] = useState();
    const [why, setwhy] = useState("")
    function closehandler(data) {
        // console.log("apply" + data)
        document.getElementById("apply" + data).style.display = "none"
    }
    function openbox(value) {
        // console.log("c" + value)
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
    async function applyhandler() {
        const token = document.cookie
        var answers=[];
        transaction.questions.map((question,index)=>{
            const a = document.getElementById("ans" + index).value;
            answers.push([question,a])
        })
        console.log(answers)
        try {
            await axios.post(`${URL}/transaction/al`,{
                answers,to:transaction.token,token,detailsans:why
            }).then((res=>{
                toast.error('Success')
                document.getElementById("apply" + transaction._id).style.display = "none"
            })).catch((error)=>{
                toast.error(error)
            })
        } catch (error) {
            toast.error(error)

        }
    }
    async function getuser() {
        try {
            await axios.post(`${URL}/auth/userdetails`, {
                id: transaction.from
            }).then((res) => {
                // console.log(res.data)
                setuser(res.data)

            }).catch((error) => {
                toast.error(error)
            })
        } catch (error) {
            toast.error(error)
        }
    }
    useEffect(() => {
        getuser();

    }, [])


    return (

        <div className='flex flex-col bg-white rounded-lg min-w-full p-6 gap-1 static mt-6 '>
            <div className='flex items-center text-2xl	font-medium	 gap-1 mb-2'>
            {user ? user.isAuthorized ? 
                                <img className="w-8 h-8" src="https://img.icons8.com/cotton/64/check-male--v1.png" alt="check-male--v1" /> :
                                <img className="w-8 h-8" src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" alt="person-male--v2" />
                           :"" }
                {/* <img className="w-8 h-8" src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" alt="person-male--v2" /> */}
                {user ? user.name : ""}</div>
            <div className='text-xl text-slate-500	'>Rs {transaction.amount} at {transaction.interest_Rate}% for {transaction.time} years</div>
            <div className='text-xl text-slate-500	'>you get Rs {transaction.amount} and payback Rs {transaction.amount * (1 + transaction.interest_Rate * transaction.time)} after {transaction.time} years</div>
            <button id={"o" + transaction._id} onClick={(e) => { openbox(e.target.value) }} value={transaction._id} className='relative right-2 w-min self-end -top-10 text-3xl  font-bold	'>+</button>
            <button id={'c' + transaction._id} onClick={(e) => { closebox(e.target.value) }} value={transaction._id} className='hidden relative right-2 w-min self-end -top-10 text-3xl  font-bold	'>-</button>
            <div id={"p" + transaction._id} className='hidden p-5 bg-gray-200 rounded-lg text-xl text-justify font-normal tracking-wide leading-6	'>{transaction.details}</div>
            <button id={"b" + transaction._id} onClick={() => { document.getElementById("apply" + transaction._id).style.display = "flex" }} className='hidden self-end text-white  rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-5 text-lg px-5 py-2.5 mr-0 mb-2  focus:outline-none '>Apply</button>
            {/* <ApplyLoan/> */}




            <div id={"apply" + transaction._id} className='hidden w-screen h-screen flex fixed top-0 left-0 z-50	justify-center backdrop-blur-md backdrop-brightness-75'>
                <div className='rounded-lg self-center p-4 bg-white flex flex-col'>
                    <button id={"b4"} className='fixed top-10 right-10 text-white  rounded-lg bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium mt-5 text-lg px-5 py-2 mr-0 mb-2  focus:outline-none ' value={transaction._id} onClick={(e) => { closehandler(e.target.value) }}>Close</button>
                    <div>Please fill the information below</div>
                    <div class="md:col-span-5">

                        <label for="why" class="block mb-1  text-gray-900 font-medium text-lg">Explain why do you Need this loan and Enter To what conditions of Provider You are good to go</label>
                        {/* <label for="why" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">Explain why you need funding and your previous funding details</label> */}
                        <textarea id="why" rows="2" onChange={(e) => setwhy(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div class="md:col-span-5">

                        <label for="why" class="block mb-1  text-gray-900 font-medium text-lg">Answer the questions</label>
                        {transaction.questions.map((question,index) => {
                            return (
                                <>
                                    
                                    <label for="why" class="block mb-2 leading-3  font-medium text-stone-500 ">{question}</label>
                                    <input id={"ans"+ index } onChange={(e) => setwhy(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></input>
                                </>
                            )
                        })}

                    </div>
                    <button id={"b4"} onClick={applyhandler} className='self-end text-white  rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-5 text-lg px-5 py-2 mr-0 mb-2  focus:outline-none '>Apply</button>

                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default ApplyLoan