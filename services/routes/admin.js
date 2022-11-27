const router=require('express').Router();
const adminController=require("../controllers/adminController");
module.exports=()=>{
    router.route('/login').get(adminController.login);
    router.route('/getUnassignedThreads').post(adminController.getUnassignedThreads);
    router.route('/getConvo').get(adminController.getConversationOfAThread);
    return router;
}