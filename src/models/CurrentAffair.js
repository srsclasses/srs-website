import mongoose from 'mongoose';

const CurrentAffairSchema = new mongoose.Schema({
  date: {
    type: String, // Storing as YYYY-MM-DD for simple equality checks
    required: [true, 'Please provide a date for this current affair.'],
    unique: true, // Only one entry per date
    index: true,
  },
  link: {
    type: String,
    required: [true, 'Please provide the PDF link.'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.CurrentAffair || mongoose.model('CurrentAffair', CurrentAffairSchema);
