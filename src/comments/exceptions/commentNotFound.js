class ExcepcioncommentNotFound extends Error{

    constructor(id){
        
        super(`comment with id: ${id} not found`)
    }
}

module.exports = {ExcepcioncommentNotFound};