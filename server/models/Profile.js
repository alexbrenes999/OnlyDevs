import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const profileSchema = new Schema({
    location: { type: String, required: true },
    jobTitle: { type: String, required: true, },
    skills: { type: String, required: true, },
    contact: { type: String, required: true, },
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;

