import Pregunta from "../models/Pregunta";
import Respuesta from "../models/Respuesta";
import User from "../models/User";


export const respuestaRepetida = async (req, res, next) => {
    try {
        const { numero } = req.body;
        const user = await User.findById(req.userId);
        const preguntasFound = await Pregunta.find({ numero: { $in: numero } });
        const idPregunta = preguntasFound.map((pregunta) => pregunta._id)
        const respuestaFound = await Respuesta.find({ idPregunta: { $in: idPregunta } });
        console.log(respuestaFound, "aca la respuesta aaaaaa")
        for (let i = 0; i < respuestaFound.length; i++) {
            if (respuestaFound[i].idUser === user._id) {
                next()
                return
            } else {
                return res.status(500).send({ message: " ya registro voto" });
            }
        }


    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
};