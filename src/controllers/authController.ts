import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from 'http';
import { Document } from "mongoose";
import User from "../models/User";
import boom from 'boom';
import bcrypt from 'bcrypt';

//obtener todos los usuarios
export const login = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<Document[]> => {
	try {
		const cars = await User.find();
		return cars;
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
        return await user.save();
    } catch (error) {
        throw boom.boomify(error);        
    }
}
