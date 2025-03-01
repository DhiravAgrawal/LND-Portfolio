import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  rating: Number,
}, { timestamps: true });

export default mongoose.model("Testimonial", TestimonialSchema);
