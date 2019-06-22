import express from "express";
import routes from "../routes";
import { search, home } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";
// '../' means outside the folder

const globalRouter = express.Router();

//globalRouter.get(routes.home, (req, res) => res.send("Home"));
//위 문장이 아래와 같이 변신
globalRouter.get(routes.home, home);
//마지막에 home이라고 입력하면 컨트롤러에서 export 했던 기록 덕분에
//자동으로 import되는 기능이 뜸!!(말퐁선에 줄 두개 있는?)
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
//it means whole globalRouter.js is gonna be exported.