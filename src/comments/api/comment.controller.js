const { addComment } = require('../application/create-comment');
//ExcepcionComment

async function createComment(req, res) {
    try {
        const newComment = await addComment(req.body);
        return res.status(201).json({ comment: newComment });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = { createComment };