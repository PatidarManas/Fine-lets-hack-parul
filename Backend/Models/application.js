import mongoose from "mongoose";

const schema = new mongoose.Schema({
  app: {
    type: Number,
    required: true,
  },
 
 
});

mongoose.models = {};

export const application = mongoose.model("application", schema);