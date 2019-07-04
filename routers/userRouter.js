import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  userDetail
} from "../controllers/userController";

const userRouter = express.Router();
/*userRouter를 보냄*/

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
