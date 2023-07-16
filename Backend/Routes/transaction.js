import express from "express";
import { acceptloan, allLoans, allStartups, createAF, createAL, createPF, createPL, getdetails } from "../Controllers/Transactions.js";
import { isAuth } from "../Controllers/UserControllers.js";

const router = express.Router();
 
router.post("/af",isAuth,createAF);
router.post("/al",isAuth,createAL);
router.post("/pf",isAuth,createPF);
router.post("/pl",createPL);
router.post("/allloans",allLoans);
router.post("/allfunds",allStartups);
router.post("/getdetails",getdetails);
router.post("/acceptloan",acceptloan);

export default router;