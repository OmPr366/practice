const express =  require('express');
const { restart } = require('nodemon');
const {signup, signin, signout, requireSignin} =  require('../controllers/auth')

const router =  express.Router();

// Validator 

const {runValidation} =  require('../validators')
const {userSignupValidator , userSigninvalidator} =  require('../validators/auth')


router.post('/signup',userSignupValidator,runValidation,signup);
router.post('/signin',userSigninvalidator, runValidation, signin);
router.get('/signout',signout);
// Testing
router.get('/secret',requireSignin,(req,res)=>{
    res.json({
        message:'You have then Access to secret page'
    })
}
)


module.exports =  router