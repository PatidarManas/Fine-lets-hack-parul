
// import Al from "../../frontend/src/pages/AL/Al.js";
import { AF } from "../Models/AF.js"
import { AL } from "../Models/AL.js";
import { PF } from "../Models/PF.js";
import { PL } from "../Models/PL.js";
import { User } from "../Models/User.js"
import { application } from "../Models/application.js"
import cloudinary from "cloudinary"
import nodemailer from "nodemailer"
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "mmbhk.fine@gmail.com",
      pass: "roaitiaekjxmxdfi"
    }
  });

  export const test =async(req,res)=>{
    try {
        var mailOptions = {
            from: 'mmbhk.fine@gmail.com',
            to: `baljitsingh692002@gmail.com`,
            subject: 'Here is your contact details',
            text: `Hey baljit 
            We are very happy to tell you that your request for loan has done all the formalities and now you can contact Provider   
            Here is the Provider contact details
            
    
            Note: The further Loan process should be caried out by you and the provider itself, Fine will not be responsible for and Problems caused in further process`
        };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
             console.log(error)
            } 
          });
          res.status(200).json("done" )
    } catch (error) {
        res.status(400).json(error )
    }
  }
export const createAF = async (req, res) => {
    try {
        const k = await application.findById("64ad9f0f3f9ccbdf739b90ce");
        const token = "AF" + k.app;
        await application.findByIdAndUpdate("64ad9f0f3f9ccbdf739b90ce", {
            app: k.app + 1
        });
        
        const af = await AF.create({
            token: token,
            from: req.body.user._id,
            fund: req.body.fund,
            file: req.body.file,
            category: req.body.category,
            why: req.body.why,
            percentage: req.body.percentage,
            location: req.body.location,
            profit: req.body.profit,
            name: req.body.name,
            details: req.body.details,
            questions: req.body.questions,
            status: "Active",
        })
        await User.findByIdAndUpdate(req.body.from, {
            $push: { Transactions: token }

        })
        res.status(200).json(af)
    } catch (error) {
        res.status(400).json(error)

    }
}


export const createPF = async (req, res) => {
    try {
        const k = await application.findById("64ad9f0f3f9ccbdf739b90ce");
        const token = "PF" + k.app;
        await application.findByIdAndUpdate("64ad9f0f3f9ccbdf739b90ce", {
            app: k.app + 1
        });

        const pf = await PF.create({
            token: token,
            from: req.body.user._id,
            to: req.body.to,
            quesans:req.body.answers,
            status: "Applied",
        })
        await User.findByIdAndUpdate(req.body.user._id, {
            $push: { transactions: token },
        })
        const af = await AF.findOneAndUpdate({ token: req.body.to }, {
            $push: { transactions: req.body.user._id }
        })
        await User.findByIdAndUpdate(af.from,{
            $push: { notifications:["Your request to get connected to investors in your Startup/Buisness Just got a new Response" , "Active",token] }

        })
        console.log("a")
        res.status(200).json(pf)
    } catch (error) {
        res.status(400).json(error)

    }
}

export const createPL = async (req, res) => {
    console.log(req.body.amount)
    try {
        const k = await application.findById("64ad9f0f3f9ccbdf739b90ce");
        const token = "PL" + k.app;
        await application.findByIdAndUpdate("64ad9f0f3f9ccbdf739b90ce", {
            app: k.app + 1
        });

        const pl = await PL.create({
            token: token,
            from: req.body.user._id,
            questions: req.body.questions,
            amount: req.body.amount,
            interest_Rate: req.body.interest,
            time: req.body.time,
            details: req.body.details,
            status: "created",
        })
        await User.findByIdAndUpdate(req.body.from, {
            $push: { Transactions: token }

        })

        res.status(200).json(pl)
    } catch (error) {
        res.status(400).json(error)

    }
}


export const createAL = async (req, res) => {
    try {
        const k = await application.findById("64ad9f0f3f9ccbdf739b90ce");
        const token = "AL" + k.app;
        await application.findByIdAndUpdate("64ad9f0f3f9ccbdf739b90ce", {
            app: k.app + 1
        });

        const pl = await AL.create({
            token: token,
            from: req.body.user._id,
            to: req.body.to,
            detailsans:req.body.detailsans,
            quesans:req.body.answers,
            status: "Applied",
        })
         await User.findByIdAndUpdate(req.body.user._id, {
            $push: { transactions: token },
        })
        const pls = await PL.findOneAndUpdate({ token: req.body.to }, {
            $push: { transactions: req.body.token },
        })
        await User.findByIdAndUpdate(pls.from,{
            $push:  {notifications:["A new person applied on your Loan Provider Request. Tab to see it","Active",token]}

        })
        res.status(200).json(pl)
    } catch (error) {
        res.status(400).json(error)

    }
}


export const allLoans = async (req, res) => {
    try {
        const loans = await PL.find({ amount: { $gt: req.body.amountgt, $lt: req.body.amountlt }, interest_Rate: { $gt: req.body.interestgt, $lt: req.body.interestlt }, })
        console.log(loans)
        res.status(200).json(loans);
    } catch (error) {
        res.status(400).json(error);
    }
}
export const allStartups = async (req, res) => {
    // console.log("sdkns")
    try {
        const startup = await AF.find({})
        res.status(200).json(startup);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const History = async (req, res) => {
    try {
        const { transactions } = await User.findById(req.body.id)
        res.status(200).json(transactions)
    } catch (error) {
        res.status(400).json(error)

    }
}
export const acceptfund=async(req,res)=>{
    try {
        const user = await PF.findOneAndUpdate({token:req.body.altoken},{
            status:"Accepted"
        })
        
        const user2 = await User.findByIdAndUpdate(user.from,{
            $push:{notifications:["your request to invest in startup just got accepted check out mail for further information","Active",req.body.token]}
        })
        var mailOptions = {
            from: 'mmbhk.fine@gmail.com',
            to: `${user2.email}`,
            subject: 'Here is your contact details',
            text: `Hey ${user2.name} 
            We are very happy to tell you that your request for Getting as a partner in company has done all the formalities and now you can contact The startup team   
            Here is the Provider contact details
            Name: ${req.body.user.name}
            Contact no.: ${req.body.user.mobile}
            Email-id : ${req.body.user.email}
    
            Note: The further investment process should be caried out by you and the startup team itself, Fine will not be responsible for and Problems caused in further process`
        };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
             alert(error)
            } 
          });
        res.status(200).json("success")
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getdetails= async(req,res)=>{
    try {
        if(req.body.notification[2][0]=="A" && req.body.notification[2][1]=="L"){

            const transaction = await AL.findOne({token:req.body.id})
            const {name,isAuthorized} = await User.findById(transaction.from)
            
            res.status(200).json({transaction , name ,isAuthorized})
        }
        else if(req.body.notification[2][0]=="P" && req.body.notification[2][1]=="F"){
            const transaction = await PF.findOne({token:req.body.id})
            const {name,isAuthorized} = await User.findById(transaction.from)
            
            res.status(200).json({transaction , name ,isAuthorized})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const acceptloan = async(req,res)=>{
    console.log(req.body.altoken)
try {
    const user = await AL.findOneAndUpdate({token:req.body.altoken},{
        status:"Accepted"
    })
    
    const user2 = await User.findByIdAndUpdate(user.from,{
        $push:{notifications:["your request for loan just got accepted check out mail for further information","Active",req.body.token]}
    })
    var mailOptions = {
        from: 'mmbhk.fine@gmail.com',
        to: `${user2.email}`,
        subject: 'Here is your contact details',
        text: `Hey ${user2.name} 
        We are very happy to tell you that your request for loan has done all the formalities and now you can contact Provider   
        Here is the Provider contact details
        Name: ${req.body.user.name}
        Contact no.: ${req.body.user.mobile}
        Email-id : ${req.body.user.email}

        Note: The further Loan process should be caried out by you and the provider itself, Fine will not be responsible for and Problems caused in further process`
    };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
         alert(error)
        } 
      });
    res.status(200).json("success")
} catch (error) {
    res.status(400).json(error)
}
}