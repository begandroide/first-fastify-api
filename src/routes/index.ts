import { RouteOptions } from "fastify";
import * as usersController from '../controllers/userController';
import * as authController from '../controllers/authController';
import { AddUserSchema } from "./documentation/usersApi";
import { SignupSchema } from "./documentation/authApi";

const getUsersRoute: RouteOptions = {
  method: 'GET',
  url: '/api/users',
  handler: usersController.getUsers
};

const getUserRoute: RouteOptions = {
  method: 'GET',
  url: '/api/users/:id',
  handler: usersController.getSingleUser
};

const postUserRoute: RouteOptions = {
  method: 'POST',
  url: '/api/users',
  handler: usersController.addUser,
  schema: AddUserSchema
};

const signinRoute: RouteOptions = {
  method: 'POST',
  url: '/api/auth/signup',
  handler: authController.signup,
  schema: SignupSchema
}
const routes = [getUsersRoute,  getUserRoute, postUserRoute, signinRoute];

export default routes;