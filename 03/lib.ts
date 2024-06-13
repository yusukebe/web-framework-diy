type Handler = (request: Request) => Response

type Route = {
  method: string
  path: string
  handler: Handler
}

export class MyFW {
  routes: Route[] = []

  get = (path: string, handler: Handler) => {
    this.routes.push({ method: 'GET', path, handler })
    return this
  }

  fetch = (req: Request) => {
    const pathname = new URL(req.url).pathname
    for (const route of this.routes) {
      if (req.method === route.method && pathname === route.path) {
        return route.handler(req)
      }
    }
    return new Response('Not Found!', { status: 404 })
  }
}
