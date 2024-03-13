import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String, 
    required: true, 
    trim: true,
  },
  email: {
    type: String, 
    required: true,
    trim: true, 
    unique: true,
  },
  password: {
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  }
});

const User = mongoose.model('User', UserSchema);

export default User; 
