import mongoose from 'mongoose'

const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    registerAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
    },

    rol: {
        type: String,
        required: true,
    },

    portfolio: {
        type: Array,
        required: true,
    },

    pais: {
        type: String,
        required: true,
    },

    edad: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)
export default User