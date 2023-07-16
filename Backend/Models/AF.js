import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    fund: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    why: {
      type: String,
      required: true,
    },
    profit: {
      type: String,
      required: true,
    },
    questions: [],
    file: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    transactions: [],
  },
  { timestamps: true }
);

mongoose.models = {};

export const AF = mongoose.model("AF", schema);
