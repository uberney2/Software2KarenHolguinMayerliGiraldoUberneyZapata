class ExcepcionUserNameNotFound extends Error{
    constructor(userName){
        uper(`userName: ${userName} not found`)
    }
}

module.exports = {ExcepcionUserNameNotFound};