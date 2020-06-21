export const Options = {
	routePrefix: '/documentations',
	exposeRoute: true,
	swagger: {
		paths: '/users',
		info: {
			title: 'My first API',
			description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
			version: '1.0.0',
		},
		externalDocs: {
			url: 'https://swagger.io',
			description: 'Find more info here',
		},
		host: 'localhost',
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json'],
	},
};
