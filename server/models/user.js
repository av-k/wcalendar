import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Email is required'],
    validate: {
      validator(email) {
        const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
        return emailRegex.test(email);
      },
      message: '{VALUE} is not a valid email.',
    },
  },
  phoneNumber: String,
  note: String
}, {
  timestamps: true,
});

/**
 * Checking: email has not been taken
 */
userSchema
  .path('email')
  .validate(async (email, respond) => {
    const user = await User.findOne({ email });
    respond(typeof user !== 'undefined');
  }, 'Email already in use.');

const User = mongoose.model('User', userSchema);

export default User;
