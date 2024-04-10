class ExcepcionWrongCredentials extends Error{
    constructor(){
        uper(`WRONG CREDENTIALS`)
    }
}

module.exports = {ExcepcionWrongCredentials};