import Pregunta from "../models/Pregunta";

export const createPregunta = async (req, res) => {
  const { numero, text } = req.body;

  try {
    const newPregunta = new Pregunta({
      numero,
      text
    });

    const preguntaSaved = await newPregunta.save();

    res.status(201).json(preguntaSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getPreguntaById = async (req, res) => {
  const { preguntaId } = req.params;

  const pregunta = await Pregunta.findById(preguntaId);
  res.status(200).json(Pregunta);
};

export const getPreguntas = async (req, res) => {
  const preguntas = await Pregunta.find();
  return res.json(preguntas);
};

export const updatePreguntaById = async (req, res) => {
  const updatedPregunta = await Pregunta.findByIdAndUpdate(
    req.params.preguntaId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedPregunta);
};

export const deletePreguntaById = async (req, res) => {
  const { preguntaId } = req.params;

  await Pregunta.findByIdAndDelete(preguntaId);

  // code 200 is ok too
  res.status(204).json();
};