import mongoose from "mongoose";

const schema = new mongoose.Schema({
  from:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  file:{
    type:String,
    required:true
  },
  payment:{
    type:Boolean,
    required:true
  },
  status:{
    type:String,
    required:true
  },

 
},{ timestamps: true });

mongoose.models = {};

export const Auth = mongoose.model("Auth", schema);