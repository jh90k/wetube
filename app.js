import express from "express";
import morgan from "morgan";
/*logger is morgan's nickname*/
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

//const handleHome = (req, res) => res.send("Hello from Seoul");
//const handleProfile = (req, res) => res.send("You are on my profile");
/*above thing, we call it arrow function*/

app.use(helmet());
//helmet makes app more safe
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
//쿠키는 사용자 인증 시 사용되는데, 쿠키 파서 덕에 쿠키를 사용할 수 있음
app.use(bodyParser.json({ extended: true }));
/*서버가 json을 이해하게 만드는 코드*/
app.use(bodyParser.urlencoded({ extended: true }));
/*서버가 form에서 받은 데이터를 이해하게 만드는 코드*/
//아바타의 사진 등 사용자 정보 전송
app.use(morgan("dev"));
//loggin every event that is caused at app.

//const middleware = (req, res, next) => {
//    res.send("not happening")
//};

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

/*app.use("/", globalRouter);
app.use("routes.user", userRouter);
//app.use means somebody goes to /user, i'm gonna use whole router.js
app.use("routes.videos", videoRouter);*/

export default app;
