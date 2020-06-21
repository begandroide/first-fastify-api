import * as fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './routes';
import { Options } from './config/swagger';
import swagger from 'fastify-swagger';

const app = fastify.default({
    logger: true
});

app.register(swagger, Options);

routes.forEach(route => {
    app.route(route);
});

mongoose.connect('mongodb://localhost/myFirstApi', { useNewUrlParser: true,  useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => { console.log(err)});


// Register Swagger

const start = async (): Promise<void> => {
	try {
		await app.listen(3000);
		app.swagger();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;