import jwt from "jsonwebtoken";
import config from "../configs/config";

export var usuarios;
export default (io) => {
  io.on("connection", (socket) => {

    var message;
    socket.on('my message', (msg, res, req) => {
      let token = msg;
      try {
        const decoded = jwt.verify(token, config.SECRET);
        const userId = decoded.id;
        console.log(userId, "aca el coeficiente del usuarios")
      } catch (error) {
        console.log(error)
      }
      return message
    });



    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });

    usuarios = socket.adapter.sids.size;
    console.log(usuarios, "aca los usuarios")
    return usuarios;

  });
};