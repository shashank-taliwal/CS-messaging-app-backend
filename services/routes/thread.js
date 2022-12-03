const router=require('express').Router();
const threadController=require('../controllers/threadController');

module.exports=()=>{
    router.route('/createThread').post(threadController.createThread);
    router.route('/assignAgent').get(threadController.assignThreadToAgent);
    return router;
}