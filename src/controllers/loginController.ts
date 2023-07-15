import loginService from '../services/loginService';

async function loginController(req, res) {
const { firstname, password } = req.body;

try {
const loginResult = await loginService.login(firstname, password);
res.json(loginResult);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

export default {
loginController
};