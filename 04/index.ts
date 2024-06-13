import { MyFW } from './lib'

const app = new MyFW()

app.get('/posts/:id', ({ params }) => {
  return Response.json({
    'your id is': params['id']
  })
})

export default app
