import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  surname: String,
  email: String,
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
});

export default mongoose.model('User', UserSchema) 