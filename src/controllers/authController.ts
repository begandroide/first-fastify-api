import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from 'http';
import { Document } from "mongoose";
import User from "../models/User";
import boom from 'boom';
import bcrypt from 'bcrypt';
import secret from '../config/auth.config';
import fastifyJWT from "fastify-jwt";
import app from "..";

//obtener todos los usuarios
export const login = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
        var user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
          return reply.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.get('password')
          );
    
        if (!passwordIsValid) {
          return reply.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
      
        var token = app.jwt.sign({ id: user.id }, {
          expiresIn: 86400 // 24 hours
        });
        return reply
          .setCookie('token', token, {
          domain: 'localhost',
          path: '/',
          // secure: true, // send cookie over HTTPS only
          httpOnly: true,
          sameSite: true // alternative CSRF protection
          })
          .status(200).send({
              token: token
          });
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const signup = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
        let body = req.body;
        const user = new User({
            username: body.username,
            email: body.email,
            password: bcrypt.hashSync(body.password, 8),
            name: body.name,
            surname: body.surname
          });
        user.save((err, user) => {
            if(err){
                reply.status(500).send({message: err});
            } else {
                reply.send({ message: "User was registered successfully!" });
            }
        })
        return await user.save();
    } catch (error) {
        throw boom.boomify(error);        
    }
}
