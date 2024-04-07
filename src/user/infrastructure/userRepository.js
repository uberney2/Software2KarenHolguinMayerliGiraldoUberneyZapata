const { userModel } = require("./user.model");
const bcrypt = require("bcrypt");

async function createUserRepository(userRequest) {
  try {
    const hashPassword = await bcrypt.hash(userRequest.password, 10);

    const user = new userModel({
      userName: userRequest.userName,
      email: userRequest.email,
      password: hashPassword,
      bio: userRequest.bio,
      avatar: userRequest.avatar,
      createdAt: userRequest.createdAt,
      updatedAt: userRequest.updatedAt,
    });
    const newUser = await user.save();
    return newUser;
  } catch (error) {
    return error
  }
}

async function getUserRepositoryByUserName(userName){
  try {
    const user = await userModel.findOne({ userName: userName });
    return user;
  } catch (error) {
    return error;
  }
}

module.exports = {createUserRepository, getUserRepositoryByUserName}