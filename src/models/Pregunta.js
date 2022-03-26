import { Schema, model } from "mongoose";

const preguntaSchema = new Schema(
    {
        numero: {
            type: Number,
        },
        text: {
            type: String,
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


export default model("Pregunta", preguntaSchema);
