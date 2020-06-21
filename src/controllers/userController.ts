import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from 'http';
import { Document } from "mongoose";
import User from "../models/User";
import boom from 'boom';

//obtener todos los usuarios
export const getUsers = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<Document[]> => {
	try {
		await req.jwtVerify()
		const cars = await User.find();
		return cars;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleUser = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw boom.boomify(error);        
    }
}

export const addUser = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
		let body = JSON.parse(req.body);
		console.log(body);
		const car = new User(body);
		return await car.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};