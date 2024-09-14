const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
    name: {type:String},
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    image: {type:String},
    phone: {type:String},
    streetAddress: {type:String},
    postalCode: {type:String},
    city: {type:String},
    country: {type:String},
    admin: {type:Boolean, default:false},
}, { timestamps: true })


const User = models?.User || model('User', UserSchema);

export default User;