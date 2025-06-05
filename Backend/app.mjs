// Importar paquetes
import express from 'express'
import './db/connection.mjs'
import User from './models/user.mjs'
import Auth from './routes/register.mjs'
import users from './routes/users.mjs'

// Cargar variables de entorno
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT


const app = express() 



// Middlewares
app.use(express.json())
app.use('/auth', Auth)
app.use('/users', users)



//Rutas Basicas

app.get('/', (req, res) =>  {
    res.send('Hello World')
})


app.listen(port, () => {
    console.log(`App listengin on port ${port}`)
})
