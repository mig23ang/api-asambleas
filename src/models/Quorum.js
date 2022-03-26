import { Schema, model, SchemaTypes } from "mongoose";

const quorumSchema = new Schema(
    {

        coeficiente: {
            type: SchemaTypes.Decimal128
        },
        apartment: {
            type: String
        },
        usuario: {
            type: String
        },
        idUser: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
                unique: true
            },
        ],

    },
    {
        timestamps: true,
        versionKey: false,
    }
);


export default model("Quorum", quorumSchema);