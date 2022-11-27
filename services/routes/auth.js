const router=require('express').Router();
const authController=require("../controllers/authController");
module.exports=()=>{
    router.route('/loginUser').get(authController.loginUser);
    router.route('/loginAgent').get(authController.loginAgent);
    router.route('/loginAdmin').get(authController.loginAdmin);
    router.route('/signup').post(authController.signup);
    return router;
}