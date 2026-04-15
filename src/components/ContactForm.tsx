"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "exterior-wash", label: "Exterior Wash" },
  { value: "interior-detail", label: "Interior Detail" },
  { value: "full-detail", label: "Full Detail" },
  { value: "custom", label: "Custom / Other" },
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Pre-select service from URL params
  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      const match = serviceOptions.find((o) => o.value === service);
      if (match) {
        setForm((prev) => ({ ...prev, service: match.value }));
      }
    }
  }, [searchParams]);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name || form.name.length < 2) {
      newErrors.name = "Name is required (min 2 characters)";
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Valid email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-card-bg border border-green-500/30 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">
          Thanks for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-red-primary hover:text-white transition-colors text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card-bg border border-white/10 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Request a Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full bg-gray-900 border rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${
              errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-red-primary"
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full bg-gray-900 border rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${
              errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-red-primary"
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-gray-900 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-primary transition-colors"
            placeholder="(555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
            Service Interested In
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full bg-gray-900 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-primary transition-colors"
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-gray-900 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-primary transition-colors resize-none"
            placeholder="Tell us about your vehicle and what you're looking for..."
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-red-primary hover:bg-red-dark disabled:opacity-50 text-white py-3 rounded-md font-semibold transition-colors"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "error" && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </form>
    </div>
  );
}
