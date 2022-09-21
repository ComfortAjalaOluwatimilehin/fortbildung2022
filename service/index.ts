var mockserver = require("mockserver-node");
var mockServerClient = require("mockserver-client").mockServerClient;
var mockserver_port = 1080;
const {todos} = require("./todos")
const {users} = require("./users")
mockserver
  .start_mockserver({
    serverPort: mockserver_port,
    jvmOptions: [
      "-Dmockserver.enableCORSForAllResponses=true",
      '-Dmockserver.corsAllowMethods="CONNECT, DELETE, GET, HEAD, OPTIONS, POST, PUT, PATCH, TRACE"',
      '-Dmockserver.corsAllowHeaders="Allow, Content-Encoding, Content-Length, Content-Type, ETag, Expires, Last-Modified, Location, Server, Vary, Authorization"',
      "-Dmockserver.corsAllowCredentials=true",
      "-Dmockserver.corsMaxAgeInSeconds=300",
    ],
    trace: true,
  })
  .then(() => {
    mockServerClient("localhost", mockserver_port).mockAnyResponse({
      httpRequest: {
        path: "/disablebutton",
      },
      httpResponse: {
        statusCode: 200,
        body: "DISABLED",
      },
    });
    mockServerClient("localhost", mockserver_port).mockAnyResponse({
      httpRequest: {
        path: "/todos",
      },
      httpResponse: {
        statusCode: 200,
        body: JSON.stringify(todos.slice(0, 5)),
      },
    });
    mockServerClient("localhost", mockserver_port).mockAnyResponse({
      httpRequest: {
        path: "/users",
      },
      httpResponse: {
        statusCode: 200,
        body: JSON.stringify(users.slice(0, 5)),
      },
    });
  })
  .catch((err: any) => {
    console.log("SOMETHING WENT WRONG")
  });
