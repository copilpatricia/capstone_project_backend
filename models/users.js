import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 8;

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 20
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
	    minLength: 6,
	    maxLength: 20
    }
}, {
    timestamps: true
})

usersSchema.index({email: 1})

// hide the password using bcrypt 
usersSchema.pre('save', async function(next){
    // if the password has not change continue
    if(!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next()
  })

  export default mongoose.model("Users", usersSchema)