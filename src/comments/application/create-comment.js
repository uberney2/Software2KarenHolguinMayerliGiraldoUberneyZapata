const { createCommentRepository, getCommentRepositoryByProductId, getCommentRepositoryByUserId } = require('../infrastructure/commentRepository');
const { ExcepcionUserNotFound } = require('../exceptions/userNotFound');
const { ProductNotFound } = require('../../products/exceptions/productNotFound');

async function addCommentUseCase(commentRequest) {

    const productId = await getCommentRepositoryByProductId(commentRequest.productId);

    if (!productId) {

        throw new ProductNotFound(`Product with ID ${productId} not found`);
    }

    const userId = await getCommentRepositoryByUserId(commentRequest.userId);

    if (!userId) {

        throw new ExcepcionUserNotFound(`User with ID ${userId} not found`);
    }

    return await createCommentRepository(commentRequest);
}

module.exports = { addCommentUseCase };