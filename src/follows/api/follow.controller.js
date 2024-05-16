const { getFollowersUseCase, getFollowingsUseCase, followUserUseCase } = require("../application/following-user");
const jwt = require('jsonwebtoken');

async function followUserController(req, res) {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken.userId;

        const { userIdToFollow } = req.body; 

        console.log(userId)
        console.log(userIdToFollow)

        const user = await followUserUseCase(userId, userIdToFollow);

        const response = {
            response: user
        };

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function getFollowers(req, res) {
    try {
        const followers = await getFollowersUseCase(req.params.id);
        return res.status(200).json({followers});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function getFollowings(req, res) {
    try {
        const followings = await getFollowingsUseCase(req.params.id);

        return res.status(200).json({followings});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    followUserController,
    getFollowers,
    getFollowings
};
