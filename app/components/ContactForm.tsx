"use client";

import { useState } from "react";
import "../styles/contactform.css"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      alert("Veuillez entrer un email valide.");
      return;
    }

    if (
    !formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) ||
    formData.firstName.length < 2 ||
    formData.lastName.length < 2 ||
    formData.subject.length < 3 ||
    formData.message.length < 10
  ) {
    alert("Merci de remplir tous les champs correctement.");
    return;
}
  
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message envoyé avec succès !");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Une erreur s’est produite lors de l’envoi.");
    }
  } catch (error) {
    alert("Erreur lors de l’envoi du formulaire.");
    console.error(error);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
    >
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          minLength={2}
          className="data"
          placeholder="Prénom *"
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          minLength={2}
          className="data"
          placeholder="Nom *"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="data"
          placeholder="Adresse email *"
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          minLength={3}
          className="data"
          placeholder="Objet *"
        />
      
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          className="data"
          rows={4}
          placeholder="Votre message *"
        />

      <div className="btn-form">
        <button
          type="submit"
        > Envoyer </button>        
      </div>

    </form>



  );
}
