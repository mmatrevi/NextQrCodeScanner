import mongoose from 'mongoose';

const codeStoreSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  code: { type: String, required: true },
});

export default mongoose.models.CodeStore || mongoose.model('CodeStore', codeStoreSchema);
