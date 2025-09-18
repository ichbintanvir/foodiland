import React, { useState } from "react";
import H1 from "../../elements/Heading/H1";
import Button from "../Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    enquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Business logic: send data to backend or API
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      enquiryType: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="space-y-5">
      <H1>Contact Us</H1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-10">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="name" className="uppercase text-black/60">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              className="border border-black/10 px-5 py-3 rounded-2xl focus:outline-none"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="email" className="uppercase text-black/60">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address..."
              value={formData.email}
              onChange={handleChange}
              className="border border-black/10 px-5 py-3 rounded-2xl focus:outline-none"
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="subject" className="uppercase text-black/60">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-black/10 px-5 py-3 rounded-2xl focus:outline-none"
            />
            {errors.subject && <span className="text-red-500">{errors.subject}</span>}
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="enquiryType" className="uppercase text-black/60">Enquiry Type</label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="border border-black/10 px-5 py-3 rounded-2xl text-black/60 focus:outline-none"
            >
              <option value="" className="text-black/60">Select a subject...</option>
              <option value="general" className="text-black/60">General Inquiry</option>
              <option value="support" className="text-black/60">Customer Support</option>
              <option value="feedback" className="text-black/60">Feedback</option>
              <option value="partnership" className="text-black/60">Partnership Opportunity</option>
            </select>
            {errors.subject && <span className="text-red-500">{errors.subject}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="uppercase text-black/60">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            className="border border-black/10 px-5 py-3 h-32 rounded-2xl focus:outline-none"
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>

        <Button className="bg-black text-white">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
