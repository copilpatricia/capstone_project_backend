// create a connection

import mongoose from 'mongoose';

export async function conn() {
    try {
        await mongoose.connect(process.env.ATLAS_URL);
        console.log('Connected to MongoDB')
    } catch(error) {
        console.log(error.message);
    }
}