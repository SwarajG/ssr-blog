import { comment } from '../controller';

export default function commentRoute(app) {
  app.get('/api/comments', comment.getAll);

  app.post('/api/comments', comment.create);

  app.get('/api/comment/:id', comment.getById);
}