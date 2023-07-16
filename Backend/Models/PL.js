import mongoose from "mongoose";

const schema = new mongoose.Schema({
  token:{
    type:String,
    required:true
  },
  from: {
    type: String,
    required: true,
  },
  amount:{
    type: Number,
    required: true,
  },
  interest_Rate:{
    type: Number,
    required: true,
  },
  time:{
    type: Number,
    required: true,
  },
  details:{
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  questions:[],
  transactions:[]
 
},{ timestamps: true });

mongoose.models = {};

export const PL = mongoose.model("PL", schema);