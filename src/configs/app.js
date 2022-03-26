import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import pkg from "../../package.json";

import productRoutes from "../routes/products.routes";
import usersRoutes from "../routes/user.routes";
import authRoutes from "../routes/auth.routes";
import preguntaRoutes from "../routes/pregunta.routes";
import respuestaRoutes from "../routes/respuesta.routes";
import quorumRoutes from "../routes/quorum.routes";
import asambleaRoutes from "../routes/asamblea.routes";

import { createRoles, createAdmin } from "../libs/initialSetup";
import { createPreguntas } from "../libs/initialPreguntas";
import { createValor } from "../libs/initialValor";
import { createAsambleas } from "../libs/initialAsamblea";

const app = express();
createRoles();
createAdmin();
createPreguntas();
createValor();
createAsambleas();

// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

// Middleware

app.use(cors());
app.use(helmet());
//app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: false }));
// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "aplicación para el control de usuarios",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/preguntas", preguntaRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/respuesta", respuestaRoutes);
app.use("/api/quorum", quorumRoutes);
app.use("/api/asamblea", asambleaRoutes);

export default app;
