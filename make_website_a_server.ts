import { Drash } from "https://deno.land/x/drash@v1.2.4/mod.ts"

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"]
  public GET () {
    this.response.body = this.response.render("/index.html")
    return this.response
  }
}

const server = new Drash.Http.Server({
  directory: ".",
  resources: [HomeResource],
  views_path: ".",
  static_paths: ["/public"]
})

await server.run({
  hostname: "localhost",
  port: 1337
})

console.log('server running')