const router=require('express').Router();
const userController=require("../controllers/userController");
module.exports=()=>{
    router.route('/').get(userController.userHome);
    router.route('/login').get(userController.login);
    router.route('/signup').post(userController.signup);
    router.route('/openNewThread').get(userController.openNewThread);
    router.route('/reopenOldThread').get(userController.reopenOldThread);
    return router;
}