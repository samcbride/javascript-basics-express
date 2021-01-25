# JavaScript Basics in Express

## Overview of the Project

This project had us create a Web API using Express utilizing JavaScript code we had written in a previous exercise. It was our first introduction to routing, HTTP requests and responses, controller functions, and middleware.

### Technologies

- JavaScript
- Express
- Postman
- Supertest

---

## Concepts Covered

- Web Servers and Web API's
- HTTP Requests and Responses
- Routing
- Controller functions
- Middleware

### Web Servers and Web API's

- A Web Server has both hardware and software components. The hardware component is the physical machine that stores web server software and a website's component files (e.g., HTML documents, CSS stylesheets). The software component controls how web users access hosted files, via an HTTP server. The HTTP server understands URLs (web addresses) and HTTP (the instructions used by your browser to view webpages). Whenever a browser needs a file that's hosted on a web server, it requests it via HTTP (e.g., GET). The request is sent to the hardware web server and the software HTTP server accepts the request and sends back the appropriate response (e.g, sends the requested document, or if it can't find the document it sends a 404 response).

- A Web Server is a computer system that handles client's requests via the HTTP protocol. A Web Server running on a computer listens for requests from other computers. When a request is received the Web Service returns the requested resources (a Web Service is a way for two machines to communicate with each other over a network).

- A Web API is the messenger that takes requests and tells a system what you want to do and then returns the response back to you. It allows one piece of software to talk to another piece of software.

### HTTP Requests and Responses

- HTTP Request (_req_ object): it represents the HTTP request. In the below example, _req.params.string_ is the parameter being fed into the _sayHello_ function, which returns: `Hello, ${string}.` (or: `Hello, ${req.params.string}.`). The value of _string_ would be fed in via the path. For example: _'/strings/hello/world'_, would return: `Hello, world.`

- HTTP Response (_res_ object): it represents the HTTP response that an Express app sends when it gets an HTTP request. In the below example, `res.status(200)` states that the response status should return correctly and should send the result, which invokes a function, _sayHello_, which will return the string `Hello, world.` (This is done via _res.send_, which is chained onto _res.status_).

> For example:
>
> app.get('/strings/hello/:string', (req, res) => {
>
> res.status(200).send({ result: sayHello(req.params.string) });
>
> });

### Routing

- Routing refers to how an application's endpoints respond to client requests. It is defined through using methods of the Express _app_ object that correspond to HTTP methods (e.g., _app.get()_ handles GET requests).
- Each route can have one or more handler functions, which are executed when the route is matched. It takes the following structure:

> app.METHOD(PATH, HANDLER)
>
> - _app_ is the instance of _express_
> - _METHOD_ is an HTTP request method (e.g., GET, POST, etc.)
> - _PATH_ is a path on the server (e.g., '/strings/hello/:string') and in combination with the _req_ method, define the endpoints at which requests can be made
> - _HANDLER_ is the function executed when the route is matched

### Controller functions

- Controller functions have two parameters: _req_, which represents the HTTP request that was sent, and _res_, which represents the response we will send. It is invoked by Express when it receives a request to a given route.

### Middleware

- Software containing functions that execute during the request-response cycle that have access to both the request (req) and the response (res) objects. It is executed between when a server receives a request and when it sends a response. The middleware we used for this project was `app.use(express.json());`, which coverted our data into a JSON string. Middleware has the ability to terminate the request-response cycle if it deems that a request is bad. Once a request has passed it reaches the controller function.

### End-to-end Testing

- End-to-end testing involves testing your entire application from start to finish. It assures that all the integrated pieces of an application function and work together as expected.
- End-to-end tests test the flow of an application - an example is testing an endpoint or a route, which includes everything needed for the endpoint to work (e.g., database connection, etc).

### Supertest

- A library for testing Node.js HTTP servers - it allows us to send HTTP requests (e.g., GET, PATCH, etc) to HTTP servers and get results.

---

## Acknowledgments

Thanks to the [Manchester Codes](https://manchestercodes.com/software-engineer-fasttrack) team for all the support and knowledge so far: Romy, Andreea, Ian and more!
