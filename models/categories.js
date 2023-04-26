import { Schema, model, models } from 'mongoose';
  const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  })

  const User = models.user || model('user', userSchema);

export default User;