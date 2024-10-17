import { Router } from "express";
import {registerUser,loginUser,logoutUser,updateProfile, getProfile} from "../controllers/user.js";
import { uploadProfile } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";



const userRouter = Router();

userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post('/users/logout', isAuthenticated, logoutUser);

userRouter.post("/user/me", isAuthenticated, hasPermission('update_profile'), uploadProfile.single("avatar"), updateProfile);



export default userRouter;

