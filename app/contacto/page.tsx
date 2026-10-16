"use client";

import { type FormEvent, useState } from "react";

import { withBasePath } from "@/lib/base-path";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: String(formData.get("nombre") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      mensaje: String(formData.get("mensaje") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    if (!payload.nombre || !payload.email || !payload.mensaje) {
      setStatus("error");
      setFeedback("Completá nombre, email y mensaje para poder enviar.");
      return;
    }

    setStatus("sending");
    setFeedback("Enviando mensaje...");

    try {
      const response = await fetch(withBasePath("/api/contact/"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setFeedback("Mensaje enviado. Te responderé pronto.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Hubo un problema al enviar el mensaje.");
    }
  };

  return (
    <div className="site-width contact-page">
      <section className="contact-page__hero">
        <h1>contacto</h1>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="contact-honeypot"
          aria-hidden="true"
        />

        <div className="contact-field">
          <label htmlFor="nombre">nombre</label>
          <input id="nombre" name="nombre" placeholder="su nombre..." />
        </div>

        <div className="contact-field">
          <label htmlFor="email">dirección de correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="su dirección de correo electrónico..."
          />
        </div>

        <div className="contact-field">
          <label htmlFor="mensaje">mensaje</label>
          <textarea id="mensaje" name="mensaje" placeholder="tu mensaje..." />
        </div>

        <button type="submit" className="contact-submit" disabled={status === "sending"}>
          {status === "sending" ? "enviando..." : "enviar"}
        </button>

        {feedback ? (
          <p
            className={`contact-feedback ${
              status === "error" ? "contact-feedback--error" : "contact-feedback--ok"
            }`}
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </div>
  );
}
