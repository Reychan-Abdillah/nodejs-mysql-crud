import http from "node:http";

const server = http.createServer((req, res) => {


    const url = new URL(req.url, "http://localhost:3000");
    const pathname = url.pathname;
    const pathParts = pathname.split("/")
    const id = Number(pathParts[2])



    const isValidPath = pathParts.length === 3 && pathParts[1] === "products" && Number.isInteger(id) && id > 0


    if (isValidPath && req.method === "PUT") {
        res.statusCode = 200;
        res.end("Successfully modified product");

    } else if (isValidPath && req.method === "DELETE") {
        res.statusCode = 204;
        res.end();

    }
});

server.listen(3000);