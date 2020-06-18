import express from "express";
import routes from "../routes";
import { getJoin, getLogin, postJoin, postLogin, logout } from "../controllers/userController";
import { home } from "../controllers/galleryController";

const globalRouter = express.Router();


// join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

//login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

//home
globalRouter.get(routes.home, home);

export default globalRouter;