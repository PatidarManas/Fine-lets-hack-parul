import express from "express";
import { isAuth, isLogin, isvalidemail, login, register, userdetail } from "../Controllers/UserControllers.js";
import { acceptreq, allauthreq, authreq, declinereq } from "../Controllers/Admincontrollers.js";

const router = express.Router();
 
router.post("/authreq",isAuth,authreq);
router.post("/authreqaccept",acceptreq);
router.post("/authreqreject",declinereq);
router.post("/allauthreq",allauthreq);

export default router;