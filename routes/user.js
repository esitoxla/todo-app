import { Router } from "express";
import {registerUser,loginUser,logoutUser,updateProfile} from "../controllers/user.js";
import { uploadProfile } from "../middlewares/upload.js";



const userRouter = Router();

userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.post('/users/logout', logoutUser);

userRouter.post("/user/me", uploadProfile.single("userAvt"), updateProfile);



export default userRouter;

