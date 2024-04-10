const { commentModel } = require('./comment.model');

async function createCommentRepository(commentRequest) {

    try {

        const comment = new commentModel({

            productId: commentRequest.productId,
            userId: commentRequest.userId,
            content: commentRequest.comment,
            rate: commentRequest.rate,
            createdAt: commentRequest.createdAt,
            updatedAt: commentRequest.updatedAt,
        });

        const save = await comment.save();
        return save;

    } catch (error) {

        return error;
    }
}

async function getCommentRepositoryByProductId(productId) {

    try {

        const comment = await commentModel.find({ productId: productId });
        return comment;

    } catch (error) {

        return error;
    }
}

async function getCommentRepositoryByUserId(userId) {

    try {

        const comment = await commentModel.find({ userId: userId });
        return comment;

    } catch (error) {

        return error;
    }
}

module.exports = { createCommentRepository, getCommentRepositoryByProductId, getCommentRepositoryByUserId };