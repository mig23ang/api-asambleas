import { ObjectId } from "mongodb";
import Pregunta from "../models/Pregunta";

export const createPreguntas = async () => {
    try {
        // Count Documents
        const count = await Pregunta.estimatedDocumentCount();

        // check for existing preguntas
        if (count > 0) return;

        // Create default Roles
        const values = await Promise.all([
            //*pregunta numero   1
            new Pregunta({
                _id: ObjectId("62125ed19531814630115308"),
                numero: 1,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 2
            new Pregunta({
                _id: ObjectId("621379aebbdc901fa89fd499"),
                numero: 2,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 3
            new Pregunta({
                _id: ObjectId("621fd81fac1ed91758c66c4f"),
                numero: 3,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 4
            new Pregunta({
                _id: ObjectId("621fd823ac1ed91758c66c51"),
                numero: 4,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 5
            new Pregunta({
                _id: ObjectId("621fd83dac1ed91758c66c53"),
                numero: 5,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 6
            new Pregunta({
                _id: ObjectId("621fd84cac1ed91758c66c55"),
                numero: 6,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 7
            new Pregunta({
                _id: ObjectId("621fd85aac1ed91758c66c57"),
                numero: 7,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 8
            new Pregunta({
                _id: ObjectId("621fd86aac1ed91758c66c59"),
                numero: 8,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 9
            new Pregunta({
                _id: ObjectId("621fd883ac1ed91758c66c5b"),
                numero: 9,
                text: "",
                visible: false
            }).save(),
            //*pregunta 10
            new Pregunta({
                _id: ObjectId("621fd895ac1ed91758c66c5d"),
                numero: 10,
                text: "",
                visible: false
            }).save(),
            //*pregunta 11
            new Pregunta({
                _id: ObjectId("621fd8a8ac1ed91758c66c5f"),
                numero: 11,
                text: "",
                visible: false
            }).save(),
            //*pregunta 12
            new Pregunta({
                _id: ObjectId("621fd8b4ac1ed91758c66c61"),
                numero: 12,
                text: "",
                visible: false
            }).save(),
            //*pregunta 13
            new Pregunta({
                _id: ObjectId("622bd5d4e3879a0e110f5c68"),
                numero: 13,
                text: "",
                visible: false
            }).save(),
            //*pregunta 14
            new Pregunta({
                _id: ObjectId("622bd5f1e3879a0e110f5c69"),
                numero: 14,
                text: "",
                visible: false
            }).save(),
            //*pregunta 15
            new Pregunta({
                _id: ObjectId("622bd5f7e3879a0e110f5c6a"),
                numero: 15,
                text: "",
                visible: false
            }).save(),
            //*pregunta 16
            new Pregunta({
                _id: ObjectId("622bd5fce3879a0e110f5c6b"),
                numero: 16,
                text: "",
                visible: false
            }).save(),
            //*pregunta 17
            new Pregunta({
                _id: ObjectId("622bd601e3879a0e110f5c6c"),
                numero: 17,
                text: "",
                visible: false
            }).save(),
            //*pregunta 18
            new Pregunta({
                _id: ObjectId("622bd606e3879a0e110f5c6d"),
                numero: 18,
                text: "",
                visible: false
            }).save(),
            //*pregunta 19
            new Pregunta({
                _id: ObjectId("622bd60be3879a0e110f5c6e"),
                numero: 19,
                text: "",
                visible: false
            }).save(),
            //*pregunta numero 20
            new Pregunta({
                _id: ObjectId("622bd611e3879a0e110f5c6f"),
                numero: 20,
                text: "",
                visible: false
            }).save(),

        ]);

        console.log(values);
    } catch (error) {
        console.error(error);
    }
};