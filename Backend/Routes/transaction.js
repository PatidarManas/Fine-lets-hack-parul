import express from "express";
import { acceptfund, acceptloan, allLoans, allStartups, createAF, createAL, createPF, createPL, getdetails, test } from "../Controllers/Transactions.js";
import { isAuth } from "../Controllers/UserControllers.js";

const router = express.Router();
 
router.post("/test",test);
router.post("/af",isAuth,createAF);
router.post("/al",isAuth,createAL);
router.post("/pf",isAuth,createPF);
router.post("/pl",isAuth,createPL);
router.post("/allloans",allLoans);
router.post("/allfunds",allStartups);
router.post("/getdetails",getdetails);
router.post("/acceptloan",isAuth,acceptloan);
router.post("/acceptfund",isAuth,acceptfund);

export default router;