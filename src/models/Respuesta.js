import { Schema, model } from "mongoose";

const respuestaSchema = new Schema(
    {

        si: {
            type: Number,
            default: 0
        },
        no: {
            type: Number,
            default: 0
        },
        propietario: {
            type: String,
            required: true
        },
        idUser: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        idPregunta: [
            {
                type: Schema.Types.ObjectId,
                ref: "Pregunta",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


export default model("Respuesta", respuestaSchema);