import { Schema, model } from "mongoose";

const asambleaSchema = new Schema(
    {
        nombre: {
            type: String,
        },
        description: {
            type: String,
        },
        fecha: {
            type: String
        },
        fileName: {
            type: String
        },
        urlImg: {
            type: String
        },
        urlAsamblea: {
            type: String
        },
        activa: {
            type: Boolean
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


export default model("Asamblea", asambleaSchema);