import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6"
import axios from "axios"
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
const Fund = ({ funder, index }) => {
    const URL="https://fine-backend.onrender.com"
    // const URL="http://localhost:4000"
    // console.log(funder)
    const [why,setwhy]= useState()
        function openbox(value) {
        console.log("c" + value)
        document.getElementById("b" + value).style.display = "flex"
        document.getElementById("pa" + value).style.display = "flex"
        document.getElementById("pb" + value).style.display = "flex"
        document.getElementById("pc" + value).style.display = "flex"
        document.getElementById("pd" + value).style.display = "flex"
        document.getElementById("pe" + value).style.display = "flex"
        document.getElementById("pf" + value).style.display = "flex"
        document.getElementById("o" + value).style.display = "none"
        document.getElementById("c" + value).style.display = "flex"
    }
    function closebox(value) {
        document.getElementById("b" + value).style.display = "none"
        document.getElementById("pa" + value).style.display = "none"
        document.getElementById("pb" + value).style.display = "none"
        document.getElementById("pc" + value).style.display = "none"
        document.getElementById("pd" + value).style.display = "none"
        document.getElementById("pe" + value).style.display = "none"
        document.getElementById("pf" + value).style.display = "none"
        document.getElementById("o" + value).style.display = "flex"
        document.getElementById("c" + value).style.display = "none"
    }
    const [request, setrequest] = useState();
    async function getdetails() {
        try {
            await axios.post(`${URL}/auth/userdetails`, {
                id: funder.from
            }).then((res) => {
                setrequest(res.data)
            }).catch((error) => {
                alert(error)
            })
        } catch (error) {
            alert(error)

        }
    }
    function closehandler(data) {
        // console.log("apply" + data)
        document.getElementById("apply" + data).style.display = "none"
    }

    async function applyhandler(){
        try {
            const token = document.cookie
        var answers=[];
        funder.questions.map((question,index)=>{
            const a = document.getElementById("ans" + index).value;
            answers.push([question,a])
        })
        // console.log(answers)
        
        await axios.post(`${URL}/transaction/pf`,{
            token,to:funder.token,answers
        }).then((res)=>{
            alert("success")
            document.getElementById("apply" + index).style.display = "none"
        }).catch((error)=>{

        })
        } catch (error) {
            alert(error)
        }
    }
 




    const c="l";

    useEffect(() => {
      
        getdetails();
    }, [])
    console.log(request)

    return (



        <div className='flex flex-col bg-white rounded-lg min-w-full p-6 gap-1 static mt-6 '>
            <div className='flex items-center text-2xl	font-medium	 gap-1 mb-2'>
            {request ? request.isAuthorized ? 
                                <img className="w-8 h-8" src="https://img.icons8.com/cotton/64/check-male--v1.png" alt="check-male--v1" /> :
                                <img className="w-8 h-8" src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" alt="person-male--v2" />
                           :"" }{request ? request.name : ""}</div>
            <div className='text-xl text-slate-500	'>{funder.name}</div>
            <div className='text-xl text-slate-500 flex  align-center	'>{funder.category} <FaLocationDot className='ml-8' />{funder.location}</div>
            <div className='text-xl text-slate-500	'>Ask for Rs {funder.fund} in exchange of {funder.percentage}% of Company</div>
            <button id={"o" + index} onClick={(e) => { openbox(e.target.value) }} value={index} className='relative right-2 w-min self-end -top-10 text-3xl  font-bold	'>+</button>
            <button id={'c' + index} onClick={(e) => { closebox(e.target.value) }} value={index} className='hidden relative right-2 w-min self-end -top-10 text-3xl  font-bold	'>-</button>
            <div id={'pd' + index} className='hidden mb-2 text-lg font-semibold'>What they do</div>
            <div id={"pa" + index} className='hidden mb-2 p-5 bg-gray-200 rounded-lg text-xl text-justify font-normal tracking-wide leading-8	'>{funder.details}</div>
            <div id={'pe' + index} className='hidden mb-2 text-lg font-semibold'>Why Need Fund and Previous Fundings</div>
            <div id={"pb" + index} className='hidden mb-2 p-5 bg-gray-200 rounded-lg text-xl text-justify font-normal tracking-wide leading-8	'>{funder.why}</div>
            <div id={'pf' + index} className='hidden mb-2 text-lg font-semibold'>Profits and Losses and Revenue Model</div>
            <div id={"pc" + index} className='hidden mb-2 p-5 bg-gray-200 rounded-lg text-xl text-justify font-normal tracking-wide leading-8	'>{funder.profit}</div>
            <button id={"b" + index} onClick={()=>{document.getElementById("apply"+index).style.display="flex"}} className='hidden self-end text-white  rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-5 text-lg px-5 py-2.5 mr-0 mb-2  focus:outline-none '>Apply</button>
            <div id={"apply" + index} className='hidden w-screen h-screen flex fixed top-0 left-0 z-50	justify-center backdrop-blur-md backdrop-brightness-75'>
                <div className='rounded-lg self-center p-4 bg-white flex flex-col'>
                    <button id={"b4"} className='fixed top-10 right-10 text-white  rounded-lg bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium mt-5 text-lg px-5 py-2 mr-0 mb-2  focus:outline-none ' value={index} onClick={(e) => { closehandler(e.target.value) }}>Close</button>
                    <div>Please fill the information below</div>
                    <div class="md:col-span-5">

                        <label for="why" class="block mb-1  text-gray-900 font-medium text-lg">Explain why do you Need this loan and Enter To what conditions of Provider You are good to go</label>
                        {/* <label for="why" class="block mb-2 leading-3 text-sm font-medium text-stone-500 ">Explain why you need funding and your previous funding details</label> */}
                        <textarea id="why" rows="2" onChange={(e) => setwhy(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div class="md:col-span-5">

                        <label for="why" class="block mb-1  text-gray-900 font-medium text-lg">Answer the questions</label>
                        {funder.questions.map((question, index) => {
                            return (
                                <>

                                    <label for="why" class="block mb-2 leading-3  font-medium text-stone-500 ">{question}</label>
                                    <input id={"ans" + index} onChange={(e) => setwhy(e.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></input>
                                </>
                            )
                        })}

                    </div>
                    <button id={"b4"} onClick={()=>applyhandler()}  className='self-end text-white  rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-5 text-lg px-5 py-2 mr-0 mb-2  focus:outline-none '>Apply</button>

                </div>
            </div>
        </div>

    )
}

export default Fund