import { ObjectId } from "mongodb";
import Asamblea from "../models/Asamblea";


export const createAsambleas = async () => {
    try {
        // Count Documents
        const count = await Asamblea.estimatedDocumentCount();
        // check for existing 
        if (count > 0) return;

        // Create default 
        const values = await Promise.all([
            new Asamblea({
                _id: ObjectId('62389256539277f3088e309e'),
                nombre: "",
                description: "",
                fecha: "05/05/2002",
                urlImg: "",
                urlAsamblea: "",
                fileName: "file-1647881310409.jpg",
                activa: false
            }).save(),
        ]);

        console.log(values);
    } catch (error) {
        console.error(error);
    }
};