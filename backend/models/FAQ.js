import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,  // Icon URL or icon name
}, { timestamps: true });

export default mongoose.model("Service", ServiceSchema);
