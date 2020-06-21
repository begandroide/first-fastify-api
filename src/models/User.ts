import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  surname: String,
  email: String,
});

export default mongoose.model('User', UserSchema) 