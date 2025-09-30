import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Fale Comigo</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>raulkvn@gmail.com</h5>
            <a href="mailto:raulkvn@gmail.com">Enviar mensagem</a>
          </article>

          <article className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 77 99923-6923</h5>
            <a
              href="https://wa.me/5577999236923"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar mensagem
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
