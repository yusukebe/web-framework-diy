export class MyFW {
  fetch = (req: Request) => {
    return new Response(`You are at ${req.url}`)
  }
}
