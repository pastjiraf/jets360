import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: {type: Object, default: {}},


    // new changes: forgotten password
    resetPasswordToken: { type: String }, // Added for password reset token
    resetPasswordExpires: { type: Date }  // Added for token expiration


},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;