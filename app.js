import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet" //보안강화
import morgan from "morgan"; //디버깅
import routes from "./routes";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewares";

import "./passport";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev")); // dev가 개발자 디버깅용으로 적합.
const CokieStore = MongoStore(session);
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true, //세션을 강제로 저장하게함.
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection })
}));
//view engine
app.set("view engine", "pug");

//initial passport
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);

export default app;