import http from "node:http";

const server = http.createServer((req, res) => {


    const url = new URL(req.url, "http://localhost:3000");
    const pathname = url.pathname;
    const pathParts = pathname.split("/")
    const id = Number(pathParts[2])



    const isProductPath =
        pathname === "/products"

    const isValidProductsPath =
        pathParts.length === 3 &&
        pathParts[1] === "products" &&
        Number.isInteger(id) && id > 0 &&
        pathParts[2] !== ""



    // Route : /products
    if (isProductPath) {
        if (req.method === "GET") {
            res.statusCode = 200
            res.end("successfully displayed all products")
        } else if (req.method === "POST") {
            res.statusCode = 201
            res.end("successfully added product data")
            // hapus semua data
        } else if (req.method === "DELETE") {
            res.statusCode = 204
            res.end()
        } else {
            res.setHeader("Allow", "GET, POST, DELETE");
            res.statusCode = 405;
            res.end("Method Not Allowed");
        }
    } else if (isValidProductsPath) {
        if (req.method === "GET") {
            res.statusCode = 200
            res.end(`successfully retrieved data by ID ${id}`)
        } else if (req.method === "PUT") {
            res.statusCode = 200
            res.end(`successfully modified product" ${id}`)
        } else if (req.method === "DELETE") {
            res.statusCode = 204
            res.end()
        } else {
            res.setHeader("Allow", "GET, PUT, DELETE");
            res.statusCode = 405;
            res.end("Method Not Allowed");
        }
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }




});

server.listen(3000);