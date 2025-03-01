import express from "express";
import Contact from "../models/Contact.js";
import FAQ from "../models/FAQ.js";
import Service from "../models/Service.js";
import Testimonial from "../models/Testimonials.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Email Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📩 Contact Form Submission
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    // Send Notification to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `<h3>New Inquiry from ${name}</h3><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    });

    // Acknowledgment to User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Inquiry",
      html: `<h3>Thank You, ${name}!</h3><p>We have received your message and will get back to you soon.</p>`,
    });

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Get All FAQs
router.get("/faqs", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🎭 Get All Services
router.get("/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ⭐ Get All Testimonials
router.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
