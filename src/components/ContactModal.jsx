import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  X,
  ArrowRight,
  Mail,
  Sparkles,
  Instagram,
  AlertCircle,
  Loader2,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const SERVICES = [
  "App & Web Designing",
  "Digital Marketing",
  "Business Automation",
  "AutoCAD Designs",
  "Software Development",
  "Cloud Solutions",
  "Other",
];

const EJ_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EJ_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EJ_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export function ContactModal({ isOpen, onClose, defaultService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    referralCode: "",
    message: "",
    _honey: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const lastSubmitRef = useRef(0);

  useEffect(() => {
    if (defaultService) {
      const match = SERVICES.find(
        (s) => s.toLowerCase() === defaultService.toLowerCase(),
      );

      setFormData((prev) => ({
        ...prev,
        service: match || defaultService,
      }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        referralCode: "",
        message: "",
        _honey: "",
      });

      setErrors({});
      setStatus("idle");
      setErrorMsg("");
    }

    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    }

    if (!formData.service) {
      errs.service = "Please select a service.";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("========== FORM SUBMIT START ==========");
    console.log("Form Data:", formData);

    if (formData._honey) {
      console.log("❌ Honeypot triggered");
      return;
    }

    const now = Date.now();

    if (now - lastSubmitRef.current < 5000) {
      console.log("❌ Submit blocked: Please wait 5 seconds");
      return;
    }

    const errs = validate();

    console.log("Validation Errors:", errs);

    if (Object.keys(errs).length > 0) {
      console.log("❌ Form validation failed");
      setErrors(errs);
      return;
    }

    setErrors({});
    setErrorMsg("");
    setStatus("submitting");
    lastSubmitRef.current = now;

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim() || "Not provided",
      from_phone: formData.phone.trim(),
      service: formData.service,
      referral_code: formData.referralCode.trim() || "Not provided",
      message: formData.message.trim() || "Not provided",
      submitted_at: submissionTime,
    };

    console.log("========== EMAILJS CONFIG ==========");
    console.log("Service ID:", EJ_SERVICE);
    console.log("Template ID:", EJ_TEMPLATE);
    console.log("Public Key:", EJ_KEY);

    console.log("========== EMAILJS TEMPLATE PARAMS ==========");
    console.log(templateParams);

    try {
      if (!EJ_SERVICE || !EJ_TEMPLATE || !EJ_KEY) {
        console.error("❌ EmailJS environment variables are missing");

        console.error({
          service: EJ_SERVICE,
          template: EJ_TEMPLATE,
          publicKey: EJ_KEY,
        });

        setErrorMsg(
          "Contact form is temporarily unavailable. Please email us directly at 3stacktech@gmail.com.",
        );

        setStatus("error");
        return;
      }

      console.log("========== SENDING EMAIL ==========");

      const response = await emailjs.send(
        EJ_SERVICE,
        EJ_TEMPLATE,
        templateParams,
        EJ_KEY,
      );

      console.log("========== EMAILJS SUCCESS ==========");
      console.log("EmailJS Response:", response);
      console.log("Response Status:", response.status);
      console.log("Response Text:", response.text);

      setStatus("success");
    } catch (err) {
      console.error("========== EMAILJS ERROR ==========");
      console.error("Full Error:", err);
      console.error("Error Status:", err?.status);
      console.error("Error Text:", err?.text);
      console.error("Error Message:", err?.message);

      setErrorMsg(
        "Something went wrong while sending your message. Please try again or email us directly at 3stacktech@gmail.com.",
      );

      setStatus("error");
    }
  };

  const handleChange = (field) => (val) => {
    setFormData((prev) => ({
      ...prev,
      [field]: val,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="smodal-overlay"
      data-lenis-prevent
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Contact 3STACK"
    >
      <div className="smodal-shell">
        <button
          type="button"
          className="smodal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <aside className="smodal-left">
          <div className="smodal-brand">
            <img
              src="/images/3stack-logo.png"
              alt="3STACK"
              className="smodal-logo"
              width="42"
              height="48"
            />
          </div>

          <div className="smodal-left-body">
            <p className="smodal-left-tagline">
              Tell us what you're building.
              <br />
              We'll get back to you.
            </p>

            <div className="smodal-contact-links">
              <a
                href="mailto:3stacktech@gmail.com"
                className="smodal-contact-item"
                aria-label="Email 3STACK"
              >
                <Mail size={15} />
                <span>3stacktech@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/3stacktech"
                target="_blank"
                rel="noopener noreferrer"
                className="smodal-contact-item"
                aria-label="3STACK on Instagram"
              >
                <Instagram size={15} />
                <span>@3stacktech</span>
              </a>
            </div>
          </div>

          <div className="smodal-left-tags">
            <span>Web Design</span>
            <span>Software</span>
            <span>Automation</span>
            <span>Marketing</span>
            <span>Cloud</span>
            <span>AutoCAD</span>
          </div>
        </aside>

        <div className="smodal-right">
          {status === "success" ? (
            <div className="sform-success">
              <div className="sform-success-icon">
                <CheckCircle2 size={44} color="var(--accent)" />
              </div>

              <h3 className="sform-success-title">Thanks for reaching out.</h3>

              <p className="sform-success-body">
                Your message has been sent to the 3STACK team. We'll review your
                inquiry and get back to you soon.
              </p>

              <div className="sform-success-actions">
                <a
                  href="mailto:3stacktech@gmail.com"
                  className="sform-action-link"
                >
                  <Mail size={14} />
                  <span>Email directly</span>
                </a>

                <a
                  href="https://www.instagram.com/3stacktech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sform-action-link"
                >
                  <Instagram size={14} />
                  <span>Instagram DM</span>
                </a>
              </div>

              <button
                type="button"
                className="sform-done-btn"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="sform-header">
                <div className="sform-eyebrow">
                  <Sparkles size={13} color="var(--accent)" />
                  <span>START A CONVERSATION</span>
                </div>

                <h2 className="sform-title">Let's build together</h2>

                <p className="sform-subtitle">
                  Tell us what you're building. We'll get back to you.
                </p>
              </div>

              <form className="sform-body" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      _honey: e.target.value,
                    }))
                  }
                  style={{ display: "none" }}
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                />

                <div className="sform-row-2">
                  <div className="sform-field-wrap">
                    <label className="sform-label" htmlFor="cf-name">
                      Full Name <span className="sform-required">*</span>
                    </label>

                    <input
                      id="cf-name"
                      type="text"
                      className={`sform-input ${
                        errors.name ? "sform-input-error" : ""
                      }`}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name")(e.target.value)}
                      required
                      aria-required="true"
                      autoComplete="name"
                    />

                    {errors.name && (
                      <span className="sform-error-msg" role="alert">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="sform-field-wrap">
                    <label className="sform-label" htmlFor="cf-email">
                      Email <span className="sform-optional">(Optional)</span>
                    </label>

                    <input
                      id="cf-email"
                      type="email"
                      inputMode="email"
                      className={`sform-input ${
                        errors.email ? "sform-input-error" : ""
                      }`}
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email")(e.target.value)}
                      autoComplete="email"
                    />

                    {errors.email && (
                      <span className="sform-error-msg" role="alert">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="sform-row-2">
                  <div className="sform-field-wrap">
                    <label className="sform-label" htmlFor="cf-phone">
                      Phone <span className="sform-required">*</span>
                    </label>

                    <input
                      id="cf-phone"
                      type="tel"
                      inputMode="tel"
                      className={`sform-input ${
                        errors.phone ? "sform-input-error" : ""
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone")(e.target.value)}
                      required
                      aria-required="true"
                      autoComplete="tel"
                    />

                    {errors.phone && (
                      <span className="sform-error-msg" role="alert">
                        <AlertCircle size={12} />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="sform-field-wrap">
                    <label className="sform-label" htmlFor="cf-service">
                      Service <span className="sform-required">*</span>
                    </label>

                    <div className="sform-select-wrap">
                      <select
                        id="cf-service"
                        className={`sform-input sform-select ${
                          errors.service ? "sform-input-error" : ""
                        }`}
                        value={formData.service}
                        onChange={(e) =>
                          handleChange("service")(e.target.value)
                        }
                        required
                        aria-required="true"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>

                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>

                      <ChevronDown size={15} className="sform-select-icon" />
                    </div>

                    {errors.service && (
                      <span className="sform-error-msg" role="alert">
                        <AlertCircle size={12} />
                        {errors.service}
                      </span>
                    )}
                  </div>
                </div>

                <div className="sform-row-2">
                  <div className="sform-field-wrap">
                    <label className="sform-label" htmlFor="cf-referral">
                      Referral Code{" "}
                      <span className="sform-optional">(Optional)</span>
                    </label>

                    <input
                      id="cf-referral"
                      type="text"
                      className="sform-input"
                      placeholder="Enter referral code"
                      value={formData.referralCode}
                      onChange={(e) =>
                        handleChange("referralCode")(e.target.value)
                      }
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="sform-field-wrap">
                  <label className="sform-label" htmlFor="cf-message">
                    Message <span className="sform-optional">(Optional)</span>
                  </label>

                  <textarea
                    id="cf-message"
                    className={`sform-input sform-textarea ${
                      errors.message ? "sform-input-error" : ""
                    }`}
                    placeholder="Tell us briefly about your project or requirement..."
                    value={formData.message}
                    onChange={(e) => handleChange("message")(e.target.value)}
                    rows={4}
                  />

                  {errors.message && (
                    <span className="sform-error-msg" role="alert">
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {status === "error" && (
                  <div className="sform-global-error" role="alert">
                    <AlertCircle size={15} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="sform-footer">
                  <span className="sform-privacy-note">
                    Your details are sent directly to 3STACK. No spam.
                  </span>

                  <button
                    type="submit"
                    className="sform-submit-btn"
                    disabled={status === "submitting"}
                    aria-label="Submit inquiry"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="sform-spinner" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>LET'S TALK</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
