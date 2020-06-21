"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var usersController = __importStar(require("../controllers/userController"));
var usersApi_1 = require("./documentation/usersApi");
var getUsersRoute = {
    method: 'GET',
    url: '/api/users',
    handler: usersController.getUsers
};
var getUserRoute = {
    method: 'GET',
    url: '/api/users/:id',
    handler: usersController.getSingleUser
};
var postUserRoute = {
    method: 'POST',
    url: '/api/users',
    handler: usersController.addUser,
    schema: usersApi_1.AddUserSchema
};
var routes = [getUsersRoute, getUserRoute, postUserRoute];
exports.default = routes;
