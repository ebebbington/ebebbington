import { Drash } from "./deps.ts";

class HomeResource extends Drash.Resource {
  paths = ["/"];
  public GET(_request: Drash.Request, response: Drash.Response) {
    return response.file("./index.html");
  }
}

class FilesResource extends Drash.Resource {
  paths = ["/public/:dir/:file"];

  public GET(request: Drash.Request, response: Drash.Response) {
    response.file(`.${new URL(request.url).pathname}`);
    // `file()` doesnt correctly display images (yet)
    response.body = Deno.readFileSync(`.${new URL(request.url).pathname}`);
  }
}

const server = new Drash.Server({
  resources: [HomeResource, FilesResource],
  hostname: "localhost",
  port: 1337,
  protocol: "http",
});

server.run();

console.log("server running");
