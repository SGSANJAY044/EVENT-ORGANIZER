import express from 'express';
import  {getallEvent,signIn}  from '../controllers/controller.js';

const router=express.Router();

 
 router.get("/",getallEvent);
 router.get("/signin",signIn);
export default router

