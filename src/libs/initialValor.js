import Valor from "../models/valorQuorum";


export const createValor = async () => {
    try {
        // Count Documents
        const count = await Valor.estimatedDocumentCount();

        // check for existing 
        if (count > 0) return;

        // Create default 
        const values = await Promise.all([
            new Valor({
                _id: Object('6232b18d62a92d782e5d3251'),
                valor: 50
            }).save(),
        ]);
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};