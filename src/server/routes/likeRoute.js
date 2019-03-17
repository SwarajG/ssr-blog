import { like } from '../controller';

export default function likeRoute(app) {
  app.get('/api/likes', like.getAll);

  app.post('/api/likes', like.create);

  app.get('/api/like/:id', like.getById);
}