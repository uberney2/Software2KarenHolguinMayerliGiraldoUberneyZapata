const { getProductRepositoryByUserId, getProductRepositoryByCriteria } = require('../infrastructure/productReposiroty');
const { getFollowingsRepository } = require('../../follows/infrastructure/followRepository');

async function getProductsByFollowersUseCase(userId, searchProduct) {
    try {

        const followerIds = await getFollowingsRepository(userId);

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
        console.log(products)
        return products;
    } catch (error) {
        return error;
    }
}

module.exports = { getProductsByFollowersUseCase };
