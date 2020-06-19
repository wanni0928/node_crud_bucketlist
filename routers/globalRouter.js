import express from "express";
import routes from "../routes";
import { getJoin, getLogin, postJoin, postLogin, logout } from "../controllers/userController";
import { home } from "../controllers/galleryController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();


// join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

//login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);

//home
globalRouter.get(routes.home, home);

export default globalRouter;