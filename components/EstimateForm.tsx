"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { site } from "@/data/site";

export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="estimateForm" onSubmit={submitForm}>
      <div className="fieldRow">
        <label>
          Full name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>

      <div className="fieldRow">
        <label>
          Email address
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Project town
          <input name="town" required />
        </label>
      </div>

      <label>
        Service needed
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {site.services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
          <option>Other</option>
        </select>
      </label>

      <label>
        Project details
        <textarea
          name="details"
          rows={5}
          required
          placeholder="Describe the work, timing, access, and anything else we should know."
        />
      </label>

      <button className="primaryButton formButton" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <LoaderCircle className="spin" size={18} /> : <ArrowRight size={18} />}
        {status === "sending" ? "Sending" : "Request Estimate"}
      </button>

      <p className={`formStatus ${status}`}>
        {status === "success" && "Thank you. Your estimate request was received."}
        {status === "error" && "The request could not be sent. Please call us directly."}
      </p>
    </form>
  );
}
