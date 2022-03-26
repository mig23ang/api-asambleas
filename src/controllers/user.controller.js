import User from "../models/User";
import Role from "../models/Role";
import { usuarios } from "../configs/sockets";


export const createUser = async (req, res) => {
  try {
    const { name, email, password, roles, document, coeficiente, apartment } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      name,
      email,
      password,
      document,
      coeficiente,
      apartment,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      document: savedUser.document,
      coeficiente: savedUser.coeficiente,
      apartment: savedUser.apartment,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  res.json(usuarios);
};


export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId)
    res.json(user);
  } catch (error) {
    console.log(error)
  }
};

export const getUsuarios = async (req, res) => {
  try {
    const usuariosTotal = await User.find();
    return res.json(usuariosTotal);
  } catch (error) {
    console.log(error)
  }
};

