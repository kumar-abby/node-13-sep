const express=require('express');
const userController=require('../controllers/usercontroller');
const router=express.Router();
router.get('/users',(req,res)=>{
    userController.getAllUsers(req,res);
})

module.exports=router