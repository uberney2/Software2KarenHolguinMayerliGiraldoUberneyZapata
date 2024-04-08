const { createCommentRepository } = require("../infrastructure/commentRepository")
//ExcepcionCommentNotFound

async function addComment(commentRequest) {
    return await createCommentRepository(commentRequest);
}

module.exports = { addComment }