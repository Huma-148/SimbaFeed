const express=require("express")
const router=express.Router();
const auth= require("../../../middlewares/front/auth");
const {signup,signin,getrecord,getrecordbyID, forgotpassword,contactForm}=require("../../../controllers/admin/users.controller")

router.post("/signup",signup);
router.post("/signin",signin);
router.get("/", auth,getrecord);
router.get("/userbyID/:id", auth,getrecordbyID);
router.put("/forgot",forgotpassword);
router.post("/contact",contactForm);
module.exports=router;