const router=require('express').Router();
const userController=require("../controllers/userController");
module.exports=()=>{
    router.route('/').get(userController.userHome);
    router.route('/login').post(userController.login);
    router.route('/signup').post(userController.signup);
    return router;
}