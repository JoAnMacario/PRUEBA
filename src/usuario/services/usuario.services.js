const userModel = require('../model/usuario.model');

async function findByDPI(DPI) {
    let collection = await userModel.findOne({DPI: DPI});
    return collection
}

async function findByID(Id) {
    let collection = await userModel.findById(Id);
    return collection
}

async function createUser(data) {
    try {
        const user = new userModel(data);
        return user.save();
    } catch (error) {
        console.log("error", error)
    }

}


async function deleteUserS(userId) {
    try {
        const deletedUser = await userModel.findByIdAndRemove(userId);
        return deletedUser;
    } catch (error) {
        console.log("error", error)
    }

}


module.exports = {
    findByDPI,
    createUser,
    findByID,
    deleteUserS
};