const { getProductRepositoryByUserId, getProductRepositoryByCriteria } = require('../infrastructure/productReposiroty');
const { getFollowersRepository } = require('../../follows/infrastructure/followRepository');

async function getProductsByFollowersUseCase(userId, searchProduct) {
    try {

        const followerIds = await getFollowersRepository(userId);

        let products = [];

        if (searchProduct) {
            products = await getProductRepositoryByCriteria(searchProduct);
        } else {
            products = await Promise.all(followerIds.map(async (followerId) => {
                return await getProductRepositoryByUserId(followerId._id);
            }));
            products = products.flat();
        }

        products = products.filter(product => followerIds.some(follower => follower._id.equals(product.userId)));

        return products;
    } catch (error) {
        return error;
    }
}

module.exports = { getProductsByFollowersUseCase };
