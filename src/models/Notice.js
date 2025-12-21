import mongoose from 'mongoose';

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the notice.'],
  },
  link: {
    type: String,
    required: [true, 'Please provide the link for the notice.'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.Notice || mongoose.model('Notice', NoticeSchema);
