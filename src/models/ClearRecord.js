import mongoose from "mongoose";

const ClearRecordSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mood: { type: mongoose.Schema.Types.ObjectId, ref: "Mood", required: true },
  created: { type: Date, default: Date.now },
  comment: { type: String, default: "" },
});

export const ClearRecord =
  mongoose.models.ClearRecord ||
  mongoose.model("ClearRecord", ClearRecordSchema);
export default ClearRecord;