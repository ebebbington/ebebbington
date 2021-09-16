import { Drash } from "./deps.ts"

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"]
  public GET () {
    this.response.body = Deno.readTextFileSync("./index.html")
    return this.response
  }
}

class FilesResource extends Drash.Http.Resource {
  static paths = ["/public/:dir/:file"]

  public GET() {
    const { url } = this.request
    const mimeType = url.endsWith(".css") ? "text/css" : url.endsWith(".js") ? "application/javascript" : "image/png"
    this.response.body = Deno.readFileSync("." + this.request.url)
    this.response.headers.set("Content-Type", mimeType)
    return this.response
  }
}

const server = new Drash.Http.Server({
  directory: ".",
  resources: [HomeResource, FilesResource],
})

await server.run({
  hostname: "localhost",
  port: 1337
})

console.log('server running')
