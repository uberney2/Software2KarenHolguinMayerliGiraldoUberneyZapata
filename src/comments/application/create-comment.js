const { createCommentRepository } = require("../infrastructure/commentRepository")
//ExcepcionCommentNotFound

async function addCommentUseCase(commentRequest) {
    return await createCommentRepository(commentRequest);
}

module.exports = { addCommentUseCase }