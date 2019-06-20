import express from "express";
import morgan from "morgan";
/*logger is morgan's nickname*/
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//import { userRouter } from "./router/userRouter";
/*7행을 저렇게 쓴 이유는 router.js가 디폴트로 export되지 않으므로*/
import routes from "./routes"
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

//const handleHome = (req, res) => res.send("Hello from Seoul");
//const handleProfile = (req, res) => res.send("You are on my profile");
/*above thing, we call it arrow function*/

app.use(cookieParser());
app.use(bodyParser.json({extended: true}));
/*서버가 json을 이해하게 만드는 코드*/
app.use(bodyParser.urlencoded({extended: true}));
/*서버가 form에서 받은 데이터를 이해하게 만드는 코드*/
app.use(morgan("dev"));
app.use(helmet());

const middleware = (req, res, next) => {
    res.send("not happening")
};

app.use("routes.Home", globalRouter);
app.use("routes.user", userRouter);
//app.use means somebody goes to /user, i'm gonna use whole router.js
app.use("routes.videos", videoRouter);


export default app;
