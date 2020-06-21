import * as fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './routes';
import { Options } from './config/swagger';
import swagger from 'fastify-swagger';
import { config } from './config';
import helmet from 'fastify-helmet';
import cors from 'fastify-cors';

const app = fastify.default({
    logger: true
});
// Register Swagger
app.register(swagger, Options);
app.register(helmet);
app.register(cors);

routes.forEach(route => {
    app.route(route);
});


const start = async (): Promise<void> => {
	try {
		await app.listen(config.app.port);
		app.swagger();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

export default app;
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useNewUrlParser: true,  useUnifiedTopology: true })
		.then(() => console.log('MongoDB connected...'))
		.catch(err => { console.log(err)});

start();