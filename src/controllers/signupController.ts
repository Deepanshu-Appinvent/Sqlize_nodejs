import signupService from '../services/signupService';

async function signUpController(req, res) {
const { firstName, lastName, email, password } = req.body;

try {
const user = await signupService.signUp(firstName, lastName, email, password);
res.status(200).json({ message: 'Signup successful', user });
} catch (error) {
console.error('Signup failed:', error);
res.status(500).json({ message: 'Signup failed', error });
}
}

export default {
signUpController
};