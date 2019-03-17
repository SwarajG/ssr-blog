import render from './render';
import user from './userRoute';
import blog from './blogRoute';
import like from './likeRoute';
import comment from './commentRoute';

export default function routes(app) {
	render(app);
	user(app);
	blog(app);
	like(app);
	comment(app);
};