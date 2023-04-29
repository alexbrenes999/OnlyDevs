import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const helpPostSchema = new Schema({
    title: { type: String, required: true },
    languages: { type: String, required: true, },
    timeline: { type: String, required: false, },
    description: { type: String, required: true, },
    contact: { type: String, required: true, },
});

const HelpPost = mongoose.model('HelpPost', helpPostSchema);

export default HelpPost;