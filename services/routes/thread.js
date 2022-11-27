const router=require('express').Router();
const threadController=require('../controllers/threadController');

module.exports=()=>{
    router.route('/createThread').get(threadController.createThread);
    router.route('/reopenOldThread').get(threadController.reopenOldThread);
    router.route('/assignAgent').get(threadController.assignThreadToAgent);
    return router;
}