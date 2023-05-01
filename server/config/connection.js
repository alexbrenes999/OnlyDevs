import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://alexbrenes:Tyra6310@onlydevs.riluyn8.mongodb.net/onlydevsdb?retryWrites=true&w=majority');

export default mongoose.connection;