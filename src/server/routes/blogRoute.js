import { blog } from '../controller';

export default function blogRoute(app) {
  app.get('/api/blogs', blog.getAll);

  app.post('/api/blogs', blog.create);

  app.get('/api/blog/:id', blog.getById);
}