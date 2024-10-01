import http from "http";
import getPosts from "./postController.js";
import fs from "fs/promises";
import url from "url";
import path from "path";

//Get current path
const __fileNAme = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileNAme);

const posts = getPosts();

const PORT = process.env.PORT;
// const PORT = 8000;
const server =  http.createServer(async(req, res) => {
	/** req */
	console.log(req.url);
	console.log(req.method);

	try {
		if (req.method === "GET") {
			let filePath;
			if (req.url === "/") {
				filePath = path.join(__dirname, "public", "index.html");
				// res.writeHead(200, { "Content-Type": "text/html" });
				// res.end("<h1>Welcome to our blog!</h1>");
			} else if (req.url === "/about") {
				filePath = path.join(__dirname, "public", "about.html");
				// res.writeHead(405, { "Content-Type": "text/html" });
				// res.end("Method not allowed");
			} else {
				throw new Error("Not Found");
			}
            const data = await fs.readFile(filePath);
            res.setHeader("Content-Type", "text/html");
            res.write(data)
            res.end();

		} else {
			throw new Error("Method not allowed");
		}
	} catch (error) {
		res.writeHead(500, { "Content-Type": "text/html" });
		res.end("Internal server error");
	}

	// if (req.url === "/") {
	// 	res.writeHead(200, { "Content-Type": "text/html" });
	// 	res.end("<h1>Welcome to our blog!</h1>");
	// } else if (req.url === "/about") {
	// 	res.writeHead(200, { "Content-Type": "text/html" });
	// 	res.end("<h1>About our blog!</h1>");
	// } else if (req.url === "/api/posts") {
	// 	res.writeHead(200, { "Content-Type": "application/json" });
	// 	res.end(JSON.stringify(posts));
	// } else {
	// 	res.writeHead(404, { "Content-Type": "text/html" });
	// 	res.end("<h1>Page not found!</h1>");
	// }
	/** res */
	//res.write('Hello World')
	// res.statusCode = 200
	//res.setHeader('Content-Type', 'application/json)

	//res.writeHead(200, { "Content-Type": "application/json" });
	// res.writeHead(200, { "Content-Type": "text/html" });
	// //   res.writeHead(200, { 'Content-Type': 'text/plain' })
	// // must end the stream  with res.end() because otherwise the client
	// //will keep waiting for the server to send data
	// //res.end("<h1>Hello World!</h1>");
	// //res.end(JSON.stringify({ message: "Hello World!" }));
	// let html = "<ul>";
	// posts.forEach((post) => {
	// 	html += `<li>${post.title}</li>`;
	// });
	// html += "</ul>";
	// res.end(html);
});

server.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}/`);
});
