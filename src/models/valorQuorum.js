import { Schema, model } from "mongoose";

const valorSchema = new Schema(
    {
        valor: {
            type: Number
        }
    }

);


export default model("Valor", valorSchema);