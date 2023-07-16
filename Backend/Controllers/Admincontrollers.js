import { Auth } from "../Models/Auth.js"
import { User } from "../Models/User.js"

export const authreq = async(req,res)=>{

    try {
        await Auth.create({
            from:req.body.user._id,
            name:req.body.user.name,
            file:req.body.file,
            payment:true,
            status:"Created"
        })
        res.status(200).json("done")
    } catch (error) {
        res.status(400).json(error)
    }
}

export const allauthreq = async(req,res)=>{
    try{
        const reqs = await Auth.find({status:"Created"});
        const all =  await Auth.find({})
        const allusers =  await User.find({})
        res.status(200).json({authreqs:reqs,total:all.length,totalusers:allusers.length})
    }catch(error){

        res.status(400).json(error)
    }
}

export const acceptreq = async(req,res)=>{
    try {
        await User.findByIdAndUpdate(req.body.of,{
            isAuthorized:true
        },{new:true})
        await Auth.findByIdAndUpdate(req.body.id,{
            status:"Accepted"
        })
        console.log(req.body.of)
        res.status(200).json("done")
    } catch (error) {
        res.status(400).json(error)
    }
}
export const declinereq = async(req,res)=>{
    try {
        
        await Auth.findByIdAndUpdate(req.body.id,{
            status:"Rejected"
        })
        
        res.status(200).json("done")
    } catch (error) {
        res.status(400).json(error)
    }
}