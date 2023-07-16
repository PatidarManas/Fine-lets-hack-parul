import express from "express";
import { isLogin, isvalidemail, login, logout, register, userdetail } from "../Controllers/UserControllers.js";

const router = express.Router();
 
router.post("/islogin",isLogin);
router.post("/isvalidemail",isvalidemail);
router.post("/login",login);
router.post("/logout",logout);
router.post("/register",register);
router.post("/userdetails",userdetail);

export default router;