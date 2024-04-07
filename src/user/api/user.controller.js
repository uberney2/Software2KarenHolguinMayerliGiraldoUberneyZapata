const {createUserUseCase} = require('../application/create-user')
const {ExcepcionUserParameterAlreadyExist} = require('../exceptions/userParameterAlreadyExist')

async function singUp(req, res){
    try {
        const newUser = await createUserUseCase(req.body)
        return res.status(201).json({ user: newUser });
    } catch (error) {
        if (error instanceof ExcepcionUserParameterAlreadyExist) {
            return res.status(400).send({ error: error.message });
          }
          return res.status(500).json({ message: error });
    }
}


module.exports = { singUp };
