import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
