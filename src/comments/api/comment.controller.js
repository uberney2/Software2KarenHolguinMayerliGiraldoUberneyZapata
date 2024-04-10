const { addCommentUseCase } = require('../application/create-comment');
//ExcepcionComment

async function createComment(req, res) {
    try {
        const newComment = await addCommentUseCase(req.body);
        return res.status(201).json({ comment: newComment });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = { createComment };