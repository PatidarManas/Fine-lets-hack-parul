import mongoose from "mongoose";

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
  quesans:[],
  status: {
    type: String,
    required: true,
  },
 
},{ timestamps: true });

mongoose.models = {};

export const PF = mongoose.model("PF", schema);