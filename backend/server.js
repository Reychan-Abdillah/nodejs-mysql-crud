import http from "node:http"

const server = http.createServer((req, res) => {
    if (req.url === "/products" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Endpoint for retrieving data")
    } else if (req.url === "/products/15" && req.method === "PUT") {
        res.statusCode = 200
        res.end("successfully modified the data")
    } else if (req.url === "/products/15" && req.method === "DELETE") {
        res.statusCode = 204
        res.end()
    } else {
        res.statusCode = 404
        res.end("Endpoint Not Found")
    }
})

server.listen(3000, () => {
    console.log("server run at port 3000")
})