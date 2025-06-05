import express from 'express'
import User from '../models/user.mjs'

const router = express.Router({mergeParams: true})

router.get('/', async (req, res) => {
    const users = await User.find({})
    res.send(users)
}) 




export default router