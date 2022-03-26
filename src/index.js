import app from "./configs/app";
import './configs/database';
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./configs/sockets";

//app.listen(app.get("port"));

const server = http.createServer(app);

const httpServer = server.listen(app.get('port'));

const io = new WebSocketServer(httpServer, {
    cors: {
        AllowedHeaders: ["*"],
        AllowedMethods: ["GET", "POST", "HEAD"],
        // AllowedOrigins: ["http://localhost:4200/home/hero"]
        //AllowedOrigins: "http://propiedad-horizontal.s3-website.us-east-2.amazonaws.com/dashboard/dashboard",
        AllowedOrigins: "http://el-refugio.s3-website.us-east-2.amazonaws.com/dashboard/dashboard",
    }
});

Sockets(io);

console.log("Server on port", app.get('port'));
