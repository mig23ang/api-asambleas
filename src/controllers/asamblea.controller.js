import { ObjectId } from "mongodb";
import Asamblea from "../models/Asamblea";

const URL_PUBLIC = "https://eskala-api.herokuapp.com/";

export const createAsamblea = async (req, res) => {

    const { nombre, description, fecha, urlAsamblea } = req.body;
    const { file } = req;

    try {
        const newAsamblea = new Asamblea({
            nombre,
            description,
            fecha,
            urlImg: `${URL_PUBLIC}${file.filename}`,
            urlAsamblea,
            fileName: file.filename
        });

        const asambleaSaved = await newAsamblea.save();

        res.status(201).json(asambleaSaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const getAsambleaById = async (req, res) => {
    const { asambleaId } = req.params;

    const asamblea = await Asamblea.findById(asambleaId);
    res.status(200).json(asamblea);
};

export const getAsambleas = async (req, res) => {
    const asambleas = await Asamblea.findOne({ _id: ObjectId('62389256539277f3088e309e') });
    return res.json(asambleas);
};

export const updateAsambleaById = async (req, res) => {
    const updatedAsamblea = await Asamblea.findByIdAndUpdate(
        req.params.asambleaId,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updatedAsamblea);
};

export const deleteAsambleaById = async (req, res) => {
    const { asambleaId } = req.params;

    await Asamblea.findByIdAndDelete(asambleaId);
    // code 200 is ok too
    res.status(204).json();
};
