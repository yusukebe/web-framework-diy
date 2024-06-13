import { MyFW } from './lib'

describe('first', () => {
  const app = new MyFW()
  app.get('/top', (req) => {
    return Response.json({
      path: req.url
    })
  })

  it('should return a 200 response', async () => {
    const req = new Request('http://localhost/top')
    const res = app.fetch(req)
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      path: 'http://localhost/top'
    })
  })

  it('should return a 404 response', async () => {
    const req = new Request('http://localhost/')
    const res = app.fetch(req)
    expect(res.status).toBe(404)
  })
})
