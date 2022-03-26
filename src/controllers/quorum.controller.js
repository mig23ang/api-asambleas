import { ObjectId } from 'mongodb';
import Quorum from '../models/Quorum'
import Valor from '../models/valorQuorum'

export const getQuorum = async (req, res) => {
    try {
        const suma = await Quorum.find();
        const sumAll = Object.values(suma).map(item => item.coeficiente).reduce((a, b) => parseFloat(a) + parseFloat(b)
        );
        res.json(sumAll)
    } catch (error) {
        console.log(error)
    }
};
export const getLista = async (req, res) => {
    try {
        const lista = await Quorum.find();
        res.json(lista)
    } catch (error) {
        console.log(error)
    }
};
export const getValor = async (req, res) => {
    try {
        const valores = await Valor.find({ _id: ObjectId('6232b18d62a92d782e5d3251') });
        const valor = Object.values(valores).map(item => item.valor)
        console.log(valor)
        res.json(valor)
    } catch (error) {
        console.log(error)
    }
};