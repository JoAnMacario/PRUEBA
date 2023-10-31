const findUserLogin = require("../services/auth.service");
const jwt = require('jsonwebtoken');

const Login = async (req, res) => {

    try {
        const { CorreoElectronico, Clave } = req.body;
        const user = await findUserLogin(CorreoElectronico, Clave)
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error });
    }

};

module.exports = {
    Login
};