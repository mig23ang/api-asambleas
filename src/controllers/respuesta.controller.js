import Respuesta from "../models/Respuesta";
import Pregunta from "../models/Pregunta";
import User from "../models/User";
import { ObjectId } from "mongodb";

export const createRespuesta = async (req, res, next) => {

    const { si, no, numero } = req.body;
    const preguntasFound = await Pregunta.findOne({ numero: { $in: numero } });
    const idPregunta = preguntasFound._id;
    const idUsuario = req.userId;
    const usuario = await User.findById(idUsuario);
    const userId = usuario._id;
    console.log(userId, "aca el id del usuario", idPregunta, "aca el id de la pregunta")
    const votoSi = si * usuario.coeficiente;
    const votoNo = no * usuario.coeficiente;
    try {
        const respuestaFound = await Respuesta.findOne({ idUser: ObjectId(userId), idPregunta: ObjectId(idPregunta) });
        console.log(respuestaFound, "aca la respuesta")
        if (!respuestaFound) {
            const newRespuesta = new Respuesta({
                si: votoSi,
                no: votoNo,
                propietario: usuario.apartment,
                idUser: userId,
                idPregunta
            });
            const RespuestaSaved = await newRespuesta.save();
            res.status(201).json(RespuestaSaved);
        } else {
            return res.status(500).json({ message: "usuario ya registro el voto" })
        }
    } catch (error) {
        console.log(error);
    }
};

export const getRespuestaById = async (req, res) => {
    const { RespuestaId } = req.params;

    const Respuesta = await Respuesta.findById(RespuestaId);
    res.status(200).json(Respuesta);
};

export const getRespuestas = async (req, res) => {
    const respuestas = await Respuesta.find();
    return res.json(respuestas);
};
export const getRespuesta1 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "62125ed19531814630115308" });
    return res.json(respuestas);
};
export const getRespuesta2 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621379aebbdc901fa89fd499" });
    return res.json(respuestas);
};
export const getRespuesta3 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd81fac1ed91758c66c4f" });
    return res.json(respuestas);
};
export const getRespuesta4 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd823ac1ed91758c66c51" });
    return res.json(respuestas);
};
export const getRespuesta5 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd83dac1ed91758c66c53" });
    return res.json(respuestas);
};
export const getRespuesta6 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd84cac1ed91758c66c55" });
    return res.json(respuestas);
};
export const getRespuesta7 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd85aac1ed91758c66c57" });
    return res.json(respuestas);
};
export const getRespuesta8 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd86aac1ed91758c66c59" });
    return res.json(respuestas);
};

export const getRespuesta9 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd883ac1ed91758c66c5b" });
    return res.json(respuestas);
};
export const getRespuesta10 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd895ac1ed91758c66c5d" });
    return res.json(respuestas);
};
export const getRespuesta11 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd8a8ac1ed91758c66c5f" });
    return res.json(respuestas);
};
export const getRespuesta12 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "621fd8b4ac1ed91758c66c61" });
    return res.json(respuestas);
};
export const getRespuesta13 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd5d4e3879a0e110f5c68" });
    return res.json(respuestas);
};
export const getRespuesta14 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd5f1e3879a0e110f5c69" });
    return res.json(respuestas);
};
export const getRespuesta15 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd5f7e3879a0e110f5c6a" });
    return res.json(respuestas);
};
export const getRespuesta16 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd5fce3879a0e110f5c6b" });
    return res.json(respuestas);
};
export const getRespuesta17 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd601e3879a0e110f5c6c" });
    return res.json(respuestas);
};
export const getRespuesta18 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd606e3879a0e110f5c6d" });
    return res.json(respuestas);
};
export const getRespuesta19 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd60be3879a0e110f5c6e" });
    return res.json(respuestas);
};
export const getRespuesta20 = async (req, res) => {
    const respuestas = await Respuesta.find({ "idPregunta": "622bd611e3879a0e110f5c6f" });
    return res.json(respuestas);
};

export const updateRespuestaById = async (req, res) => {
    const updatedRespuesta = await Respuesta.findByIdAndUpdate(
        req.params.RespuestaId,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updatedRespuesta);
};

export const deleteRespuestaById = async (req, res) => {
    const { respuestaId } = req.params;

    await Respuesta.findByIdAndDelete(respuestaId);

    // code 200 is ok too
    res.status(204).json();
};