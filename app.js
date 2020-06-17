import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet" //보안강화
import morgan from "morgan"; //디버깅

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev")); // dev가 개발자 디버깅용으로 적합.

//view engine
app.set("view engine", "pug");

export default app;