import mongoose, { trusted } from "mongoose";

const schema = new mongoose.Schema({
  token:{
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  detailsans:{
    type:String,
    required:true,
  },
  quesans:[],
  status: {
    type: String,
    required: true,
  },
 
},{ timestamps: true });

mongoose.models = {};

export const AL = mongoose.model("AL", schema);