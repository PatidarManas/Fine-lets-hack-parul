import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  transactions:[],
  isAuthorized:{
    type:Boolean,
    default:false
  },
  notifications:[]
    
},{ timestamps: true });

mongoose.models = {};

export const User = mongoose.model("User", schema);