import User from '../database/models/user';

async function login(firstname: string, password: string) {
  try {
    const user = await User.findOne({ where: { firstname } });
    if (!user) {
      throw new Error('Invalid username or password');
    }

    // Assuming the user model has a password field
    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    return user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

export default {
  login
};
