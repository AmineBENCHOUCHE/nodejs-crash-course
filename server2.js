import { createServer } from "http";
const PORT = process.env.PORT;
const users = [
	{
		id: 1,
		name: "John Doe",
		email: "john.doe@example.com",
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "jane.smith@example.com",
	},
	{
		id: 3,
		name: "Alice Johnson",
		email: "alice.johnson@example.com",
	},
];

/**
 * Middleware usely ion separate file
 */
//Logger
const logger = (req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
};

//JSON Middleware
const jsonMiddleware = (req, res, next) => {
	res.setHeader("Content-Type", "application/json");
	next();
};

// Route handler for GET /api/users/
const getUsersHandler = (req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(users));
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	const id = req.url.split("/")[3];
	const user = users.find((user) => user.id === parseInt(id));
	res.write(JSON.stringify(user));
	res.end();
};

// Route handler for 404
const notFoundHandler = (req, res) => {
	res.writeHead(404, { "Content-Type": "application/json" });
	res.end("Page not found");
};

//Route handler for POST /api/users

const createUserHandler = (req, res) => {
	let body = "";
	//Listen for data
	req.on("data", (chunk) => {
		body += chunk.toString();
	});
	//Listen for end of data
	req.on("end", () => {
		//Json parse to transform into a JS object
		const newUser = JSON.parse(body);
		users.push(newUser);
		res.statusCode = 201;
		res.write(JSON.stringify(newUser));
		res.end();
	});
};

const server = createServer((req, res) => {
	logger(req, res, () => {
		jsonMiddleware(req, res, () => {
			if (req.url === "/api/users" && req.method === "POST")
				createUserHandler(req, res);
			else if (req.url === "/api/users" && req.method === "GET")
				getUsersHandler(req, res);
			else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET")
				getUserByIdHandler(req, res);
			else notFoundHandler(req, res);
		});
	});

	// res.writeHead(200, { 'Content-Type': 'text/html' })
	// res.end('<h1>Hello Server 2</h1>')
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
