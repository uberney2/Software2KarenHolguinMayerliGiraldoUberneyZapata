const { commentModel } = require("./comment.model");

async function createCommentRepository(commentRequest) {
    try {
        const comment = new commentModel({
            productId: commentRequest.productId,
            userId: commentRequest.userId,
            content: commentRequest.comment,
            createdAt: commentRequest.createdAt,
            updatedAt: commentRequest.updatedAt,
        });

        const save = await comment.save();
        return save;
    } catch (error) {
        return error;
    }
}

module.exports = { createCommentRepository };