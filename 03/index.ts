import { MyFW } from './lib'

const app = new MyFW()

app.get('/top', (req) => {
  return Response.json({
    'you are at': req.url
  })
})

export default app
