const router=require('express').Router();
const agentController=require('../controllers/agentController');

module.exports=()=>{
    router.route('/signup').post(agentController.signup);
    router.route('/login').post(agentController.login);
    router.route('/getCurrentThread').get(agentController.getCurrentThread);
    router.route('/markResolved').post(agentController.markResolved);
    router.route('/getConvo').post(agentController.getConversation);
    return router;
}