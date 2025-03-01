import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String, // Icon URL or name
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
