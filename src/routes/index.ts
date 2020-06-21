import { RouteOptions } from "fastify";
import * as usersController from '../controllers/userController';
import { AddUserSchema } from "./documentation/usersApi";

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

const routes = [getUsersRoute,  getUserRoute, postUserRoute];

export default routes;