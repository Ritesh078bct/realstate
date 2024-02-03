import express from "express";
import{ signUp, signin }from "../controlers/auth.controler.js"
const router=express.Router();

router.post("/signup",signUp);
router.post("/signin",signin);
export default router;