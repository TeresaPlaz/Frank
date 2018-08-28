const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const messageSchema = new Schema({
  content: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
Message = mongoose.model('Message', userSchema);
module.exports = Message;