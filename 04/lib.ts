type Context = {
  request: Request
  params: Record<string, string>
}

type Handler = (context: Context) => Response

type Route = {
  method: string
  pattern: URLPattern
  handler: Handler
}

export class MyFW {
  routes: Route[] = []

  get = (path: string, handler: Handler) => this.on('GET', path, handler)
  put = (path: string, handler: Handler) => this.on('PUT', path, handler)
  post = (path: string, handler: Handler) => this.on('POST', path, handler)
  delete = (path: string, handler: Handler) => this.on('DELETE', path, handler)

  on = (method: string, path: string, handler: Handler) => {
    const pattern = new URLPattern({
      pathname: path
    })
    this.routes.push({ method, pattern, handler })
    return this
  }

  fetch = (req: Request) => {
    for (const route of this.routes) {
      if (req.method === route.method) {
        const match = route.pattern.exec(req.url)
        if (match) {
          return route.handler({
            request: req,
            params: match.pathname.groups
          })
        }
      }
    }
    return new Response('Not Found!', { status: 404 })
  }
}
