import express from 'express';
// import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

import { loginUser, registerUser, adminLogin, updateEmail, updatePassword, forgotPassword, resetPassword, getProfile } from '../controllers/userController.js';
import { sendEmail } from '../controllers/emailController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)


// forgotten password
userRouter.post('/forgot-password', forgotPassword); // New endpoint
userRouter.post('/reset-password', resetPassword); // Add this line


// upate account
userRouter.post('/update-email', authUser, updateEmail);
userRouter.post('/update-password', authUser, updatePassword);

// get user data (nickname)
userRouter.get('/profile', authUser, getProfile);

// emailForm
userRouter.post('/send-email', sendEmail);


export default userRouter;