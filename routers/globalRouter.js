import express from "express";
import passport from "passport";
import routes from "../routes";
import { getJoin, getLogin, postJoin, postLogin, logout, githubLogin, postGithubLogIn } from "../controllers/userController";
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

//github login
globalRouter.get(routes.github, githubLogin);
globalRouter.get(
    routes.githubCallback, 
    passport.authenticate('github', { failureRedirect: '/login' }),
    postGithubLogIn
);

//home
globalRouter.get(routes.home, home);

export default globalRouter;