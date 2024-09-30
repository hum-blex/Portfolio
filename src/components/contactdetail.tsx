"use client"; // This is needed for using client-side code in Next.js pages
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const ContactDetail = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // Form validation function
  const isFormValid = () => {
    let valid = true;
    const updatedFormData = { ...formData };

    // Check if name is empty
    if (!formData.name.value.trim()) {
      updatedFormData.name.error = "Name is required";
      valid = false;
    } else {
      updatedFormData.name.error = "";
    }

    // Check if email is empty
    if (!formData.email.value.trim()) {
      updatedFormData.email.error = "Email is required";
      valid = false;
    } else {
      updatedFormData.email.error = "";
    }

    // Check if message is empty
    if (!formData.message.value.trim()) {
      updatedFormData.message.error = "Message is required";
      valid = false;
    } else {
      updatedFormData.message.error = "";
    }

    setFormData(updatedFormData);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!isFormValid()) {
      setSubmitStatus("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name.value,
      from_email: formData.email.value,
      message: formData.message.value,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // Your EmailJS service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // Your EmailJS template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string // Your public API key or User ID from EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitStatus("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmitStatus("Message failed to send.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm font-serif text-neutral-950 w-full placeholder-neutral-500"
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          {formData.name.error && (
            <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm font-serif text-neutral-950 w-full placeholder-neutral-500"
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          {formData.email.error && (
            <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>
          )}
        </div>
      </div>

      <div className="w-full">
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm font-serif text-neutral-950 w-full placeholder-neutral-500"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        {formData.message.error && (
          <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>
        )}
      </div>

      <button
        className="w-full px-2 py-2 mt-4 bg-slate-400 rounded-md font-bold text-neutral-900"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {submitStatus && (
        <p className="mt-4 text-sm md:text-xl text-white ">{submitStatus}</p>
      )}
    </form>
  );
};
