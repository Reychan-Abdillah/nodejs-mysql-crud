import http from "node:http";
import db from "./config/db.js"

const server = http.createServer(async (req, res) => {


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
            try {
                const [result] = await db.execute(
                    `SELECT * FROM products_stock`
                )
                res.setHeader("Content-Type", "application/json")
                res.statusCode = 200

                res.end(JSON.stringify({
                    message: "successfully displayed all products",
                    data: result
                }))
            } catch (error) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                console.error("GET /products error:", error.message);
                res.end(JSON.stringify({ error: "Internal Server Error" }));
            }
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
            try {
                const [result] = await db.execute(
                    `SELECT * FROM products_stock WHERE id = ?`,
                    [id]
                )

                if (result.length === 0) {
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "application/json");
                    return res.end(JSON.stringify({ error: `Product with ID ${id} not found` }));
                }


                res.setHeader("Content-type", "application/json")
                res.statusCode = 200
                res.end(JSON.stringify({
                    message: `successfully retrieved data based on ID ${id}`,
                    data: result
                }))
            } catch (error) {
                res.setHeader("Content-type", "application/json")
                res.statusCode = 500
                console.log(error, "error pada bagian get tunggal")
                res.end(JSON.stringify({
                    error: "Internal Server Error"
                }))
            }
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