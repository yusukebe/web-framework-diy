import { MyFW } from './lib'

describe('first', () => {
  const app = new MyFW()
  app.get('/posts/:id', ({ params }) => {
    return Response.json({
      'your id is': params['id']
    })
  })

  it('should return a 200 response', async () => {
    const req = new Request('http://localhost/posts/123')
    const res = app.fetch(req)
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      'your id is': '123'
    })
  })

  it('should return a 404 response', async () => {
    const req = new Request('http://localhost/')
    const res = app.fetch(req)
    expect(res.status).toBe(404)
  })
})
