const { addCommentUseCase } = require('../application/create-comment');
const { ExcepcionUserNotFound } = require('../exceptions/userNotFound');
const { productNotFound } = require('../../products/exceptions/productNotFound');

async function createComment(req, res) {
    try {

        const newComment = await addCommentUseCase(req.body);
        return res.status(201).json({ comment: newComment });

    } catch (error) {

        if (error instanceof productNotFound) {
            return res.status(404).json({ message: error.message });
        }

        else if (error instanceof ExcepcionUserNotFound) {
            return res.status(404).json({ message: error.message });
        }

        return res.status(500).json({ message: error });
    }
}

module.exports = { createComment };