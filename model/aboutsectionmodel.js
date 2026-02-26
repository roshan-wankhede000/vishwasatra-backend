import mongoose from 'mongoose';

const textEntrySchema = new mongoose.Schema({
  text1: {
    type: String,
    required: true,
    trim: true,
  },
  text2: {
    type: String,
    required: true,
    trim: true,
  }
});

const TextEntry = mongoose.model('TextEntry', textEntrySchema);

export default TextEntry;