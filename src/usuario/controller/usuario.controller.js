const { findByDPI, createUser, findByID, deleteUserS } = require('../services/usuario.services') 

const CreateUser = async (req, res) => {

    try {
        
        const existsUser = await findByDPI(req.params.DPI)

        if(existsUser){
            res.status(200).json({message:"El usuario ya se encuentra registrado"})
        }

        const newUser = await createUser(req.body)
        res.status(201).json({message: "Usuario creado correctamente"})
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: error });
    }
   
};

const updateUser = async (req, res) => {

    try {

        const userId = req.userId;
        const existsUser = await findByID(userId)

        if (!existsUser) {
            res.status(404).json({ message: "Usuario no encontrado" })
        }

        const user = new userModel(req.body);
        existsUser = { ...user};
        existsUser.save()
        res.status(200).json(existsUser)
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: error });
    }

};

const getUserData = async (req, res) => {

    try {
        const userId = req.userId;
        const existsUser = await findByID(userId)

        if (!existsUser) {
            res.status(404).json({ message: "Usuario no encontrado" })
        }
        res.status(200).json(existsUser)

    } catch (error) {
        res.status(500).json({ error: error });
    }

};

const deleteUser = async (req, res) => {

    try {
        const userId = req.userId;
        const deletedUser = await deleteUserS(userId)

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error });
    }

};

module.exports = {
    CreateUser,
    getUserData,
    updateUser,
    deleteUser
};

