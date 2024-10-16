import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    subscription: { 
      type: Boolean, 
      default: false 
    },
    profilePicture: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    freeTestsTaken: {
      type: Number,
      default: 0,
    },
    examHistory: [
      {
        score: Number,
        passed: Boolean,
        date: { type: Date, default: Date.now },
        answers: Object, // Will store user's exam answers
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;