import { useScrollTrigger } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState , } from 'react'
import { useNavigate } from "react-router-dom";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
const Notification = ({notification,index}) => {
    console.log(notification)
    const URL="https://fine-backend.onrender.com"
    // const URL="http://localhost:4000"
    const history = useNavigate()
    const [request,setrequest]=useState();
    async function getdetails(){

            try {
                await axios.post(`${URL}/transaction/getdetails`,{
                    id:notification[2],notification
                }).then((res)=>{
                    console.log(res.data)
                    setrequest(res.data)
                }).catch((error)=>{
                    alert(error)
                })
            } catch (error) {
                alert(error)
                
            }
        }
        
    getdetails();
    useEffect(() => {
     
    }, [request])
    async function accepthandler(){
        try {
            const token = document.cookie
            console.log(notification[2])
            if(notification[2][0]=="A" && notification[2][1]=="L"){

                await axios.post(`${URL}/transaction/acceptloan`,{
                    altoken:notification[2],token
                }).then((res)=>{
                    alert("success")
                    history("../dashboard")
                }).catch((error)=>{
                    alert(error)
                })
            }
            else{
                await axios.post(`${URL}/transaction/acceptfund`,{
                    altoken:notification[2],token
                }).then((res)=>{
                    alert("success")
                    history("../dashboard")
                }).catch((error)=>{
                    alert(error)
                })

            }
        } catch (error) {
            alert(error)
        }
    }
    function closehandler(){
        history("../dashboard")
        // document.getElementById("N"+index).style.display="none"
    }
  return (
    <div id={"nN"+index} className='w-screen h-screen flex fixed top-0 left-0 z-50	justify-center backdrop-blur-md backdrop-brightness-75'>
    <div className='rounded-lg self-center p-4 bg-white flex flex-col  max-w-5xl'>
        <button id={"b4"} onClick={closehandler} className='fixed top-10 right-10 text-white  rounded-lg bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium mt-5 text-lg px-5 py-2 mr-0 mb-2  focus:outline-none ' value={notification._id} >Close</button>
        <div>Please take a action</div>
        <div class="md:col-span-5">

            <label for="why" class="block mb-1  text-gray-900 font-medium text-lg">This is what they have to say about your Conditions and why they need loan</label>
            <label for="why" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">{request ? <div>{request.transaction.detailsans}</div> :""}</label>
            {/* <textarea disabled id="why" rows="2"  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder={request}></textarea> */}
        </div>
        <div class="md:col-span-5">

            <label for="why" class="block mb-1  text-gray-900 font-medium text-lg">Answers of the questions</label>
            {request ? request.transaction.quesans.map((Element)=>{
                return (
                    <>
                    <div className=''>Q : {Element[0]}</div>
                    <div className='text-black bg-blue-50'>Ans : {Element[1]}</div>

                    </>
                )
            }) : ""}

        </div>
        <div className='self-end'>

        <button id={"b4"} className=' text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-5 text-lg px-5 py-2 mr-0 mb-2  focus:outline-none ' onClick={()=>{accepthandler()}}>Accept</button>
        <button id={"b4"} className='text-white   bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium mt-5 text-lg px-5 py-2 mr-0 mb-2  focus:outline-none '>Decline</button>
        </div>

    </div>
</div>
  )
}

export default Notification