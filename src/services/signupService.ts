import User from '../database/models/user';


async function signUp(firstName: string, lastName: string, email: string, password: string){
  try {
    const user = await User.create({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    });

    console.log('User created:', user.toJSON());
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export default {
  signUp
};
