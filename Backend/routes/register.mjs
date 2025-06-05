import express from 'express'
import User from '../models/user.mjs'

const Auth = express.Router()

Auth.post('/register', async (req, res) => {
    console.log("Añadiendo a la base de datos")
    try {
        console.log(req.body.name)
        const {name, password, email, rol, portfolio, pais, edad} = req.body
        const user = await User.create({
            name : name,
            password: password,
            email: email,
            rol: rol,
            portfolio: portfolio,
            pais: pais,
            edad: edad
    })
    res.send("Usuario Añadido: ", user)
        
        
    } catch (error) {
        console.log(error.errorResponse)
        if (error.errorResponse.code == 11000){
            var resp = "El correo: " + error.errorResponse.keyValue.email  + " ya se encuentra registrado intenta con otro"
            res.send(resp)
        }
        else{
            res.send("Error al añadir al usuario")
        }
    }
})


export default Auth